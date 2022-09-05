let serialNumberValue;
var totalBeforeDiscount = 0;
var discountValue = 0;
var totalAfterDiscount = 0;
const productsInCart = [[]];
const SerialNumbersForProductsInCart = [];
const totalForAllProductsInCart = [];
const discountForAllProductsInCart = [];
var productOrder = 1;
var NumberOfProductShown = 0;
var productPosition;
var increaseQuantityToExistProductFunctionValue = false;
var quantityValue = 0;
var quantitySet = 0;
var totalBeforeDiscountValue = 0;
var discountValueTotal = 0;

function serialInput(evt) {

    if (event.key === 'Enter') {
        serialNumberValue = document.getElementById("serialInput").value;
        checkSerialInput();
    }

}

function checkSerialInput() {

    const products = ["13579,apple,2,0.5", "24695,orange,5,1", "73584,lemon,10,2.5", "12345,chocolate,4,0", "25814,soap,8,2", "14365,yogurt,3,0", "75958,milk,10,3", "52369,water,1,0", "45678,cup,5,0", "85296,plate,15,2", "70395,watermelon,30,8", "29438,pear,3,0", "90145,banana,15,4", "50179,peach,6,0.5"];

    increaseQuantityToExistProductFunctionValue = false;
    quantitySet++;

    if (NumberOfProductShown > 0) {
        increaseQuantityToExistProduct();
    }

    for (let x in products) {
        const productsArraySplitted = products[x].split(",");

        if (NumberOfProductShown > 0 && productsInCart[NumberOfProductShown - 1][0] == serialNumberValue) {
            productPosition = parseInt(productsInCart[NumberOfProductShown - 1][4]);
            productsInCart[NumberOfProductShown - 1][5] = quantitySet;
            quantityValue = productsInCart[NumberOfProductShown - 1][5];
            updateProductCardInfo(productPosition);
        }

        else if (productsArraySplitted[0] == serialNumberValue && increaseQuantityToExistProductFunctionValue == false) {
            productNameValue = productsArraySplitted[1];
            priceValue = productsArraySplitted[2];
            discountValue = productsArraySplitted[3];
            productsInCart[NumberOfProductShown] = products[x].split(",");
            productsInCart[NumberOfProductShown][4] = productOrder;
            quantitySet = 1;
            productsInCart[NumberOfProductShown][5] = quantitySet;
            quantityValue = productsInCart[NumberOfProductShown][5];
            SerialNumbersForProductsInCart[NumberOfProductShown] = serialNumberValue;
            addingProductsInCart();
            NumberOfProductShown++;
        }
    }

    if (serialNumberValue != SerialNumbersForProductsInCart[NumberOfProductShown - 1]) {
        alert("wrong serial number")
    }

    sumValues();
    editValues();

}

function editValues() {

    getAndEditElements("totalBeforeDiscountValue", totalBeforeDiscountValue);
    getAndEditElements("discountValue", discountText);
    getAndEditElements("totalAfterDiscountValue", totalAfterDiscount);

}

function getAndEditElements(id, value) {

    totalBeforeDiscount = priceValue * quantityValue;
    discount = discountValue * quantityValue;
    discountText = discountValueTotal;

    document.getElementById(id).innerHTML = value;

}

function updateProductCardInfo(productPosition) {

    getAndEditElements(("quantity" + productPosition), quantityValue);
    getAndEditElements(("total" + productPosition), totalBeforeDiscount);
    getAndEditElements(("discount" + productPosition), "- " + discount);

}

function increaseQuantityToExistProduct() {

    for (let x in SerialNumbersForProductsInCart) {
        if (SerialNumbersForProductsInCart[x] == serialNumberValue && NumberOfProductShown > 0) {
            productPosition = parseInt(productsInCart[x][4]);
            quantitySet = productsInCart[x][5];
            quantitySet++;
            productsInCart[x][5] = quantitySet;
            quantityValue = productsInCart[x][5];
            priceValue = productsInCart[x][2];
            discountValue = productsInCart[x][3];
            updateProductCardInfo(productPosition);
            increaseQuantityToExistProductFunctionValue = true;
        }
    }
}

function decreaseQuantityToExistProduct(selector) {

    totalBeforeDiscountValue -= totalForAllProductsInCart[selector - 1];
    discountValueTotal += discountForAllProductsInCart[selector - 1];
    totalAfterDiscount = totalBeforeDiscountValue - discountValueTotal;

}


function setAttributeForObjects(object, attribute, valueOfAttribute) {

    object.setAttribute(attribute, valueOfAttribute);

}

function textEditor(object, valueOfTheText) {

    object.textContent = valueOfTheText;

}

function addingProductsInCart() {

    const total = document.createElement("total"), discount = document.createElement("discount"), quantity = document.createElement("quantity"), price = document.createElement("price"), deleteBtn = document.createElement("deleteBtn"), productName = document.createElement("productName"), productsList = document.getElementById("productList"), product = document.createElement("product"), counter = document.createElement("counter");

    setAttributeForObjects(product, "id", "product" + productOrder);
    setAttributeForObjects(quantity, "id", "quantity" + productOrder);
    setAttributeForObjects(total, "id", "total" + productOrder);
    setAttributeForObjects(discount, "id", "discount" + productOrder);
    setAttributeForObjects(deleteBtn, "onClick", "removeProductsInCart(" + productOrder + ")");

    if (productOrder % 2 == 0) {
        product.style.background = '#f6f4fe';
        product.classList.add("product" + productOrder);
    }

    else {
        product.classList.add("product" + productOrder);
    }

    textEditor(productName, productNameValue);
    textEditor(price, priceValue);
    textEditor(quantity, quantityValue);
    textEditor(total, totalBeforeDiscount);
    textEditor(discount, "- " + discountValue);
    textEditor(deleteBtn, "remove");

    product.append(counter, productName, deleteBtn, price, quantity, total, discount);
    productsList.appendChild(product);

    productOrder++;

}

function removeProductsInCart(selector) {

    const element = document.getElementById("product" + selector);
    productPosition = 0;
    delete productsInCart[selector - 1];
    NumberOfProductShown = 0;
    element.remove();
    decreaseQuantityToExistProduct(selector);
    editValues();

}

function invoicePrinterAndSaver() {

    $(document).ready(function () {
        var currentPath = $(location).attr('href').replace("index.html", "styles.css");
        $('#invoiceLayout').printThis({ importCSS: true, loadCSS: currentPath });
        $("deleteBtn").hide();
    });

    setTimeout(function () { $("deleteBtn").show() }, 1000);

}

function sumValues() {

    if (increaseQuantityToExistProductFunctionValue == true) {
        totalForAllProductsInCart.splice((productPosition - 1), 1, totalBeforeDiscount);
        discountForAllProductsInCart.splice((productPosition - 1), 1, discount);
    }

    else {
        totalForAllProductsInCart[NumberOfProductShown - 1] = totalBeforeDiscount;
        discountForAllProductsInCart[NumberOfProductShown - 1] = discount;
    }

    const temp = totalForAllProductsInCart.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    totalBeforeDiscountValue = temp;

    const temp1 = discountForAllProductsInCart.reduce((accumulator, value) => {
        return accumulator - value;
    }, 0);
    discountValueTotal = temp1;

    totalAfterDiscount = totalBeforeDiscountValue + discountValueTotal;

}