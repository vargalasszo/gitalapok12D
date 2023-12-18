document.addEventListener("DOMContentLoaded",init);
let lista = [];

function init(){
    document.getElementById("gomb").addEventListener("click",feldolgoz);
}

function feldolgoz() {
    lista.push(document.getElementById("szam").value);
    document.getElementById("lista").innerHTML = lista.join(",");
}