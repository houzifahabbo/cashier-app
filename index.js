//TODO clean the code and take a look at the whole code
let serial;
var totalBeforeDiscount=0;
var discountValue=0;
var totalAfterDiscount=0;
var x=0;
function serialInput(evt) {
    if(event.key === 'Enter') {
        serial = document.getElementById("serialInput").value;
        array();
    }
}
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
const test3=[];
const test4=[];
var z=0;
var loc;
var sum=0;
var quantityValue=0;
var quantitySet=0;
//TODO rename lists
function array(){
    const products = ["13579,apple,2,0.5", "24695,orange,5,1","73584,lemon,10,2.5"];
    quantitySet++;
    for(let x in products){
        const arr= products[x].split(",");
       if(z>0&&test2[z-1][0] == serial ){
            loc= (parseInt(test2[z-1][4]));
            test2[z-1][5]=quantitySet;
            quantityValue=test2[z-1][5]
            addMore(loc);
        }
        else if(arr[0] == serial){
            productNameValue= arr[1];
            priceValue=arr[2];
            discountValue=arr[3];
            test2 [z]= products[x].split(",");
            test2[z][4]=i;
            quantitySet=1;
            test2[z][5]=quantitySet;
            quantityValue=test2[z][5]
            addingProducts(); 
            z++;
        }
        else{
            console.log("wrong")
        }
    }
    sett()
    edit();
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
    productName.textContent=productNameValue;
    price.textContent=priceValue;
    quantity.textContent=quantityValue;
    total.textContent=totalBeforeDiscount;
    discount.textContent="- "+discountValue;
    deleteBtn.setAttribute("onClick", "removeProduct("+i+")");
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
    edit();
}

function addMore(loc){
    getAndEditElements(("quantity"+loc),quantityValue);
    getAndEditElements(("total"+loc),totalBeforeDiscount);
    getAndEditElements(("discount"+loc),discount);
}

function edit(){
    getAndEditElements("totalBeforeDiscountValue",total2);
    getAndEditElements("discountValue",discountText);
    getAndEditElements("totalAfterDiscountValue",totalAfterDiscount);
}

function getAndEditElements(id,value){
    totalBeforeDiscount=(priceValue*quantityValue)
    discount = discountValue*quantityValue;
    discountText= "- "+discountValueTotal;
    //totalAfterDiscount +=((priceValue-discountValue)*quantityValue);
    document.getElementById(id).innerHTML= value ;
}

function invoice(){
    $ (document).ready(function(){
        var currentPath = $(location).attr('href').replace("index.html","styles.css");
        $('#invoiceLayout').printThis({debug: false,importCSS: true,loadCSS: currentPath});
        $("deleteBtn").hide();
    });
    setTimeout(function(){$("deleteBtn").show()},1000)
}
var total2=0;
var discountValueTotal=0;
function sett(){
    test3[z-1]=totalBeforeDiscount;
    test4[z-1]=discount;
   // test5[z-1]=totalAfterDiscount
    /*for (let index = 0; index < test3.length; index++) {
        total2 +=+ parseInt(test3[index]);
        console.log(test3[index]);
    }*/
    /*  const total2 = test3.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);*/
      total2=0
      discountValueTotal=0
      for (const value of test3) {
        total2 += value;
      }
      for (const value of test4) {
        discountValueTotal+= value;
      }
      totalAfterDiscount=total2-discountValueTotal

    }
