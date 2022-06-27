function Libelle(titre, reponse, reponses){ //class that structed questions
  this.titre = titre;
  this.reponse = reponse;
  this.reponses= reponses;
}
const Base = [ //questions base
    new Libelle("Quel est le type d'un fichier javascript ?",2,[".j",".jsx", ".js",".ts"]),
    new Libelle("La syntaxe correcte pour créer un objet vide en Js est :",0, ["let monObjet = {}", "let monObjet = []", "let monObjet = ()", "let monObjet = null"]),
    new Libelle("Ces mots permettent d'initialiser une variable, sauf :",2, ["var", "const", "function", "let"]),
    new Libelle("La bonne syntaxe pour écrire un commentaire sur ligne est :",0, ["// comment", "+ comment", "/* comment */", "# comment"]),
    new Libelle("En le passant à la fonction isNaN, nous obtenons true :",2, ["300", "-2", "'3'", "0"]),
    new Libelle("Vanilla JavaScript est :",3, ["Un framework javascript","Une librairie javascript", "Une marque de crême", "Du pur javascript"]),
    new Libelle("Pour écrire sur la console Javacript on utilise :",0, ["console.log()", "console.write()", "console.print()", "alert()"]),
    new Libelle("En JavaScript, les expressions regulières sont encadrées par :",2, ["'", "#", "/", "."]),
    new Libelle("La balise qui permet d'inserer du code javascript est :",2, ["js", "script", "javascript", "link"]),
    new Libelle("Pour executer JavaScript sur un serveur nous avons besion de :",2, ["ReactNative", "ReactJS", "NodeJs", "Composer"]),
    new Libelle("Une variable non declarée aura pour valeur :",3, ["null", 0, "Object", "undefined"]),
    new Libelle("Pour faire réference à un script js extene en html :",1, ["<script href='mon_script.js'>", "<script src='mon_script.js'>", "<link src='mon_script.js'>", "<rel link='mon_script.js'>"]),
    new Libelle("Pour executer alert() chaque 5s, on écrira :",1, ["setInterval(alert, 5000)", "setTimeout(alert, 5)", "setInterval(alert, 5)", "forTime(alert, 5000)"]),
    new Libelle("Le nom correct d'une variable est :",1, ["ma_variable", "ma variable", "ma-variable", "mavariable()"]),
    new Libelle("L'object JavaScript qui gére le DOM est  :",3, ["HTMLElement", "DOM", "Node", "document"])
  ];
const question =Object.assign(document.createElement("div"), {className: "question"});
const columns = Object.assign(document.createElement("div"), {className: "columns"});
const column = [document.createElement('div'),document.createElement('div'), document.createElement('div'),document.createElement('div')];
const inputs = [document.createElement('input'),document.createElement('input'), document.createElement('input'),document.createElement('input')];
const label = [document.createElement('label'),document.createElement('label'), document.createElement('label'),document.createElement('label')]; let reponses = new Array(); // 
const quit = Object.assign(document.createElement("button"), {className: "quit", textContent: "Quitter"});
const next = Object.assign(document.createElement("button"), {className: "next", textContent: "Suivant"});
const btns = Object.assign(document.createElement("div"), {className: "column-btn"});
const head = Object.assign(document.createElement("div"), {className: "head2"});
const progressCont = Object.assign(document.createElement("div"), {className: "progressCont"});
const span1 = document.querySelector(".infoName"); const nom = document.querySelector("#nom");
const span2 = document.querySelector(".infoMail"); const mail = document.querySelector("#mail");
const form = document.querySelector("#form");let j = 0; //slide number 
const progress = Object.assign(document.createElement("progress"), {value: "60", max: "60"});
const progressTimer = Object.assign(document.createElement("div"), {className: "progressTimer", textContent: progress.value});
progress.append(Object.assign(document.createElement("div"), {className: "barre"}));
btns.append(quit, next);
const start = document.querySelector(".start");
      for(let i=0; i<column.length; i++){
        Object.assign(columns.appendChild(column[i]), {classList:"column-radio"}).append(Object.assign(column[i].appendChild(inputs[i]), {name: "reponse", type: "radio", id:""+i+"", value: i}),Object.assign(column[i].appendChild(label[i]), {for:""+i+"", textContent: Base[j].reponses[i]}));
      }
      const progressText = Object.assign(document.createElement("div"), {className: "progressText", textContent: "Question "+ (j+1)+"/"+Base.length});
      progressCont.append(progressText, progressTimer, progress);
      const sujet = Object.assign(document.createElement("h1"), { textContent: Base[j].titre});
      head.append(sujet, progressCont);
    columns.appendChild(btns);
    question.append(head, columns);
    question.style.display = "none";
    form.appendChild(question);

let nextQuestion = ()=>{
  for(let i=0; i<column.length; i++){
      inputs[i].value =  i;
      label[i].textContent =  Base[j].reponses[i];
      progressText.textContent = "Question "+ (j+1)+"/"+Base.length;
      sujet.textContent =  Base[j].titre;
  }
}
let checkSelectedAssertion = ()=>{
    inputs.forEach((input)=>{
        if(input.checked){
            reponsesList(input.value);
            return input.checked = false;
        }
    })
}
for(const input of inputs){//
  input.addEventListener('change', enabledNextButton);
}        
function enabledNextButton(e) {
  if (this.checked) {
    next.disabled = false
  }
}
let reponsesList = (reponse)=>{
    return reponses.push(reponse);
}
const move = () => {
	if (progress.value > 0) {
     progressTimer.textContent = progress.value;
		 progress.value--;     
		 setTimeout(move, 1000);
	} else {
		// checkResponse()
		j++
    nextQuestion()
    progress.value = 60;
    move()
	}
};
next.addEventListener("click", (e)=>{ // next question event
  e.preventDefault();
  
  if(j < Base.length){
    checkSelectedAssertion();
    console.log();
    j++;
    nextQuestion();
    progress.value = 60;
  }
})
let validateEmail =  (emailAdress)=>{ //email validation
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      return regexEmail.test(emailAdress) ;
 }
let test = (elt, info)=>{ // form validation
     return (elt[0].value == "" ? info[0].textContent = "Veillez renseigner votre nom" : elt[0].value.length <= 2 ? info[0].textContent ="Entrer un nom valide": elt[1].value == "" ? info[1].textContent = "Veuillez renseigner votre mail" : !validateEmail(elt[1].value) ? info[1].textContent = "Entrer une adresse mail valide" :
      (document.querySelector(".accueil").style.display = "none", question.style.display = "block", move(), next.disabled = true));
}
start.addEventListener("click",(e)=>{ //start button event 
        e.preventDefault();
        test([nom,mail], [span1,span2])
})
