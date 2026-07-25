/**
* Projet : FizzBuzz
* Description : Afficher les nombres de 1 à 100 en remplaçant :
* - Les multiples de 3 par "Fizz"
* - Les multiples de 5 par "Buzz"
* - Les multiples de 3 ET 5 par "FizzBuzz"
*/

// Boucle principale allant de 1 à 100
for (let i = 1; i <= 100; i++) {
   
    // Condition 1 : Vérifier si le nombre est multiple de 3 ET de 5 (donc de 15)
    // On teste cette condition en premier car elle est la plus restrictive
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Condition 2 : Vérifier si le nombre est uniquement multiple de 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Condition 3 : Vérifier si le nombre est uniquement multiple de 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // Si aucune des conditions précédentes n'est remplie, on affiche le nombre
    else {
        console.log(i);
    }
}
// pont js
const sortie = document.querySelector('#sortie')
function affiche(html){
    sortie.innerHTML += html;
}
// utilisation
affiche(`<p class=" resultat">Votre FizzBuzz est de<strong>15</strong></p>`);