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
