
var textPT = document.getElementById('textPT')
var textEN = document.getElementById('textEN')
var fechaCode = document.getElementById('fechaCode')
var newPage = document.getElementById('newPage')
var Reference = document.getElementById('learn')

var Privacy = document.getElementById('Privacy')
var Support = document.getElementById('Support')
var Contact = document.getElementById('Contact')

function setLanguage(){
    var language=""
    var language = languageList.value; 
 
    localStorage.setItem("lang", language)
    if(localStorage.getItem("lang")=="PT-BR"){
        textPT.style.display="block"
        textEN.style.display="none"
        
    }
    if(localStorage.getItem("lang")=="EN"){
        textPT.style.display="none"
        textEN.style.display="block"
        btNovo.innerText="New"
        btExcluiProject.innerText="Delete"
        btOKnewProject.innerText="Save"
        btOKrenameProject.innerText="Save"
        btRename.innerText="Rename"
        newPage.title="Open in new tab"
        fechaCode.title="Projects"
        Reference.title="Reference"
        

        areaCSS.setAttribute("placeholder", "Write your CSS code here")
        areaHTML.setAttribute("placeholder", "Write your HTML code here")
        areaJS.setAttribute("placeholder", "Write your JavaScript code here")
        Privacy.innerText="Privacy Policy"
        Support.innerText="Share and support!"
        Contact.innerText="Contact"
      
    }   
 
};

if(languageList){

    if(localStorage.getItem("lang")){
        languageList.value = localStorage.getItem("lang")
        setLanguage()
    }
    languageList.addEventListener('change',(event) => {
        setLanguage()
        if(localStorage.getItem("lang")=="PT-BR"){
            window.location=""+ window.location    
        }
     
    });
}