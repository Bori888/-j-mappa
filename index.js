//segédfügvény
function $(nev){
    return document.getElementsByClassName.(nev);
}

function ID(nev) {
    return document.getElementsByID(nev);
}
//fügvényyek és változok
function jatek() {
    
}
function ellenorzes() {

}

//játék gombjainak viselkedése
function kivalaszt() {

}
function stilushozzaad() {

}
function stiluselvesz() {

}

//init

function init(){
    //eseménykezelő regisztrálsa
    for (let index = 0; index < 9; index++) {
        $('gomb')[index].addEventListener('clik',kivalaszt,false);
        
    }
    ID ('kezd').addEventListener('click',jatek,false);
}
window.addEventListener('load',init,false)