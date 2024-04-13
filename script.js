function love(){
    var name1 = document.getElementById("NameOne").value;
    var name2 = document.getElementById("NameTwo").value;
    if(name1.length<=2){
        alert("Enter at least 3 character");
    }
    if(name2.length<=2){
        alert("Enter at least 3 character");
    }
    else{
        var random = Math.floor(Math.random()*100);
        document.getElementById("print").innerHTML = name1 + " Loves " + name2 + " 😘💖 " +" ➡➡"+random + "%" ;
    }
    if(random<=10 || random<=20){
        document.getElementById("statement").innerHTML = "No Relationship 😪";
    }
    else if(random<=21 || random<=30){
        document.getElementById("statement").innerHTML = "Bad Relationship😪😗";
    }
    else if(random<=31 || random<=40){
        document.getElementById("statement").innerHTML = "Moderate Match😪😪😗";
    }
    else if(random<=41 || random<=50){
        document.getElementById("statement").innerHTML = "Something is Fishy😗😗😘";
    }
    else if(random<=51 || random<=60){
        document.getElementById("statement").innerHTML = "Physically good Relationship😍😍";
    }
    else if(random<=61 || random<=70){
        document.getElementById("statement").innerHTML = " nice pair😍😘";
    }
    else if(random<=71 || random<=80){
        document.getElementById("statement").innerHTML = "excellent Match😍😍😘😘";
    }
    else if(random<=81 || random<=90){
        document.getElementById("statement").innerHTML = "Total Match😍😍😘😘";
    }
    else if(random<=91 || random<=100){
        document.getElementById("statement").innerHTML = "perfect relationship 😍😍😘😘";
    }
}