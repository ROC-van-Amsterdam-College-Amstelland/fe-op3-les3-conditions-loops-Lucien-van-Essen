//javascript code

var myOperator = "+";

var myNumber1 = prompt ("geeft getal aub");

var myNumber2 = prompt ("geeft getal aub");

var resultaat;

if (myOperator == "+") {

    resultaat = Number(myNumber1) + Number(myNumber2);

    document.getElementById("resultaat").innerHTML = resultaat;
    
}    else if (myOperator == "-") {

    resultaat = myNumber1 - myNumber2;

    document.getElementById("resultaat").innerHTML = resultaat;

}