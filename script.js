/**
 * Código desenvolvido e de propriedade de devPlay.app. Cópia não permitida. Todos os direitos reservados
 */
/** Definição de variáveis e constantes globais*/
const areaHTML = document.getElementById('areaHTML');
const areaCSS = document.getElementById('areaCSS');
const areaJS = document.getElementById('areaJS');
var codexist = document.getElementById('areaPreview');
const CSSexist = document.getElementById('estilo2qwerty831809');
/**
 * Alterar daqui pra baixo - 30/04/2023
 */

areaHTML.addEventListener('click', ocultaBox, false)
areaCSS.addEventListener('click', ocultaBox, false)
areaJS.addEventListener('click', ocultaBox, false)


var ListaProjetos = document.getElementById("ListaProjetos");
const btOKselectProject = document.getElementById("btOKselectProject");
var NovoProjeto = document.getElementById("NovoProjeto");
const btOKnewProject = document.getElementById("btOKnewProject");
var box = document.getElementById("box")
const divHTML = document.getElementById("containerfatherHTML")
const divCSS = document.getElementById("containerfatherCSS")
const divJS = document.getElementById("containerfatherJS")
var site;
var objetoProjetos = {};
var nomeProjeto;
var arrayProjetos;
var NomeProjeto = document.getElementById("NomeProjeto");
var NomePmudar;
var temp;
var inputRename = document.getElementById('renomearProjeto')
var btOKrenameProject = document.getElementById('btOKrenameProject')
var btRename = document.getElementById("btRename")
var btNovo = document.getElementById("btNovo")
var siteString;
var siteObj;
var corpopage;
var estilo;
var codeJS;
var nameProjectSubs;
var codeProjectSubs;
var newNameProject;
var projetoSelecionado;
var fechaView = document.getElementById('fechaView')
var btnHTML = document.getElementById('codeselectHTML')
var languageList = document.getElementById('Language')

function exibeDivMessage(message){
    var divMessage=document.getElementById('message')
    var pMessage = document.getElementById('pMessage')
    if(pMessage && divMessage){
        pMessage.innerText=message
        divMessage.style.display="block"
        setTimeout(() => { divMessage.style.display="none"}, 1000);
    
    }
    

}

function exibeRename(){
    box.style.height="120px"
    inputRename.style.display="inline"
    btOKrenameProject.style.display="inline"
    btRename.style.color="black"
    btRename.style.backgroundColor="white"
    btNovo.style.color="white"
    btNovo.style.backgroundColor="rgb(139, 73, 201)"
    inputRename.value=ListaProjetos.value
    ocultaNovo()
};

function novo(){
    box.style.height="120px"
    NovoProjeto.style.display="inline"
    btOKnewProject.style.display="inline"
    btNovo.style.color="black"
    btNovo.style.backgroundColor="white"
    btRename.style.color="white"
    btRename.style.backgroundColor="rgb(139, 73, 201)"
    ocultaRename()
};

function ocultaNovo(){
    if(NovoProjeto.style.display=="inline"){
        NovoProjeto.style.display="none"
        btOKnewProject.style.display="none"
    }
};

function ocultaRename(){
    if(inputRename.style.display=="inline"){
        inputRename.style.display="none"
        btOKrenameProject.style.display="none"
    }
};

function getNameProject(){
    inputRename.value=ListaProjetos.value
    codexist.src += '';
};

function saveNewNameProject(){
    nameProjectSubs = ListaProjetos.value.trim()
    codeProjectSubs = localStorage.getItem(nameProjectSubs)
    newNameProject = inputRename.value.trim()
    console.log("nameProjectSubs: ", nameProjectSubs)
    console.log("localStorage.getItem('Projeto Atual') ", localStorage.getItem("Projeto Atual"))
    //Se existir esse projeto ele remove ele e grava o novo
    if(localStorage.getItem(nameProjectSubs)){
        localStorage.removeItem(nameProjectSubs)
        localStorage.setItem(newNameProject, codeProjectSubs)
    }

    //Se o projeto selecionado no lista de projetos for o projeto atual...
    if(nameProjectSubs==localStorage.getItem("Projeto Atual")){
        console.log("nameProjectSubs: ", nameProjectSubs)
        console.log("localStorage.getItem('Projeto Atual') ", localStorage.getItem("Projeto Atual"))
        localStorage.setItem("Projeto Atual", newNameProject)
        //NomeProjeto.value = newNameProject
    }
};

