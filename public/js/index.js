/* Fonction pour le scroll de la barre de navigation */
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        $('#navbar').addClass("bg-light");
        $('#navbar').addClass("fixed-top");
    } else {
        $('#navbar').removeClass("bg-light");
        $('#navbar').removeClass("fixed-top");
    }
}

/* Fonction pour mettre en couleur le jour*/
let jour=new Date();

let day=jour.getDay();
window.onload= function f() {JourDeLaSemaine()};

function JourDeLaSemaine() {
    if(day == 0){
        $('#dimanche').addClass("table-success");
    }else if (day == 1){
        $('#lundi').addClass("table-success");
    }else if (day == 2){
        $('#mardi').addClass("table-success");
    }else if (day == 3){
        $('#mercredi').addClass("table-success");
    }else if (day == 4){
        $('#jeudi').addClass("table-success");
    }else if (day == 5){
        $('#vendredi').addClass("table-success");
    }else if (day == 6){
        $('#samedi').addClass("table-success");
    }
}
