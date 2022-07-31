
let billAmount =0;
let tipAmount5 =5;
let tipAmoun10 =10;
let tipAmount15 =15;
let tipAmount25 =25;
let tipAmount50 =50;
let totalAmount = 0;


let tipButton5 = document.getElementById("btn5");
let tipButton10 = document.getElementById("btn10");
let tipButton15 = document.getElementById("btn15");
let tipButton25 = document.getElementById("btn25");
let tipButton50 = document.getElementById("btn50");


let billInput = document.getElementById("b1");
let tipResult = document.querySelector(".dollar2");
let totalResult = document.querySelector(".dollar3");

// let btnArr = document.querySelectorAll(".btnall");



// for (let i = 0; i < btnArr.length; i++) {

//     console.log(btnArr[i]);
//     btnArr[i].addEventListener('click', function(){

//       console.log(btnArr[i]);

//     })
// }


tipButton5.addEventListener('click', function(){

  billAmount = billInput.value;
  // tipAmount5 = parseInt(tipAmount5.value);
  totalAmount = parseInt(totalResult.value);
  

  totalTip =  billAmount * tipAmount5 / 100;

  totalAmount = billAmount + totalTip;

tipResult.innerHTML = totalTip;

totalResult.innerHTML =  totalAmount;

    
     
    
    
})


tipButton10.addEventListener('click', function(){

  billAmount = billInput.value;


  totalTip = billAmount * tipAmoun10 / 100;


  tipResult.innerHTML = totalTip;



})

tipButton15.addEventListener('click', function (){


billAmount = billInput.value;

totalTip = billAmount * tipAmount15 / 100;


tipResult.innerHTML = totalTip;
 


})

tipButton25.addEventListener('click', function(){


  billAmount = billInput.value;
  totalTip = billAmount * tipAmount25 / 100;

  tipResult.innerHTML = totalTip;


})

tipButton50.addEventListener('click', function(){


  billAmount = billInput.value;
  totalTip = billAmount * tipAmount50 / 100;

  tipResult.innerHTML = totalTip;

})



//RESET ღილაკზე დასაყენებელია ლისენერი, რომლის კლიკზეც გამოიძახება ფუნქცია, რომელიც tipButton-ებს 
//ლისენერებს რიმუვს გაუკეთებს.


//totalAmount არ აჯამებს tip & bill amount-ებს
