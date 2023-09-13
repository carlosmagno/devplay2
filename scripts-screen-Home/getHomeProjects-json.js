
window.onload=getHomeProjectsJson()

/**
 * Função para exibir na Home os projetos do arquivo Json
 */

async function getHomeProjectsJson(){
    var n=0;
    var divHTML;
    var divCSS;
    var divJS;
    var iframeRun;
    const querySnapshot = bdJson;
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        var novo = document.createElement("option")
        novo.innerText= doc.id
        if(ListaProjetos){
            ListaProjetos.appendChild(novo)
        }
   
        n+=1
        console.log(doc.id, " => ", doc.id);
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
        newDivHTML.innerText= doc.HTML
        

    var newDivCSS = document.createElement('div');
        newDivCSS.setAttribute("class", "containerfather");
        newDivCSS.setAttribute("id", `divCSS${n}`);
        newDivCSS.innerText= doc.CSS   

    var newDivJS = document.createElement('div');
        newDivJS.setAttribute("class", "containerfather");
        newDivJS.setAttribute("id", `divJS${n}`);
        newDivJS.innerText= doc.JS

    var newiframeRun = document.createElement('iframe');
        newiframeRun.setAttribute("class", "containerfather");
        newiframeRun.setAttribute("id", `iframeRUN${n}`);
        newiframeRun.setAttribute("src", "page-code");
        newiframeRun.setAttribute("frameborder", "0");  

    var newSpanDesenvolvedor = document.createElement('span');
        newSpanDesenvolvedor.setAttribute("id", `${n}`);
        newSpanDesenvolvedor.setAttribute("class", "spansInfo");
        newSpanDesenvolvedor.innerText=doc.Desenvolvedor;

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
        newSpanOpenInNewWindow.innerHTML='<span title="Abrir em nova aba"> <a href="page-code" target="_blank" rel="noopener noreferrer" ><svg class="icons"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a> </span>';
        //<span title="Abrir em nova aba"> <a href="page-view" target="_blank" rel="noopener noreferrer" ><svg  class="icons"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a> </span>
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
        newSpanNomeProjeto.innerText=doc.id;

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

     
        localStorage.setItem("HTMLcode", "" )
        localStorage.setItem("CSScode", "")
        localStorage.setItem("JScode", "")

        divHTML = document.getElementById(`divHTML${this.id}`) 
        divCSS = document.getElementById(`divCSS${this.id}`) 
        divJS = document.getElementById(`divJS${this.id}`)
        iframeRun = document.getElementById(`iframeRUN${this.id}`)

        setTimeout(function(){


    
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

        }, 1000)
        //if(esperar==0){window.clearTimeout(esperar );
       
        //iframeRun.src+=" "
        
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
        //window.location="./page-code";

        
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