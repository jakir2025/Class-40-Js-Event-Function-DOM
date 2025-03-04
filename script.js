

document.getElementById('Writing').innerHTML = "show the txt on browser!";

let number1 = 10;
let number2 = 10;

let result = number1+number2;

//console.log(result);

document.getElementById('result').innerHTML = result;

//calculation......

function sum()
{
let digit1 = document.getElementById('number-1').value;
let digit2 = document.getElementById('number-2').value;

//console.log("the number-1 is="+digit1);
//console.log("the number-2 is="+digit2);

let converted1 = parseFloat(digit1);
let converted2 = parseFloat(digit2);

let sum = converted1 + converted2;

//console.log("the result is="+sum);

document.getElementById("sum").innerHTML = "the result is="+sum;
}