//Primeiro verifica se não tem um com nome igual, antes de gravar
function chamadaRenomear(){
    arrayProjetos = []

    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))
        var a = arrayProjetos.some(compararNomesRenomear)
        if(a==true){
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Já existe um projeto com esse nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("There is already a project with that name!")
            }
            
        }else{
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Projeto renomeado")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("Renamed project")
            }
            saveNewNameProject()
            updateArray()
            inputRename.style.display="none"
            btOKrenameProject.style.display="none"
            box.style.height="80px"
            BtnProjetos()
        }
    }else{
     
    }

};

var nomeProjetoRenomear;
function compararNomesRenomear(element, index, array){
    nomeProjetoRenomear =  inputRename.value
    return element==nomeProjetoRenomear 
};

function isProjectRename(value) {
    nomeProjeto = nameProjectSubs
    return value!=nomeProjeto;
};

function updateArray(){
    //arrayProjetos = []

    if(localStorage.getItem("Projetos")){
        arrayProjetos = []
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))
    }else{

    }
    

    if (arrayProjetos.length>1){
        var filtered = arrayProjetos.filter(isProjectRename);
        filtered.push(newNameProject)
        localStorage.setItem("Projetos", JSON.stringify(filtered))
        if( ListaProjetos){
            ListaProjetos.innerHTML=""
        }
        filtered.forEach(listarProjetos)
/*
        if(NomeProjeto){
            if(NomeProjeto.value==localStorage.getItem("Projeto Atual")){
                ListaProjetos.value=localStorage.getItem("Projeto Atual")
            }
        }
*/     
        
     }else if(arrayProjetos.length==1){

    }    

};

function chamada(){
    
    arrayProjetos = []
    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
        var a = arrayProjetos.some(compararNomes)
        if(a==true){
            NovoProjeto.value=""
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Já existe um projeto com esse nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("There is already a project with that name!")
            }
            
        }else{
            gravarProjeto()
            if(NovoProjeto.value==""){

            }else{
            NovoProjeto.style.display="none"
            btOKnewProject.style.display="none"
            box.style.height="80px"
            }
         

        }
    }else{
        gravarProjeto()
        if(NovoProjeto.value==""){

        }else{
        NovoProjeto.style.display="none"
        btOKnewProject.style.display="none"
        box.style.height="80px"
        }
    }
    

};

function gravarProjetoRenomeado(){
    nomeProjeto = NomePmudar
    if(localStorage.getItem("Projetos")){

        if(nomeProjeto!=""){
            arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))
            ListaProjetos.innerHTML=""
            arrayProjetos.push(nomeProjeto)
            localStorage.setItem('Projetos', JSON.stringify(arrayProjetos))
            arrayProjetos.forEach(listarProjetos)
            setSite()
            console.log(4)
        }else{ 

            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }

        }
    } else {
        //Se o nome do projeto não está vazio
        if(nomeProjeto!=""){
            arrayProjetos.push(nomeProjeto) //adiciona elemento no array
            localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
            setSite()
            arrayProjetos.forEach(listarProjetos)
        }else{ 
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }
            console.log("Nome não pode ser string vazio2")
        }

    }

        if(localStorage.getItem("lang")=="PT-BR"){
            exibeDivMessage("Projeto renomeado")
        }else if(localStorage.getItem("lang")=="EN"){
            exibeDivMessage("Renamed project")
        }
 
};

function isProject(value) {
    if(box.style.display=="block"){
        nomeProjeto = ListaProjetos.value
    }else{
        nomeProjeto = temp
    }
    return value!=nomeProjeto;
};

