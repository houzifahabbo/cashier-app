//TODO clean the code and take a look at the whole code
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
        return true;
    }
}
const test2=[[]];
var quantitySet=0;
var z=0;
var loc;
//TODO remove quantity
function array(){
    const products = ["13579,apple,1,2,0.5", "24695,orange,3,5,1","73584,lemon,2,10,2.5"];
    for(let x in products){
        const arr= products[x].split(",");
        if(z>0&& test2[z-1][0] == serial ){
            console.log(z-1)
            loc= (parseInt(test2[(z-1)][5]));
            quantity1 = (parseInt(test2[(z-1)][2]));
            quantity1 +=quantitySet;
            addMore(quantity1,loc);
            edit()

        }
        else if(arr[0] == serial){
                productNam= arr[1];
                quantit=arr[2];
                pric=arr[3];
                discoun=arr[4];
                test2 [z]= products[x].split(",");
                test2[z][5]=i;
                for(let h in test2){
                    console.log(test2[h])
                }
                addingProducts();
                z++;
                quantitySet=0;
                edit()

        }
    }
    quantitySet++;
}
var i=1;
function addingProducts(){
    //TODO make function for const and ids
    const total=document.createElement("total"),discount=document.createElement("discount"),quantity=document.createElement("quantity"),price= document.createElement("price"),deleteBtn= document.createElement("deleteBtn"),productName=document.createElement("productName"),productsList = document.getElementById("productList"),product = document.createElement("product"),counter=document.createElement("counter");
    product.setAttribute("id","product"+i);
    deleteBtn.setAttribute("value",i);
    quantity.setAttribute("id","quantity"+i);
    total.setAttribute("id","total"+i);
    discount.setAttribute("id","discount"+i);
    if (i%2==0){
        product.style.background= '#f6f4fe' ;
        product.classList.add("product"+i);
    }
   else{
        product.classList.add("product"+i);
    }
    //TODO make function for text
    productName.textContent=productNam;
    price.textContent=pric;
    quantity.textContent=quantit;
    total.textContent=pric*quantit;
    discount.textContent="-"+discoun;
    deleteBtn.setAttribute("onClick", "removeProduct("+i+")");
    deleteBtn.textContent= "remove";
    product.append(counter , productName , deleteBtn , price ,quantity ,total,discount);
    productsList.appendChild(product);
    ++i;
}
var cost=0;
var cost2=0;
function removeProduct(selector){
    const element = document.getElementById("product"+selector);
    loc=0;
    delete test2[selector-1]
    z=0
    for(let h in test2){
        console.log(test2[h])
    }
    element.remove();
}
function addMore(quantity1,loc){
    document.getElementById("quantity"+loc).innerHTML=quantity1;
    document.getElementById("total"+loc).innerHTML=pric*quantity1;
    document.getElementById("discount"+loc).innerHTML="-"+discoun*quantity1;
}
function edit(){
    document.getElementById("totalBeforeDiscountValue").innerHTML=pric*quantity1;
    document.getElementById("discountValue").innerHTML="-"+discoun*quantity1;
    document.getElementById("totalAfterDiscountValue").innerHTML=(pric-discoun)*quantity1;
}


function invoice(){
    /*
    var fs = require('fs');

    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });*/
}