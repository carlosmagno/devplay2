//import { initializeApp } from 'firebase/app';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, getDoc, getDocs , query, where} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
//import { getAuth } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
//import {  } from "https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js";
//import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBvzRjk0gSalWDP2hfmZJluOsVUYCsKafg",
    authDomain: "codeplay-br.firebaseapp.com",
    projectId: "codeplay-br",
    storageBucket: "codeplay-br.appspot.com",
    messagingSenderId: "531957206062",
    appId: "1:531957206062:web:bbfdf6d6ba765ceb9ce3bf",
    measurementId: "G-RBZNST1GPY"
};
 
const app = initializeApp(firebaseConfig);
//const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

//console.log(app)
//import { getAuth } from "https://www.gstatic.com/firebasejs/ui/9.9.4/firebase-ui-auth.js";
//import { getAuth } from "firebase/auth";
//const auth = firebase.auth();
//const auth = getAuth(app);

//var firebase = require('firebase');
// var firebaseui = require('firebaseui');

// btnLogin.addEventListener('click', startUI);

// function startUI(){
//     //console.log(auth)
//     var ui = new firebaseui.auth.AuthUI(firebase.auth());
// }


//console.log("db: ", db)

const areaHTML = document.getElementById("areaHTML")
const areaCSS = document.getElementById("areaCSS")
const areaJS = document.getElementById("areaJS")
const areaPreview = document.getElementById("areaPreview")
//Adicionar um novo documento especificando um ID usamos o método set()
    // await setDoc(doc(db, "Cidades", "Goiana"), {
    //   nome: "Goiana",
    //   estado: "PE",
    //   Região: "Brasil"
    // });

//Adicionar um novo documento sem especificar um ID, deixando o Cloud Firestore gerar um automaticamente, usamos método add()


// async function addProject2(){
//     try {
//         const docRef = await addDoc(collection(db, "Projetos", NovoProjeto.value), {
//         HTML: "Escreva seu código HTML",
//         CSS: "Escreva seu código CSS",
//         JS: "Escreva seu código JavaScript",
//         });
//         console.log("Documento gravado com ID: ", docRef.id);
//     } catch (e) {
//         console.error("Erro ao adicionar documento: ", e);
//     }
// }

var btOKnewProject = document.getElementById("btOKnewProject")
btOKnewProject.addEventListener("click", addProject)
var NovoProjeto = document.getElementById("NovoProjeto")
var nameP

NovoProjeto.addEventListener("input",gravaNome);

function gravaNome(){
    nameP = NovoProjeto.value
    console.log(nameP)
}

    async function addProject(){
        //var docRef=(doc(db, "Projetos", NovoProjeto.value));
        console.log(nameP)
        try {
                  
            await setDoc(doc(db, "Projetos", nameP), {
                HTML: "Escreva seu código HTML",
                CSS: "Escreva seu código CSS",
                JS: "Escreva seu código JavaScript",
                Desenvolvedor: "Carlos Magno",
                Nome: nameP
                  });
              
            // await setDoc(docRef, {
            // HTML: "Escreva seu código HTML",
            // CSS: "Escreva seu código CSS",
            // JS: "Escreva seu código JavaScript",
            // });
            // console.log("Documento gravado com ID: ", docRef.id);
        } catch (e) {
            console.error("Erro ao adicionar documento: ", e);
        }
    }

     
//Atualizar alguns campos de um documento sem subtituir o documento inteiro usamos método update()

var runCode = document.getElementById("runCode")

runCode.addEventListener("click",updateProjectBD)


