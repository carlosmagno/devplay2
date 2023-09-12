
function setCookie(){
    var dateToday = new Date();
    var dateExpire = new Date();
    dateExpire.setDate(dateToday.getDate()+365)
    document.cookie = 'user-cookies-consent=yes;expires='+dateExpire+"'"
    localStorage.setItem("cookie","yes")
};


if(!localStorage.getItem("cookie")){
    var boxCookies = document.getElementById("boxCookies");
      if(boxCookies){
          boxCookies.style.display="block";
      }
    }else{
}

function closedBox(){
    boxCookies.style.display="none";
    setCookie();
};
