function Libelle(titre, reponse, reponses){
  this.titre = titre;
  this.reponse = reponse;
  this.reponses= reponses;
}
const Base = [
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
const question =Object.assign(document.createElement("div"), {className: "question"});
const columns = Object.assign(document.createElement("div"), {className: "columns"});
const column = [document.createElement('div'),document.createElement('div'), document.createElement('div'),document.createElement('div')];
const input = [document.createElement('input'),document.createElement('input'), document.createElement('input'),document.createElement('input')];
const label = [document.createElement('label'),document.createElement('label'), document.createElement('label'),document.createElement('label')];
const quit = Object.assign(document.createElement("button"), {className: "quit", textContent: "Quitter"});
const next = Object.assign(document.createElement("button"), {className: "next", textContent: "Suivant"});
const btns = Object.assign(document.createElement("div"), {className: "column-btn"});
const head = Object.assign(document.createElement("div"), {className: "head2"});
const progressCont = Object.assign(document.createElement("div"), {className: "progressCont"});
const span1 = document.querySelector(".infoName"); const nom = document.querySelector("#nom");
const span2 = document.querySelector(".infoMail"); const mail = document.querySelector("#mail");

const form = document.querySelector("#form");let j = 0; //slide number;
const progress = Object.assign(document.createElement("progress"), {value: "60", max: "60"});
const progressTimer = Object.assign(document.createElement("div"), {className: "progressTimer", textContent: progress.value});
progress.append(Object.assign(document.createElement("div"), {className: "barre"}));
btns.append(quit, next);
const start = document.querySelector(".start");
function affichePage(Base, question, j, column, columns, input,label,progressCont){
      for(let i=0; i<column.length; i++){
        Object.assign(columns.appendChild(column[i]), {classList:"column-radio"}).append(Object.assign(column[i].appendChild(input[i]), {name: "reponse", type: "radio", id:""+i+"", value: Base[j].reponses[i]}),Object.assign(column[i].appendChild(label[i]), {for:""+i+"", textContent: Base[j].reponses[i]}));
      }
      const progressText = Object.assign(document.createElement("div"), {className: "progressText", textContent: "Question "+ (j+1)+"/"+Base.length});
      progressCont.append(progressText, progressTimer, progress);
      head.appendChild(Object.assign(document.createElement("h1"), { textContent: Base[j].titre}));
      head.appendChild(progressCont);
    columns.appendChild(btns);
    question.append(head, columns);
    return question;
}
const move = () => {
	if (progress.value > 0) {
    progressTimer.textContent = progress.value;
		 progress.value--;
     
		setTimeout(move, 1000);
	} else {
		// checkResponse()
		progress.value = 60;
		j++
	}
};
next.addEventListener("click", (e)=>{
  e.preventDefault();
  if(j < Base.length){
    j++;
    form.appendChild(affichePage(Base,question,j,column,columns,input,label, progressCont));
    // move(100, true);
  }
})

let validateEmail =  (emailAdress)=>{ //email validation
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      return regexEmail.test(emailAdress) ;
 }
let test = (elt, info)=>{ // form validation
     return (elt[0].value == "" ? info[0].textContent = "Veillez renseigner votre nom" : elt[0].value.length <= 2 ? info[0].textContent ="Entrer un nom valide": elt[1].value == "" ? info[1].textContent = "Veuillez renseigner votre mail" : !validateEmail(elt[1].value) ? info[1].textContent = "Entrer une adresse mail valide" :
      (document.querySelector(".accueil").style.display = "none",form.appendChild(affichePage(Base,question,j,column,columns,input,label,progressCont)), move()));
}
start.addEventListener("click",(e)=>{ //start button event 
        e.preventDefault();
        test([nom,mail], [span1,span2])
})