function chamadaExcluir(){
    var ms;
    if(localStorage.getItem("lang")=="PT-BR"){
       ms="Você realmente quer excluir o projeto?"
    }else if(localStorage.getItem("lang")=="EN"){
        ms="Do you really want to delete the project?"
    }
    if (window.confirm(ms)) {
        
        arrayProjetos = []
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) 

        if (arrayProjetos.length>1){
            var filtered = arrayProjetos.filter(isProject);
            excluirSite()
            //NomeProjeto.value=''
            localStorage.setItem("Projetos", JSON.stringify(filtered))
            localStorage.setItem("Projeto Atual", "")
            ListaProjetos.innerHTML=""
            filtered.forEach(listarProjetos)  
            
            areaHTML.value = ""
            areaCSS.value = ""
            areaJS.value = ""
            codexist.src += '';
            exibeDivMessage("Projeto excluído.")
        }else if(arrayProjetos.length==1){
            excluirSite()
            //NomeProjeto.value=''
            localStorage.removeItem("Projetos")
            localStorage.removeItem("Projeto Atual")
            ListaProjetos.innerHTML=""
            areaHTML.value = ""
            areaCSS.value = ""
            areaJS.value = ""
            codexist.src += '';
            exibeDivMessage("Projeto excluído.")
        }
    };
   
};

function compararNomes(element, index, array){
    nomeProjeto = NovoProjeto.value
    return element==nomeProjeto
};

function gravarProjeto(){
    nomeProjeto = NovoProjeto.value

    //Se já existe o array com os nomes dos projetos, 
    if(localStorage.getItem("Projetos")){

        if(nomeProjeto!=""){
            arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))
            ListaProjetos.innerHTML=""
            arrayProjetos.push(nomeProjeto)
            localStorage.setItem('Projetos', JSON.stringify(arrayProjetos))
            arrayProjetos.forEach(listarProjetos)
            setSite()

            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Projeto salvo! Selecione o projeto e comece a codar!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("Project saved! Select the project and start coding!")
            }
            NovoProjeto.style.display="none"
            btOKnewProject.style.display="none"
            box.style.height="80px"
        }else{ 
             if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }

        }

    } else {
        //Se o nome do projeto não está vazio
        if(nomeProjeto!=""){
            arrayProjetos.push(nomeProjeto) //adiciona elemento no array
            localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
            setSite()
            arrayProjetos.forEach(listarProjetos)  
           
        }else{
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }
        }

    }
    NovoProjeto.value=""
    
};
function RunCode(){
    areaCSS.value= localStorage.getItem("CSS")
    areaHTML.value= localStorage.getItem("HTML")
    areaJS.value= localStorage.getItem("JS")
    codexist.src += '';
    console.log(  "RunCode atuou"  )
}
function selecionarSite(){

    areaCSS.value=""
    areaHTML.value=""
    areaJS.value=""
    projetoSelecionado = ListaProjetos.value
    //NomeProjeto.value = projetoSelecionado
    //localStorage.setItem("Projeto Atual", NomeProjeto.value)
    localStorage.setItem("Projeto Atual", ListaProjetos.value)
    if(localStorage.getItem(ListaProjetos.value)){
        console.log("aqui")

        getSite()
        codexist.src += '';
    }else{
        codexist.src += '';
    }
    BtnProjetos()
};

function excluirSite(){

    projetoSelecionado = ListaProjetos.value;
    localStorage.removeItem(projetoSelecionado)

};

function listarProjetosAoAbrir(){
    var arrayProjetos1 = [];
    if(localStorage.getItem("Projetos")){
        arrayProjetos1= JSON.parse(localStorage.getItem("Projetos"))
        arrayProjetos1.forEach(listarProjetos)  
    }else{

    }
};

function listarProjetos(iten, index){
    var novo = document.createElement("option")
    novo.innerText= iten
    if(ListaProjetos){
        ListaProjetos.appendChild(novo)
    }
   
};

function setSite(){
   // if(!NomeProjeto.value==""){}
        site={
            html:areaHTML.value,
            css: areaCSS.value,
            js:areaJS.value  
        }
        // Transformar o objeto em string e salvar em localStorage
        localStorage.setItem(ListaProjetos.value, JSON.stringify(site));
        getSite();
        codexist.src += '';
    
};



