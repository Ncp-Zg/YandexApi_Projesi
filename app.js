// Prototype , Ajax , Callback

eventListeners();


function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord)
    //Change
    document.getElementById("language").onchange = function(){
        //Arayüz işlemleri
    }
}
const translate = new Translate(document.getElementById("word").nodeValue,document.getElementById("language").value)
function translateWord(e){


    translate.translateWord();
    
    e.preventDefault();
}