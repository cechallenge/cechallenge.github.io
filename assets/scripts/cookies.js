function setCookie( name, value, expiredays ) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays ); 
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function closePop0() {
    if ( document.pop_form0.chkbox.checked){
        setCookie( "maindiv", "done" , 1 );
    }
    document.all['layer_popup0'].style.visibility = "hidden";
}

function closePop1() {
    if (document.pop_form1.chkbox.checked){
        setCookie( "maindiv", "done" , 1 );
    }
    document.all['layer_popup1'].style.visibility = "hidden";
}

cookiedata = document.cookie;   
if ( cookiedata.indexOf("maindiv=done") < 0 ){     
    document.all['layer_popup0'].style.visibility = "visible";
    document.all['layer_popup1'].style.visibility = "visible";
}
else {
    document.all['layer_popup0'].style.visibility = "hidden";
    document.all['layer_popup1'].style.visibility = "hidden";
}
