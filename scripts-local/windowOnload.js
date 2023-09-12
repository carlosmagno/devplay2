window.onload = function (){

    if(inputRename){
        ListaProjetos.addEventListener('change', (event) => {
            //getNameProject()
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



};