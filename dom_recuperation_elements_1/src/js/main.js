// ### 1. Récupère et affiche le premier enfant de la dernière div

// let ex1 = document.getElementsByTagName("div")[2].firstElementChild;
// console.log(ex1); 

let myDiv = document.getElementsByTagName("div")[2];
// console.log(myDiv);

let firstChild = myDiv.firstElementChild;
console.log(firstChild);

// ### 2. Récupère et affiche le dernier enfant de la dernière div
// let ex2 = document.querySelectorAll("div")[2].lastElementChild;
// console.log(ex2); 
let lastChild = myDiv.lastElementChild;
console.log(lastChild);

// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le

let i = firstChild.nextElementSibling.firstElementChild;
console.log(i);

// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le
 let b = lastChild.firstElementChild;
 console.log(b);

//  ### 5. Affiche l'élément parent de l'élément i

let iParent = i.parentElement;
console.log(iParent);

//6

let bParent = b.parentElement;
console.log(bParent);

//7

let p = firstChild.nextElementSibling;
console.log(p);


