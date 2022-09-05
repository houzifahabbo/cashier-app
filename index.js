let serial;
var totalBeforeDiscount=0;
var discountValue=0;
var totalAfterDiscount=0;
const test2=[[]];
const test5=[]
const test3=[];
const test4=[];
var i=1;
var z=0;
var loc;
var ex =0;
var sum=0;
var quantityValue=0;
var quantitySet=0;
var total2=0;
var discountValueTotal=0;
//TODO clean the code and take a look at the whole code
//TODO rename lists
function serialInput(evt) {
    if(event.key === 'Enter') {
        serial = document.getElementById("serialInput").value;
        array();
    }
}
function array(){
    const products = ["13579,apple,2,0.5", "24695,orange,5,1","73584,lemon,10,2.5"];
    ex=0;
    quantitySet++;
    if(z>0){
        exist();
    }
    for(let x in products){
        const arr= products[x].split(",");
        if(z>0 && test2[z-1][0] == serial ){
            loc= (parseInt(test2[z-1][4]));
            test2[z-1][5]=quantitySet;
            quantityValue=test2[z-1][5]
            addMore(loc);
        }
        else if(arr[0] == serial && ex==0){
            productNameValue= arr[1];
            priceValue=arr[2];
            discountValue=arr[3];
            test2 [z]= products[x].split(",");
            test2[z][4]=i;
            quantitySet=1;
            test2[z][5]=quantitySet;
            quantityValue=test2[z][5]
            test5[z]=serial;
            addingProducts(); 
            z++;
        }
    }
    sett();
    edit();
}

function exist(){
    for(let x in test5){
        if(test5[x] == serial &&z>0){
            loc= (parseInt(test2[x][4]))
            quantitySet=test2[x][5]
            quantitySet++
            test2[x][5]=quantitySet;
            quantityValue=test2[x][5]
            priceValue=test2[x][2];
            discountValue=test2[x][3];
            addMore(loc);
            ex=1;
        }
    }
}
function addingProducts(){
    //TODO make function for const and ids
    const total=document.createElement("total"),discount=document.createElement("discount"),quantity=document.createElement("quantity"),price= document.createElement("price"),deleteBtn= document.createElement("deleteBtn"),productName=document.createElement("productName"),productsList = document.getElementById("productList"),product = document.createElement("product"),counter=document.createElement("counter");
    product.setAttribute("id","product"+i);
    deleteBtn.setAttribute("value",i);
    quantity.setAttribute("id","quantity"+i);
    total.setAttribute("id","total"+i);
    discount.setAttribute("id","discount"+i);
    deleteBtn.setAttribute("onClick", "removeProduct("+i+")");
    if (i%2==0){
        product.style.background= '#f6f4fe' ;
        product.classList.add("product"+i);
    }
   else{
        product.classList.add("product"+i);
    }
    //TODO make function for text
    productName.textContent=productNameValue;
    price.textContent=priceValue;
    quantity.textContent=quantityValue;
    total.textContent=totalBeforeDiscount;
    discount.textContent="- "+discountValue;
    deleteBtn.textContent= "remove";
    product.append(counter , productName , deleteBtn , price ,quantity ,total,discount);
    productsList.appendChild(product);
    ++i;
}
//TODO remove
function removeProduct(selector){
    const element = document.getElementById("product"+selector);
    loc=0;
    delete test2[selector-1]
    z=0
    element.remove();
    decrease(selector);
    edit();
}

function addMore(loc){
    getAndEditElements(("quantity"+loc),quantityValue);
    getAndEditElements(("total"+loc),totalBeforeDiscount);
    getAndEditElements(("discount"+loc),"- "+discount);
}

function edit(){
    getAndEditElements("totalBeforeDiscountValue",total2);
    getAndEditElements("discountValue",discountText);
    getAndEditElements("totalAfterDiscountValue",totalAfterDiscount);
}

function getAndEditElements(id,value){
    totalBeforeDiscount=(priceValue*quantityValue)
    discount = discountValue*quantityValue;
    discountText=discountValueTotal;
    document.getElementById(id).innerHTML= value ;
}

function invoice(){
    $ (document).ready(function(){
        var currentPath = $(location).attr('href').replace("index.html","styles.css");
        $('#invoiceLayout').printThis({debug: false,importCSS: true,loadCSS: currentPath});
        $("deleteBtn").hide();
    });
    setTimeout(function(){$("deleteBtn").show()},1000);
}

function sett(){
    if(ex==1){
        test3.splice( (loc - 1) , 1 , totalBeforeDiscount );
        test4.splice( (loc - 1) , 1 , discount );
   }
    else{
        test3[z-1]=totalBeforeDiscount;
        test4[z-1]=discount;
    }
    const total3 = test3.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    total2=total3;
    const discountValueTotal2 = test4.reduce((accumulator, value) => {
        return accumulator - value;
    }, 0);
    discountValueTotal=discountValueTotal2;
    totalAfterDiscount = total2 + discountValueTotal;
}
function decrease(selector){
    total2 -= test3[selector-1];
    discountValueTotal += test4[selector-1];
    totalAfterDiscount = total2 - discountValueTotal;

}
