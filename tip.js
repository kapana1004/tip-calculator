
let billAmount =0;
let totalAmount = 0;
let totalTip = 0;
let buttonPercent = 1;





let numberOfPeople = 1;

let costumButton = 0;

let resetAll;

let zeroText= document.querySelector(".zero");


let tipButton5 = document.getElementById("btn5");
let tipButton10 = document.getElementById("btn10");
let tipButton15 = document.getElementById("btn15");
let tipButton25 = document.getElementById("btn25");
let tipButton50 = document.getElementById("btn50");

let resetButton = document.getElementById("rst");






let billInput = document.getElementById("b1");
let tipResult = document.querySelector(".dollar2");
let totalResult = document.querySelector(".dollar3");

let btnArr = document.querySelectorAll(".btnall");

let numberOfPeopleresult = document.getElementById("b2");

let costumButtonInput = document.getElementById("cstm");



"use strict"

billInput.addEventListener("input", function(event){


  billAmount = billInput.value;
  
  totalTip = billAmount * buttonPercent/ 100;
  totalAmount = parseInt(billAmount) + totalTip;
  
  
  
    //  console.log(billAmount, totalTip);

  // tipResult.innerHTML = "$" + totalTip;
  // totalResult.innerHTML = "$" + totalAmount;

  // if (costumButton > 0 && numberOfPeople > 0 && billAmount > 0){

    tipResult.innerHTML ="$" + (totalTip / numberOfPeople).toFixed(2);
    totalResult.innerHTML = "$" + (totalAmount / numberOfPeople).toFixed(2);

// }

})

for (let i = 0; i < btnArr.length; i++) {

    console.log(btnArr[i]);
    btnArr[i].addEventListener('click', function(event){

      buttonPercent = event.target.value;

      // console.log(btnArr[i].textContent.replace("%", ""));

      billAmount = billInput.value;
      totalTip = billAmount * event.target.value/ 100;
      totalAmount = parseInt(billAmount) + totalTip;
      
         console.log(billAmount, totalTip);

      tipResult.innerHTML = "$" + totalTip;
      totalResult.innerHTML = "$" + totalAmount;
      
      if (numberOfPeople > 0 && billAmount > 0){

        tipResult.innerHTML ="$" + (totalTip / numberOfPeople).toFixed(2);
        totalResult.innerHTML = "$" + (totalAmount / numberOfPeople).toFixed(2);


      

      }
      
    })
  

   
  }

  

  numberOfPeopleresult.addEventListener('input', function(event){
    zeroAlarm ();
    numberOfPeople = numberOfPeopleresult.value;

    totalTip = billAmount * buttonPercent/ 100;
    totalAmount = parseInt(billAmount) + totalTip;

      console.log(event.target.value);

      if (numberOfPeople > 0 && billAmount > 0){

        tipResult.innerHTML = "$" + (totalTip / numberOfPeople).toFixed(2);
        totalResult.innerHTML = "$" + (totalAmount / numberOfPeople).toFixed(2);


      

      }
    }

  )


  costumButtonInput.addEventListener('input', function(event){
  
     let costumButton = costumButtonInput.value;

     let costumTip = costumButton * billAmount/100;
     let costumTotal = parseInt(billAmount) + costumTip;

      // tipResult.innerHTML = "$" + costumTip;
      // totalResult.innerHTML = "$" + costumTotal;

     if (costumButton > 0 && numberOfPeople > 0 && billAmount > 0){

      tipResult.innerHTML = "$" + (costumTip/numberOfPeople).toFixed(2);
      totalResult.innerHTML = "$" + (costumTotal/numberOfPeople).toFixed(2);
      
      console.log(billAmount);
      console.log((tipResult, totalResult).textContent.replace("$", ""));
      
     }




  })

  resetButton.addEventListener('click', function(event){

  location.reload();
  

  
  })



  function zeroAlarm(){

   

     if(numberOfPeopleresult.value < 1){

      zeroText.innerHTML="Can’t be zero";
     
     console.log(zeroText);


     }

     

  }





  //resset button - clear all input and outputs data
  //costum inputing - placeholder changing to value and adding eventlistener





