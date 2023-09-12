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