function BtnProjetos(){
    ocultaNovo()
    ocultaRename()
   //listarProjetosAoAbrir()
    box.style.height="80px"
    btNovo.style.backgroundColor="rgb(139, 73, 201)"
    btNovo.style.color="white"
    btRename.style.backgroundColor="rgb(139, 73, 201)"
    btRename.style.color="white"


    
    if(box.style.display=="block"){
        box.style.display="none"

            // document.body.addEventListener('click', (e)=>{
            // var el = (e.target.id)
            // console.log( el)
            // if (el !== box){
            // console.log( "!box")
            // box.style.display="none"             
            // document.body.removeEventListener('click')
            // }
            // });
        
    }else{
        box.style.display="block"
        var proj = localStorage.getItem("Projeto Atual")
        ListaProjetos.value= proj
        console.log( proj)

       // if (box.style.display=="block"){
            // document.body.addEventListener('click', (e)=>{
            // var el = (e.target.id)
            // console.log( el)
            // if (el !== box && box.style.display=="block"){
            // console.log( "!box")
            // box.style.display="none"
            
            //}
            // else{box.style.display=="none"};
            //box.style.display=="none"
            //console.log( e)
        
        }
   
};

function getSite(){
    var projetoAtual;

    if(localStorage.getItem("Projeto Atual")){
        projetoAtual = localStorage.getItem("Projeto Atual")
    }
    else{
        projetoAtual="Projeto Demo"
        localStorage.setItem("Projeto Atual", projetoAtual)
    }
    

    if(localStorage.getItem(projetoAtual)){
        siteObj = JSON.parse(localStorage.getItem(projetoAtual)) ;
        areaHTML.value = siteObj.html;
        areaCSS.value = siteObj.css;
        areaJS.value = siteObj.js
    }
};

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
function preView(){

    var largura = window. screen.width
    //Se a área de preview estiver visível
    if(!(codexist.style.display=="none")){
        codexist.style.display="none";
        localStorage.setItem("preview", "off")    
        largura = window. screen.width

        //Se for no celular
        if(largura<=500){
            divHTML.style.height="95vh";
            areaHTML.style.height="100%";
            divCSS.style.height="92.5vh";
            areaCSS.style.height="100%";
            divJS.style.height="92.5vh";
            areaJS.style.height="100%";
            
        //Se for no desktop  
        }else if (largura>500){
            divCSS.style.height="90vh";
            areaCSS.style.height="97.5%";

        }
    
        fechaView.style.backgroundColor="red";
        fechaView.style.textDecoration = "line-through";
      //Se o preview estiver em off no local storage
    }else if (codexist.style.display=="none"){
        codexist.style.display="block";
        localStorage.setItem("preview", "on")
        //Se for no computador
        if(largura>500){
            divHTML.style.height="45vh";
            divCSS.style.height="45vh";
            divJS.style.height="45vh";
            areaCSS.style.height="95%";
        //Se for no celular
        }else if(largura<=500){
            divCSS.style.height="49vh";
            divHTML.style.height="49vh";
            divJS.style.height="49vh";
            areaHTML.style.height="95%";
            areaCSS.style.height="95%";
            areaJS.style.height="95%";
        }
        fechaView.style.backgroundColor="rgb(139, 73, 201)";
        fechaView.style.textDecoration = "none";
        }

        // getProject()
};

function ocultaBox (){
    box.style.display="none"
    if(box.style.display=="block"){
       
        areaHTML.removeEventListener('click', ocultaBox, false)  
        areaCSS.removeEventListener('click', ocultaBox, false)  
        areaJS.removeEventListener('click', ocultaBox, false)  
    }
    

}

function viewHTML() {
    divHTML.style.zIndex=2;
    divCSS.style.zIndex=1;
    divJS.style.zIndex=0;
};

function viewCSS() {
    divHTML.style.zIndex=1;
    divCSS.style.zIndex=2;
    divJS.style.zIndex=0;
};

