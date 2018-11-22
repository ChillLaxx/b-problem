window.onresize = function(){
    var con = document.getElementsByClassName('content')[0];
    if( window.innerWidth <= 574){
       con.style= 'top:80px;';
    }else if(window.innerWidth > 574){
        con.style= 'top:60px;';
    }
}




