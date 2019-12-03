//javascript code

for(var teller = 1 ; teller <= 50 ; teller++){

    if (teller === 20) { continue; }

    console.log(teller);
    document.getElementById("teller").innerHTML +=  teller;
{ 
    document.write("Waarde van teller:" + teller + "<br />"); 
}
}