function viewJS() {
    divHTML.style.zIndex=0;
    divCSS.style.zIndex=1;
    divJS.style.zIndex=2;
};

function closedBox(){
    boxCookies.style.display="none";
    setCookie();
};

function setCookie(){
    var dateToday = new Date();
    var dateExpire = new Date();
    dateExpire.setDate(dateToday.getDate()+365)
    document.cookie = 'user-cookies-consent=yes;expires='+dateExpire+"'"
    localStorage.setItem("cookie","yes")
};

function chamadaProjetoDemo(){
    arrayProjetos = []
    if(localStorage.getItem("Projetos")){
           //Capturar se esse trecho foi executado
           console.log("Já há projetos do usuário. Demo não será gravado!")
        //gravarProjetoDemo()
    }else{
        gravarProjetoDemo()
           //Capturar se esse trecho foi executado
           console.log("testando esse techo gravarProjetoDemo ")
    //     if(NovoProjeto.value==""){

    //     }else{
    //     NovoProjeto.style.display="none"
    //     btOKnewProject.style.display="none"
    //     box.style.height="80px"
    //     }
    }
    

};

var nomeProjetoRenomearDemo;
function compararNomesRenomearDemo(element, index, array){
    nomeProjetoRenomearDemo =  nomeProjeto
    return element== nomeProjetoRenomearDemo
};

function gravarProjetoDemo(){
    nomeProjeto = "Projeto Demo"

    //Se já existe o array com os nomes dos projetos, 
    if(localStorage.getItem("Projetos")){
        //Capturar se esse trecho foi executado
        console.log("testando esse techo 1")
        if(nomeProjeto!=""){
            arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))

            var a = arrayProjetos.some(compararNomesRenomearDemo)
            if(a==true){
                if(localStorage.getItem("lang")=="PT-BR"){
                    exibeDivMessage("Projeto de demonstração carregado!")
                }else if(localStorage.getItem("lang")=="EN"){
                    exibeDivMessage("There is already a project with that name!")
                }
                
            }else{
                if( ListaProjetos){
                    ListaProjetos.innerHTML=""
                }
                
                
                arrayProjetos.push(nomeProjeto)
                updateArray()
                localStorage.setItem('Projetos', JSON.stringify(arrayProjetos))
                //arrayProjetos.forEach(listarProjetos)
                setSiteDemo()
            }



            // if(localStorage.getItem("lang")=="PT-BR"){
            //     exibeDivMessage("Projeto salvo! Selecione o projeto e comece a codar!")
            // }else if(localStorage.getItem("lang")=="EN"){
            //     exibeDivMessage("Project saved! Select the project and start coding!")
            // }
            // NovoProjeto.style.display="none"
            // btOKnewProject.style.display="none"
            // box.style.height="80px"
        }else{ 
            //  if(localStorage.getItem("lang")=="PT-BR"){
            //     exibeDivMessage("Você precisa definir um nome!")
            // }else if(localStorage.getItem("lang")=="EN"){
            //     exibeDivMessage("You need to define a name!")
            // }

        }

    } else {
           //Capturar se esse trecho foi executado
           console.log("testando esse techo 2")

        if( ListaProjetos){
            ListaProjetos.innerHTML=""
        }
        
        
        arrayProjetos.push(nomeProjeto)
        //console.log(arrayProjetos + " ddd")
        updateArray()
        localStorage.setItem('Projetos', JSON.stringify(arrayProjetos))
        //arrayProjetos.forEach(listarProjetos)
        setSiteDemo()
        //console.log("tudo ok")
        listarProjetosAoAbrir()

        //Se o nome do projeto não está vazio
        // if(nomeProjeto!=""){
        //     arrayProjetos.push(nomeProjeto) //adiciona elemento no array
        //     localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
        //     setSiteDemo()
        //     arrayProjetos.forEach(listarProjetos)  
           
        // }else{
        //     if(localStorage.getItem("lang")=="PT-BR"){
        //         exibeDivMessage("Você precisa definir um nome!")
        //     }else if(localStorage.getItem("lang")=="EN"){
        //         exibeDivMessage("You need to define a name!")
        //     }
        // }

    }
    // NovoProjeto.value=""
    
};

