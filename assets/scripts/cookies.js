function setCookie( name, value, expiredays ) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays ); 
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function closePop() {
    if ( document.pop_form.chkbox.checked ){
        setCookie( "maindiv", "done" , 1 );
    }
    document.all['layer_popup'].style.visibility = "hidden";
}

cookiedata = document.cookie;   
if ( cookiedata.indexOf("maindiv=done") < 0 ){     
    document.all['layer_popup'].style.visibility = "visible";
}
else {
    document.all['layer_popup'].style.visibility = "hidden";
}