

var escuro = document.getElementById("escuro");
var escuro2 = document.getElementById("escuro2");
var claro = document.getElementById("claro");
var claro2 = document.getElementById("claro2");
var body = document.getElementById("body");
var troca = document.getElementById("troca");
var troca2 = document.getElementById("troca2");
var troca3 = document.getElementById("troca3");
var troca4 = document.getElementById("darkMode");
var troca5 = document.getElementById("darkMode2");

function dark (){
    escuro.style.display = "block";
    escuro2.style.display = "block";
    claro.style.display = "none";
    claro2.style.display = "none";
    body.style.backgroundColor = "black";
    troca.style.color = "white";
    troca2.style.color = "white";
    troca3.style.color = "white";
    troca4.style.display = "none";
    troca5.style.display = "block";


    


}

function light (){
    escuro.style.display = "none";
    escuro2.style.display = "none";
    claro.style.display = "block";
    claro2.style.display = "block";
    body.style.backgroundColor = "white";
    troca.style.color = "black";
    troca2.style.color = "black";
    troca4.style.display = "block";
    troca3.style.color = "black";
    troca5.style.display = "none";
  
}