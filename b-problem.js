window.onresize = function(){
    var con = document.getElementsByClassName('content')[0];
    w = window.innerWidth;
    if( w<=294&&w>284){
       con.style= 'Top:120px;';
    }else if(w<=284&&w>168){
        con.style= 'top:135px;';
    }else if(w<=168&&w>158){
        con.style= 'top:170px;';
    }else{
        console.log('ss');
    }
}
