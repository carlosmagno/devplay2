
const areaHTML = document.getElementById("areaHTML")
const areaCSS = document.getElementById("areaCSS")
const areaJS = document.getElementById("areaJS")
const areaPreview = document.getElementById("areaPreview")

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

var btcodeeditor = document.getElementById("btcodeeditor")
var btOKselectProject = document.getElementById("btOKselectProject")


//window.onload=getProjectBD()
//fechaView.addEventListener("click", getProject)

btOKselectProject.addEventListener("click", getProjectBD)
async function getProjectBD(){
        const docRef = doc(db, `Projetos`, ListaProjetos.value);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
       console.log("Document data:", docSnap.data().CSS);

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
       // localStorage.setItem("CSS", "")
       // localStorage.setItem("HTML", "")
       // localStorage.setItem("JSS", "")
       // codexist.src += '';
        console.log("Não existe esse projeto!");
        }
        //RunCode()
    }