async function updateProjectBD(){

    console.log("ATUALIZADO PROJETO NO BD FIREBASE")

    const projetoRef = doc(db, "Projetos", ListaProjetos.value);
    if(projetoRef){
    // Set the "capital" field of the city 'DC'
    await updateDoc(projetoRef, {
        HTML: areaHTML.value,
        CSS: areaCSS.value,
        JS: areaJS.value
        });
    }else{
        console.log("não existe esse projeto")
    }

};


    async function updateProject(){

        console.log("ATUALIZAR PROJETO")

        localStorage.setItem("HTML", areaHTML.value)
        localStorage.setItem("CSS", areaCSS.value)
        localStorage.setItem("JS", areaJS.value)


        // const projetoRef = doc(db, "Projetos", ListaProjetos.value);
        // if(projetoRef){
        // // Set the "capital" field of the city 'DC'
        // await updateDoc(projetoRef, {
        //     HTML: areaHTML.value,
        //     CSS: areaCSS.value,
        //     JS: areaJS.value
        //     });
        // }else{
        //     console.log("não existe esse projeto")
        // }

    };


    if(!window.location.href.endsWith("page-view")||(!window.location.href.endsWith("page-view/"))){
        if(localStorage.getItem("Projeto Atual")&&localStorage.getItem("Projeto Atual")!="[]"){
            
        }

        if(areaHTML){
            //console.log("conteudo HTML alterado")
            areaHTML.addEventListener("input",updateProject);
        }
        if(areaCSS){
            //console.log("conteudo CSS alterado")
            areaCSS.addEventListener("input",updateProject);
        }
        if(areaJS){
            //console.log("conteudo JS alterado")
            areaJS.addEventListener("input",updateProject);
        }
   
   
    }
    // const citiesRef = collection(db, "cities");
    
    // await setDoc(doc(citiesRef, "SF"), {
    //     name: "San Francisco", state: "CA", country: "USA",
    //     capital: false, population: 860000,
    //     regions: ["west_coast", "norcal"] });
    // await setDoc(doc(citiesRef, "LA"), {
    //     name: "Los Angeles", state: "CA", country: "USA",
    //     capital: false, population: 3900000,
    //     regions: ["west_coast", "socal"] });
    // await setDoc(doc(citiesRef, "DC"), {
    //     name: "Washington, D.C.", state: null, country: "USA",
    //     capital: true, population: 680000,
    //     regions: ["east_coast"] });
    // await setDoc(doc(citiesRef, "TOK"), {
    //     name: "Tokyo", state: null, country: "Japan",
    //     capital: true, population: 9000000,
    //     regions: ["kanto", "honshu"] });
    // await setDoc(doc(citiesRef, "BJ"), {
    //     name: "Beijing", state: null, country: "China",
    //     capital: true, population: 21500000,
    //     regions: ["jingjinji", "hebei"] });

//Receber um documento
//No exemplo a seguir, mostramos como recuperar o conteúdo de um único documento usando get()

//window.onload=getProjectBD()
//fechaView.addEventListener("click", getProject)
var btcodeeditor = document.getElementById("btcodeeditor")
var btOKselectProject = document.getElementById("btOKselectProject")

btOKselectProject.addEventListener("click", getProjectBD)
async function getProjectBD(){
        const docRef = doc(db, "Projetos", ListaProjetos.value);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
       // console.log("Document data:", docSnap.data().CSS);

        areaHTML.value = docSnap.data().HTML;
        areaCSS.value = docSnap.data().CSS;
        areaJS.value = docSnap.data().JS;

        localStorage.setItem("CSS", areaCSS.value)
        localStorage.setItem("HTML", areaHTML.value)
        localStorage.setItem("JSS", areaJS.value)
        codexist.src += '';
        console.log("Projeto existente e baixado do BD!")
        
        } else {
        // doc.data() will be undefined in this case
        localStorage.setItem("CSS", "")
        localStorage.setItem("HTML", "")
        localStorage.setItem("JSS", "")
        codexist.src += '';
        console.log("Não existe esse projeto!");
        }
        //RunCode()
    }

//Recuperar todos os documentos em uma coleção
//Além disso, é possível recuperar todos os documentos de uma coleção, basta omitir o filtro where() completamente:


function listarProjetosAoAbrirBD(){
    var arrayProjetosBD = [];
    if(localStorage.getItem("Projetos")){
        arrayProjetosBD= JSON.parse(localStorage.getItem("Projetos"))
        arrayProjetosBD.forEach(listarProjetosBD)  
    }else{

    }
};

function listarProjetosBD(iten, index){
    var novo = document.createElement("option")
    novo.innerText= iten
    if(ListaProjetos){
        ListaProjetos.appendChild(novo)
    }
   
};


window.onload=getHomeProjects()

/**
 * Função para exibir na Home os projetos gravados
 */