function setSiteDemo(){


var areaHTMLdemo = document.getElementById("areaHTMLdemo")
var areaCSSdemo = document.getElementById("areaCSSdemo")
var areaJSdemo = document.getElementById("areaJSdemo")
    nomeProjeto = "Projeto Demo"
    //console.log(areaHTMLdemo)
    if (areaHTMLdemo){
        //console.log(areaHTMLdemo.innerHTML)
       // console.log("setar site")
        site={
            html:areaHTMLdemo.innerHTML,
            css: areaCSSdemo.innerHTML,
            js:areaJSdemo.innerHTML 
        }
        // Transformar o objeto em string e salvar em localStorage
        localStorage.setItem(nomeProjeto, JSON.stringify(site));
        // if(NomeProjeto){
        //     console.log("há NomeProjeto")
        //     NomeProjeto.value = localStorage.getItem("Projeto Atual")
        //     getSite()
        // }
        //getSite();
        codexist.src += '';
    }

    
  
};

var Facilitador=true
/**
 * Implementação de autofechamento de tags
 */
if(areaHTML){
    areaHTML.addEventListener('keypress', (e) => {
        //console.log("keypress: " + e.key)
        if(e.key=="p" && Facilitador==true){
            
            var divDatalist = document.createElement("div")
            divDatalist.setAttribute("class", "divDatalist")

            var inputTagsHtml = document.createElement("input")
            inputTagsHtml.setAttribute("id", "inputTags")
            inputTagsHtml.setAttribute("list", "tags")

            var datalistTagsHtml = document.createElement('datalist')
            datalistTagsHtml.setAttribute("id", "tags")

            datalistTagsHtml.innerHTML=
            `<option value="a">\n
            <option value="address">\n
            `
            divDatalist.appendChild(inputTagsHtml)
            divDatalist.appendChild(datalistTagsHtml)
            document.body.appendChild(divDatalist)

            console.log("Tecla pressionada" + e.key)
            //divEdit.textContent="amor"
            let a = (areaHTML.value.slice(0,-1))
            //let a = (areaHTML.value)
            //let n =Number(areaHTML.innerText.length)
            console.log(areaHTML.value.length)
            //areaHTML.value = a + " <p>  </p> "
            setSite()
            
           //divEdit.focus()
           //divEdit.setSelectionRange(1,2)
        // lista.style.display='block'
        // lista.style.position='absolute'
        // lista.style.left= '0px'
        // lista.style.top= '0px'
        }
    });

    // areaHTML.addEventListener('keypress', (e) => {
    //     console.log("keypress: " + e.key)
    //     if(e.key=="p"){}
    // });

    areaHTML.addEventListener('input', (e) => {
        //console.log(e)
        var str = areaHTML.value
        areaHTML.value =  str.replace("<span ", " <span>  </span> " )
        areaHTML.value =  str.replace("<span1 ", " <span>  </span> " )
        
        //areaHTML.value =  str.replace("<h1 ", " <h1>  </h1> " );
        areaHTML.value =  str.replace("<ah ", " <a href=' '>  </a> ");
        //console.log("keydown: " + e.key)
       //console.log("string subsituida")
        /*if(e.key=="p"){

            
            console.log("Posição :" + str.indexOf('<p '))
            console.log("OPA!!! "+ str.replace("<p ", " <p>  </p>" ))
            
            //e.target.dataset.defaultValue=" <p>  </p> "
            //areaHTML.value = e.target.dataset.defaultValue
        }*/
    });
}
/*********************/
 //vai executar quando o doom estiver pronto para ser manipulado
 //document.addEventListener('DOMContentLoaded', function(){
    //chamadaProjetoDemo();
    // setTimeout(function(){
    //         //aqui é o codigo que vai ser executado depois do tempo determinado no segundo parametro
    //         if(localStorage.getItem("Projeto Demo")){
    //             console.log("Há demo")
    //         } else{
    //            // chamadaProjetoDemo();
                
    //             console.log("Else foi executado")
    //         } 
    
    // }, 5000);// <-- o tempo que vai levar ate a funcao ser executada, em milisegundos


