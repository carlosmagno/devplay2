/***
 * Modelo de objeto
 *
    {
        id:"",
        HTML:"",
        CSS: "",
        JS:"",
        Desenvolvedor:""
    },

 */


var bdJson = [];

bdJson = [
    {
        id:"Projeto1",
        HTML:"<h1>Projeto 1</h1>",
        CSS: "*{color:pink;}",
        JS:"//Comentário em JS",
        Desenvolvedor:"Carlos Magno"
    },

    {
        id:"Projeto2",
        HTML:"<h1>Projeto 2</h1>",
        CSS: "*{color:red;}",
        JS:"//Comentário em JS",
        Desenvolvedor:"Pedro Magno"
    },

    {
        id:"Conteúdo lateral e rodapé",
        HTML:'<aside>\n<span>Barra Lateral</span>\n</aside><section id="ArtigosBlog"><h2>Artigos do Blog</h2><article id="PostNumero1"> <h3>Título do Post Número 1</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem impedit at aperiam fugit nihil nobis quibusdam autem ad. Exercitationem eaque saepe iusto ut aspernatur quis id cupiditate officiis quae?...</p> <address>Autor: Charles Darwin <br> Rua Paraíso, 128, São Paulo, SP <br>Site: <a href="https://www.link-do-site.com">www.link-do-site.com</a></address>/article><article id="PostNumer2"><h3>Título do Post Número 2</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem impedit at aperiam fugit nihil nobis quibusdam autem ad. Exercitationem eaque saepe iusto ut aspernatur quis id cupiditate officiis quae?...</p><address>Autor: Benjamim Franklin <br>Rua Vale do Céu, 129, Brasília, DF<br>Site: <a href="https://www.link-do-site.com">www.link-do-site.com</a></address></article></section><footer><span>Rodapé</span></footer>',
        CSS: "aside{ \n background-color:purple;\n color:white;\n text-align:center;\n float:left;\nwidth:10vw;\nheight:90vh;\nborder:1px solid black;\n}\n\nsection#ArtigosBlog{\nborder:1px solid;\nbackground-color:orange;\nwidth:95vw;\n}\n\nfooter{\nbackground-color:aqua;\nposition:static;\ntext-align:center;\ntop:90vh;\nheight:10vh;\nwidth:95vw;\nborder:1px solid black;\n}\n\nh2, article{\npadding:0 1vw 0 12vw;\n}\n",
        JS:"",
        Desenvolvedor:""
    }
]