async function getHomeProjects(){
    var n=0;
    var divHTML;
    var divCSS;
    var divJS;
    var iframeRun;
    const querySnapshot = await getDocs(collection(db, "Projetos"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        var novo = document.createElement("option")
        novo.innerText= doc.id
        if(ListaProjetos){
            ListaProjetos.appendChild(novo)
        }
   
        n+=1
        console.log(doc.id, " => ", doc.data());
        //console.log(n);
    
        var divHome = document.getElementById("home")

    var newPost = document.createElement('div');
        newPost.setAttribute("class", "posts");
        //newPost.setAttribute("class", "posts");

    var newbarbutton1 = document.createElement('div');
        newbarbutton1.setAttribute("class", "barbuttons1");

    var newbarbutton2 = document.createElement('div');
        newbarbutton2.setAttribute("class", "barbuttons2");

    var newbarbutton3 = document.createElement('div');
        newbarbutton3.setAttribute("class", "barbuttons3");

    var newDivHTML = document.createElement('div');
        newDivHTML.setAttribute("class", "containerfather");
        newDivHTML.setAttribute("id", `divHTML${n}`);
        newDivHTML.innerText= doc.data().HTML
        

    var newDivCSS = document.createElement('div');
        newDivCSS.setAttribute("class", "containerfather");
        newDivCSS.setAttribute("id", `divCSS${n}`);
        newDivCSS.innerText= doc.data().CSS   

    var newDivJS = document.createElement('div');
        newDivJS.setAttribute("class", "containerfather");
        newDivJS.setAttribute("id", `divJS${n}`);
        newDivJS.innerText= doc.data().JS

    var newiframeRun = document.createElement('iframe');
        newiframeRun.setAttribute("class", "containerfather");
        newiframeRun.setAttribute("id", `iframeRUN${n}`);
        newiframeRun.setAttribute("src", "page-code");
        newiframeRun.setAttribute("frameborder", "0");  

    var newSpanDesenvolvedor = document.createElement('span');
        newSpanDesenvolvedor.setAttribute("id", `${n}`);
        newSpanDesenvolvedor.setAttribute("class", "spansInfo");
        newSpanDesenvolvedor.innerText=doc.data().Desenvolvedor;

    var newSpanHtml = document.createElement('span');
        newSpanHtml.setAttribute("id", `${n}`);
        newSpanHtml.setAttribute("class", "spansCode");
        newSpanHtml.innerText=" HTML "

    var newSpanCss = document.createElement('span');
        newSpanCss.setAttribute("id", `${n}`);
        newSpanCss.setAttribute("class", "spansCode");
        newSpanCss.innerText=" CSS "

    var newSpanJs = document.createElement('span');
        newSpanJs.setAttribute("id", `${n}`);
        newSpanJs.setAttribute("class", "spansCode");
        newSpanJs.innerText=" JS "

    var newSpanRun = document.createElement('span');
        newSpanRun.setAttribute("id", `${n}`);
        newSpanRun.setAttribute("class", "spansCode");
        newSpanRun.innerText=" ▶️ ";

    var newSpanOpenInNewWindow = document.createElement('span')
        newSpanOpenInNewWindow.setAttribute("id", `${n}`);
        newSpanOpenInNewWindow.setAttribute("class", "spansCode");
        newSpanOpenInNewWindow.innerHTML='<svg class="icons"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>';

    // var newIconFavorite = document.createElement('img');
    //     newIconFavorite.setAttribute("id", `${n}`);
    //     newIconFavorite.setAttribute("class", "spansCode");
    //     newIconFavorite.setAttribute('src', 'icons-action/favorite_border_black_24dp.svg')

    // var newIconMark = document.createElement('img');
    //     newIconMark.setAttribute("id", `${n}`);
    //     newIconMark.setAttribute("class", "spansCode");
    //     newIconMark.setAttribute('src', 'icons-action/turned_in_not_black_24dp.svg')
    
    var newSpanNomeProjeto = document.createElement('span');
        newSpanNomeProjeto.setAttribute("id", `${n}`);
        newSpanNomeProjeto.setAttribute("class", "spansInfo");
        newSpanNomeProjeto.innerText=doc.data().Nome;

    newSpanHtml.onclick= function(){
        divHTML = document.getElementById(`divHTML${this.id}`)
        divCSS = document.getElementById(`divCSS${this.id}`) 
        divJS = document.getElementById(`divJS${this.id}`)
        iframeRun = document.getElementById(`iframeRUN${this.id}`) 

        //console.log(divHTML)
        divHTML .style.zIndex=3;
        divCSS.style.zIndex=1;
        divJS.style.zIndex=0;
        iframeRun.style.zIndex = 2;
    }

    newSpanCss.onclick= function(){
        divHTML = document.getElementById(`divHTML${this.id}`) 
        divCSS = document.getElementById(`divCSS${this.id}`)
        divJS = document.getElementById(`divJS${this.id}`)
        iframeRun = document.getElementById(`iframeRUN${this.id}`)

        //console.log(divCSS)
        divHTML.style.zIndex=1;
        divCSS.style.zIndex=3;
        divJS.style.zIndex=0;
        iframeRun.style.zIndex = 2;
    }

    newSpanJs.onclick= function(){
        divHTML = document.getElementById(`divHTML${this.id}`) 
        divCSS = document.getElementById(`divCSS${this.id}`) 
        divJS = document.getElementById(`divJS${this.id}`)
        iframeRun = document.getElementById(`iframeRUN${this.id}`)

        //console.log(divJS)
        divHTML.style.zIndex=0;
        divCSS.style.zIndex=1;
        divJS.style.zIndex=3;
        iframeRun.style.zIndex = 2;
    }

    newSpanRun.onclick=  function(){

     
        // localStorage.setItem("HTMLcode", "" )
        // localStorage.setItem("CSScode", "")
        // localStorage.setItem("JScode", "")

        divHTML = document.getElementById(`divHTML${this.id}`) 
        divCSS = document.getElementById(`divCSS${this.id}`) 
        divJS = document.getElementById(`divJS${this.id}`)
        iframeRun = document.getElementById(`iframeRUN${this.id}`)

        // var corpopage = document.getElementById("corpopage")
        // var estilo = document.getElementById("estilo")
        // var codeJS = document.getElementById('codejs')
        //console.log(`iframeRUN${this.id}`)

        //console.log(divJS)
        divHTML.style.zIndex=0;
        divCSS.style.zIndex=1;
        divJS.style.zIndex=2;
        iframeRun.style.zIndex = 3;

        localStorage.setItem("HTMLcode", divHTML.innerText )
        localStorage.setItem("CSScode", divCSS.innerText )
        localStorage.setItem("JScode", divJS.innerText )
        // corpopage.innerHTML = divHTML.innerText;
        // estilo.innerHTML = divCSS.innerText; 
        // codeJS.innerHTML = divJS .innerText;
        
        iframeRun.src+=" "
        
    }

    newSpanOpenInNewWindow.onclick = function(){
        divHTML = document.getElementById(`divHTML${this.id}`) 
        divCSS = document.getElementById(`divCSS${this.id}`) 
        divJS = document.getElementById(`divJS${this.id}`)
        iframeRun = document.getElementById(`iframeRUN${this.id}`)

        localStorage.setItem("HTMLcode", divHTML.innerText )
        localStorage.setItem("CSScode", divCSS.innerText )
        localStorage.setItem("JScode", divJS.innerText )
        iframeRun.src+=" "
        window.location="../page-code";

        
    }

    // var newBarButtons = document.createElement('div');
    // newBarButtons.setAttribute("class","barbuttons");
    //newPost.appendChild(newBarButtons)
    
    divHome.insertAdjacentElement("beforeend", newPost)
    //divHome.appendChild(newPost)
    newPost.appendChild(newbarbutton1);
    newPost.appendChild(newbarbutton2);
    newPost.appendChild(newbarbutton3);
        newbarbutton1.appendChild(newSpanDesenvolvedor);
        newbarbutton2.appendChild(newSpanHtml);
        newbarbutton2.appendChild(newSpanCss);
        newbarbutton2.appendChild(newSpanJs);
        newbarbutton2.appendChild(newSpanRun)
        newbarbutton2.appendChild(newSpanOpenInNewWindow);
        //newbarbutton3.appendChild(newIconFavorite)
       //newbarbutton3.appendChild(newIconMark)
        newbarbutton3.append(newSpanNomeProjeto)
        newPost.appendChild(newiframeRun)
    newPost.append(newDivJS)
    newPost.append(newDivCSS)
    newPost.append(newDivHTML)

    
    
    


    //return doc.data()
    });
    
}



