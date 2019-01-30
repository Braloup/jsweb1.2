// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

//Fonction Addition
function Addition() {
  // deux variables input et une variable résultat
  let firstN = "";
  let secondN = "";
  let result = "";
  // on attache les variables à des éléments du HTML
  firstN = document.getElementById("firstN").value;
  secondN = document.getElementById("secondN").value;
  // et enfin le calcul
  result = parseInt(firstN) + parseInt(secondN);
  // On affiche
  console.log("addition !");
  console.log(result);
  document.getElementsByClassName("result")[0].innerHTML = firstN + ' + ' + secondN + ' = ' + result;
}

//Oclique sur lr bouton et là, magie.
document.querySelector("#plus").addEventListener("click", Addition, false);


//Fonction soustract
function Soustraction() {
  // deux variables input et une variable résultat
  let firstN = "";
  let secondN = "";
  let result = "";
  // on attache les variables à des éléments du HTML
  firstN = document.getElementById("firstN").value;
  secondN = document.getElementById("secondN").value;
  // et enfin le calcul
  result = firstN - secondN;
  // On affiche
  console.log("soustraction !");
  console.log(result);
  document.getElementsByClassName("result")[0].innerHTML = firstN + ' - ' + secondN + ' = ' + result;
}

//Oclique sur lr bouton et là, magie.
document.querySelector("#moins").addEventListener("click", Soustraction, false);

//Fonction multiplie
function Multiplication() {
  // deux variables input et une variable résultat
  let firstN = "";
  let secondN = "";
  let result = "";
  // on attache les variables à des éléments du HTML
  firstN = document.getElementById("firstN").value;
  secondN = document.getElementById("secondN").value;
  // et enfin le calcul
  result = firstN * secondN;
  // On affiche
  console.log("multiplication !");
  console.log(result);
  document.getElementsByClassName("result")[0].innerHTML = firstN + ' x ' + secondN + ' = ' + result;
}

//On clique sur lr bouton et là, magie.
document.querySelector("#multi").addEventListener("click", Multiplication, false);

//Fonction divise
function Division() {
  // Deux variables input et une variable résultat
  let firstN = "";
  let secondN = "";
  let result = "";
  // On attache les variables à des éléments du HTML.
  firstN = document.getElementById("firstN").value;
  secondN = document.getElementById("secondN").value;
  // On fait le calcul.
  result = firstN / secondN;
  // On affiche.
  console.log("division !");
  console.log(result);
  document.getElementsByClassName("result")[0].innerHTML = firstN + ' / ' + secondN + ' = ' + result;
}

//On clique sur le bouton et là, magie.
document.querySelector("#divide").addEventListener("click", Division, false);
