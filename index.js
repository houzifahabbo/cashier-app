//username=document.querySelector('#serialInput').value;]
let serial;
function serialInput(evt) {
    if(event.key === 'Enter') {
        serial = document.getElementById("serialInput").value;
        array();
    }
}
var x=0;
function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57) && (ASCIICode < 96 || ASCIICode > 106)){
        return false;
    }
    else if(ASCIICode == 8){
        if(x<=0){
            x==1;
        }
        else{
            x=x-1;
        }
        return true;
    }
    else if(ASCIICode == 13){
        if (x==5){
            return true;
        }
        else{
            console.log("must be 5 digits");
            return false;
        }
    }
    if(x==5){
        return false;
    }
    else{
        ++x;
        console.log(x)
        return true;
    }
}
function array(){
    var index=0;
    const products = ["13579,apple,1,2,0.5", "24695,orange,3,5,1","73584,lemon,2,10,2.5"];
    for(let i in products){
        const arr= products[i].split(",");
        if(arr[0] == serial){
            console.log(arr[0]);
            productNam= arr[1];
            quantit=arr[2];
            pric=arr[3];
            discoun=arr[4];
            addingProducts();
        }
    }
}
var i=1;
function addingProducts(){
    const productsList = document.getElementById("productList");
    const product = document.createElement("product");
    const counter=document.createElement("counter");
    const productName=document.createElement("productName");
    const deleteBtn= document.createElement("deleteBtn");
    const price= document.createElement("price");
    const quantity=document.createElement("quantity");
    const discount=document.createElement("discount");
    const total=document.createElement("total");
    product.setAttribute("id","product"+i);
    product.setAttribute("value",i)
    if (i%2==0){
       product.style.background= '#f6f4fe' ;
        product.classList.add("product"+i);
    }
    else{
        product.classList.add("product"+i);
    }
    counter.textContent=i+".";
    productName.textContent=productNam;
    price.textContent=pric;
    quantity.textContent=quantit;
    total.textContent=pric*quantit;
    discount.textContent="-"+discoun;
    deleteBtn.setAttribute("onClick", "removeProduct()");
    deleteBtn.textContent= "remove";
    product.append(counter , productName , deleteBtn , price ,quantity ,total,discount);
    productsList.appendChild(product);
    ++i;
}
function removeProduct(){
    var i =document.getElementById("product");
    const element = document.getElementById("product"+i);
    element.remove();
}