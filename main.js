
const bill = document.getElementById("TotalP");
const clipBtn = document.querySelectorAll(".clip");
const Clipcustom = document.getElementById("Custom");
const people = document.getElementById("NumeroPersonas"); 
const errormensaje = document.querySelector(".error-msg");
const monto = document.getElementById('monto');
const montotwo = document.getElementById('montotwo')
const reset = document.getElementById('boton');


bill.addEventListener("input", setBillValue);

clipBtn.forEach (btn => {
    btn.addEventListener('click', clickbtn);
   
});
Clipcustom.addEventListener('input', clickbtn);
people.addEventListener('input', setPeopleValue);
reset.addEventListener('click', restf)


let billValue = 0.0;
let btnValue = 0.15;
let peoplevalue = 1;




function validateFloat(s){
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}


function setBillValue (){

    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.');
    } 
    if(!validateFloat(bill.value)){
        bill.value = bill.value.substring(0, bill.value.length-1);
    }
    billValue = parseFloat(bill.value);
    calcular();
}
function clickbtn(){

     btnValue = this.value / 100 ;
     console.log(btnValue);

     calcular();
}

function setPeopleValue(){
    peoplevalue = parseFloat(people.value);;
    
    if(peoplevalue <= 0){
          errormensaje.classList.add('show-error-msg');
          setTimeout(function(){
            errormensaje.classList.remove('show-error-msg');
        }, 3000);

       
    }
    
    calcular();
}

function calcular(){
    if (peoplevalue >=1 ){
        let tipAmount = billValue * btnValue / peoplevalue;
        let total = billValue * (btnValue + 1 ) / peoplevalue;
        monto.innerHTML = '$' + tipAmount.toFixed(2);
        montotwo.innerHTML = '$' + total.toFixed(2);
       
        reset.setAttribute('id','desactivado');
    }
}

function restf(){
    
    bill.value = '0.0';
    setBillValue();

    people.value = '1';
    setPeopleValue();
    
    
    reset.setAttribute('id','boton');
}