//     if(inputRename){
//         ListaProjetos.addEventListener('change', (event) => {
//             getNameProject()
//         });
//     }

//     if(languageList){

//         if(localStorage.getItem("lang")){
//             languageList.value = localStorage.getItem("lang")
//             setLanguage()
//         }
//         languageList.addEventListener('change',(event) => {
//             setLanguage()
//             if(localStorage.getItem("lang")=="PT-BR"){
//                 window.location=""+ window.location    
//             }
         
//         });
//     }

//     listarProjetosAoAbrir()
//     if(window.location.href.endsWith("page-view")||window.location.href.endsWith("page-view/")){
//         var projetoAtual = localStorage.getItem("Projeto Atual")
//         siteObj = JSON.parse(localStorage.getItem(projetoAtual)) ;
//         corpopage = document.getElementById("corpopage")
//         estilo = document.getElementById("estilo")
//         codeJS = document.getElementById('codejs')
        
//         if(siteObj){
//             corpopage.innerHTML = siteObj.html;
//             estilo.innerHTML = siteObj.css; 
//             var scrp = document.createElement('script')
//             scrp.text = siteObj.js
//             document.body.appendChild(scrp)
//         }
//     }

//     if(!window.location.href.endsWith("page-view")||(!window.location.href.endsWith("page-view/"))){
//         if(localStorage.getItem("Projeto Atual")&&localStorage.getItem("Projeto Atual")!="[]"){
            
//         }

//         if(areaHTML){
//             areaHTML.addEventListener("input",setSite);
//         }
//         if(areaCSS){
//             areaCSS.addEventListener("input",setSite);
//         }
//         if(NomeProjeto){
//             NomeProjeto.value = localStorage.getItem("Projeto Atual")
//             getSite()
//         }
   
//     }

//   if(!localStorage.getItem("cookie")){
//   var boxCookies = document.getElementById("boxCookies");
//     if(boxCookies){
//         boxCookies.style.display="block";
//     }
//   }else{

//   }


//   });

window.onload = function (){

    if(inputRename){
        ListaProjetos.addEventListener('change', (event) => {
            //getNameProject()
        });
    }

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

    listarProjetosAoAbrir()
    if(window.location.href.endsWith("page-view")||window.location.href.endsWith("page-view/")){
        var projetoAtual = localStorage.getItem("Projeto Atual")
        siteObj = JSON.parse(localStorage.getItem(projetoAtual)) ;
        corpopage = document.getElementById("corpopage")
        estilo = document.getElementById("estilo")
        codeJS = document.getElementById('codejs')
        
        if(siteObj){
            corpopage.innerHTML = siteObj.html;
            estilo.innerHTML = siteObj.css; 
            var scrp = document.createElement('script')
            scrp.text = siteObj.js
            document.body.appendChild(scrp)
        }
    }

    if(!window.location.href.endsWith("page-view")||(!window.location.href.endsWith("page-view/"))){
        if(localStorage.getItem("Projeto Atual")&&localStorage.getItem("Projeto Atual")!="[]"){
            
        }

        if(areaHTML){
            console.log("conteudo HTML alterado")
            //areaHTML.addEventListener("input",setSite);
        }
        if(areaCSS){
            console.log("conteudo CSS alterado")
            //areaCSS.addEventListener("input",setSite);
        }
        if(areaJS){
            console.log("conteudo JS alterado")
            //areaJS.addEventListener("input",setSite);
        }
        // if(NomeProjeto){
        //     NomeProjeto.value = localStorage.getItem("Projeto Atual")
        //     getSite()
        // }
   
    }

  if(!localStorage.getItem("cookie")){
  var boxCookies = document.getElementById("boxCookies");
    if(boxCookies){
        boxCookies.style.display="block";
    }
  }else{

  }

};