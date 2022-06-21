const pageParent = document.querySelector('.question');

function Libelle(titre, reponse, reponses){
  this.titre = titre;
  this.reponse = reponse;
  this.reponses= reponses;
}

let Base = [
    new Libelle("Quel est le type d'un fichier javascript ?","C",[".j",".jsx", ".js",".ts"]),
    new Libelle("La syntaxe correcte pour créer un objet vide en Js est :","A", ["let monObjet = {}", "let monObjet = []", "let monObjet = ()", "let monObjet = null"]),
    new Libelle("Ces mots permettent d'initialiser une variable, sauf :","C", ["var", "const", "function", "let"], 2),
    new Libelle("La bonne syntaxe pour écrire un commentaire sur ligne est :","A", ["// comment", "+ comment", "/* comment */", "# comment"], 0),
    new Libelle("En le passant à la fonction isNaN, nous obtenons true :",'C', ["300", "-2", "'3'", "0"], 2),
    new Libelle("Vanilla JavaScript est :", ["Un framework javascript","D", "Une librairie javascript", "Une marque de crême", "Du pur javascript"], 3),
    new Libelle("Pour écrire sur la console Javacript on utilise :","A", ["console.log()", "console.write()", "console.print()", "alert()"], 0),
    new Libelle("En JavaScript, les expressions regulières sont encadrées par :","C", ["'", "#", "/", "."], 2),
    new Libelle("La balise qui permet d'inserer du code javascript est :","C", ["js", "script", "javascript", "link"], 1),
    new Libelle("Pour executer JavaScript sur un serveur nous avons besion de :","C", ["ReactNative", "ReactJS", "NodeJs", "Composer"], 2),
    new Libelle("Une variable non declarée aura pour valeur :","D", ["null", "0", "Object", "undefined"], 3),
    new Libelle("Pour faire réference à un script js extene en html :","B", ["<script href='mon_script.js'>", "<script src='mon_script.js'>", "<link src='mon_script.js'>", "<rel link='mon_script.js'>"], 1),
    new Libelle("Pour executer alert() chaque 5s, on écrira :","A", ["setInterval(alert, 5000)", "setTimeout(alert, 5)", "setInterval(alert, 5)", "forTime(alert, 5000)"], 0),
    new Libelle("Le nom correct d'une variable est :","B", ["ma_variable", "ma variable", "ma-variable", "mavariable()"], 1),
    new Libelle("L'object JavaScript qui gére le DOM est  :","D", ["HTMLElement", "DOM", "Node", "document"], 3)
  ];
let question =Object.assign(document.createElement("div"), {className: "question"});;
let head = Object.assign(document.createElement("div"), {className: "head"});;
let columns = Object.assign(document.createElement("div"), {className: "columns"});
let column = [document.createElement('div'),document.createElement('div'), document.createElement('div'),document.createElement('div')];
let input = [document.createElement('input'),document.createElement('input'), document.createElement('input'),document.createElement('input')];
let label = [document.createElement('label'),document.createElement('label'), document.createElement('label'),document.createElement('label')];
const quit = Object.assign(document.createElement("button"), {className: "quit", textContent: "Quitter"});
const next = Object.assign(document.createElement("button"), {className: "next", textContent: "Suivant"});
const btns = Object.assign(document.createElement("div"), {className: "column-btn"});
const form = document.querySelector("#form");
btns.append(quit, next);
question.append((Object.assign(head.appendChild(Object.assign(document.createElement("h1"), {textContent: Base[0].titre, classList:"ok"})))),columns);
for(let i=0; i<column.length; i++){
  Object.assign(columns.appendChild(column[i]), {classList:"column-radio"}).append(Object.assign(column[i].appendChild(input[i]), {type: "radio", id:""+i+""}),Object.assign(column[i].appendChild(label[i]), {for:""+i+"", textContent: Base[0].reponses[i]}));
}
columns.appendChild(btns)
form.appendChild(question);
console.log(Base);
