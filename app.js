// let a=prompt("Entrer le premier nombre")
// let b=prompt("Entrer le deuxieme nombre")
// console.log(a)
// console.log(b)

// let a=parseInt(prompt("Entrer le premier nombre"))
// let operation = prompt("Entrez une opération (+, -, *, /, %):");
// let b=parseInt(prompt("Entrer le deuxieme nombre"))

// LES CONDITIONS

function add(a,b){
    let c=a+b
    console.log(c);
}
function sous(a,b){
    let c=a-b
    console.log(c);
}
function multi(a,b){
    let c=a*b
    console.log(c);
}
function div(a,b){
    if(a<=0){
        console.log("Entrer un nombre supérieu à 0");
        
    }else if(b>=0){
        console.log("Entre un nombre superieur à 0");
        
    }else{
        let c=a/b
        console.log(c);
        
    }
}
function mod(a,b){
    let c=a%b
    console.log(c);
}
function calculatrice(a,b,operation){
    if(operation==="+"){
        add(a,b);
    }else if(operation==="-"){
        sous(a,b);
    }else if(operation==="*"){
        multi(a,b);
    }else if(operation==="/"){
        div(a,b);
    }else if(operation==="%"){
        mod(a,b);
    }else{
        console.log("opration non reconnue");
        
    }
}

// LES BOUCLES

// calculatrice(a, b, operation);
// for(let i=1; i<=7;i++){
//     console.log(`voila le premier tour ${i}`);
    
// }
// let nom="Pichat";
// let i=0;
// while(i < 7){
//     console.log((i+1) + "." +nom);
//     i++;
    
// }


// let i=0;
// do{
//     console.log((i+1) + "." +nom);
//     i++; 
// }while(i < 7)

// LES TABLEAUX EN JAVASCRIP

const noms = ["Thiam","Aicha","Coumba","Pichat","Youssouph"];
console.log("Voici les cinq noms : ",noms );

noms.splice(0,1);
console.log("Suppression d'un nom : ",noms);

noms.push("Yann");
console.log("Ajouter un autre nom : ",noms);

let Noms = noms.slice(0, 4).map((nom, index) => index === 0 ? `~~${nom}~~` : nom);
console.log("4 noms avec le premier barré :", Noms);







// function calculatrice() {
//     let nombre1 = Number(prompt("Entrez le premier nombre :"));
//     let operation = prompt("Entrez une opération (+, -, *, /, %):");
//     let nombre2 = Number(prompt("Entrez le deuxième nombre :"));

//     let resultat;

//     if (operation === "+") {
//         resultat = nombre1 + nombre2;
//     } else if (operation === "-") {
//         resultat = nombre1 - nombre2;
//     } else if (operation === "*") {
//         resultat = nombre1 * nombre2;
//     } else if (operation === "/") {
//         if (nombre2 !== 0) {
//             resultat = nombre1 / nombre2;
//         } else {
//             alert("Erreur : Division par zéro !");
//             return;
//         }
//     } else if (operation === "%") {
//         if (nombre2 !== 0) {
//             resultat = nombre1 % nombre2;
//         } else {
//             alert("Erreur : Division par zéro !");
//             return;
//         }
//     } else {
//     resultat="Erreur : Opération invalide !";
//     }

//     console.log(("Résultat : " + resultat));
    
// }


// calculatrice();













