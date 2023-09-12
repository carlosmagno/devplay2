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

