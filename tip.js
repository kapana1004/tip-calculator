


let billAmount =0;
let tipAmount5 =5;
let tipAmoun10 =10;
let tipAmount15 =15;
let tipAmount25 =25;
let tipAmount50 =50;
let totalAmount = 0;

let numberOfPeople = 0;


let tipButton5 = document.getElementById("btn5");
let tipButton10 = document.getElementById("btn10");
let tipButton15 = document.getElementById("btn15");
let tipButton25 = document.getElementById("btn25");
let tipButton50 = document.getElementById("btn50");





let billInput = document.getElementById("b1");
let tipResult = document.querySelector(".dollar2");
let totalResult = document.querySelector(".dollar3");

let btnArr = document.querySelectorAll(".btnall");

let numberOfPeopleresult = document.getElementById("b2");



for (let i = 0; i < btnArr.length; i++) {

    console.log(btnArr[i]);
    btnArr[i].addEventListener('click', function(event){

      // console.log(btnArr[i].textContent.replace("%", ""));

      billAmount = billInput.value;
      totalTip = billAmount * event.target.value/ 100;
      totalAmount = parseInt(billAmount) + totalTip;
      
         console.log(billAmount, totalTip);

      tipResult.innerHTML = "$" + totalTip;
      totalResult.innerHTML = "$" + totalAmount;
      
      if (numberOfPeople > 1){

        tipResult.innerHTML ="$" + (totalTip / numberOfPeople).toFixed(2);
        totalResult.innerHTML = "$" + (totalAmount / numberOfPeople).toFixed(2);


      

      }
      
    })
  

   
  }

  numberOfPeopleresult.addEventListener('input', function(){

    numberOfPeople = numberOfPeopleresult.value;

  

      if (numberOfPeople > 1){

        tipResult.innerHTML = "$" + (totalTip / numberOfPeople).toFixed(2);
        totalResult.innerHTML = "$" + (totalAmount / numberOfPeople).toFixed(2);


      

      }
    }

  )



