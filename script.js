var circle=document.getElementById("circle");
circle.style.border="2px solid red";
circle.style.backgroundColor="red";
circle.style.width="50px";
circle.style.height="50px";
circle.style.borderRadius="30px";
circle.style.position="absolute";

var a;
function animation_func(){
    var pos = 0;  
    clearInterval(a);  
    a = setInterval(frame, 2); 
    function frame() {  
    if (pos == 600) {  
        clearInterval(a);  
        box_anime();
    }
    else
    {  
        pos++;   
        circle.style.top = pos + 'px';   
        circle.style.left = pos + 'px'; 
      }  
    }  
}


function box_anime()
{
    var pos =600;
    clearInterval(a);  
    a = setInterval(frame, 2);  
    function frame() {  
    if (pos == 0) {  
        circle.style.borderRadius="0px";
        clearInterval(a);
        box_anime2();  
    }
    else
    {  
        pos--;   
        circle.style.top = pos + 'px';   
      }  
    }  
}
function box_anime2()
{
    var tpos =0;
    var lpos=600;
    clearInterval(a);  
    a = setInterval(frame, 2);  
    function frame() {  
    if (tpos == 600 && lpos==0) {  
        circle.style.borderRadius="30px";
        clearInterval(a); 
        box_anime3(); 
    }
    else
    {  
        tpos++;
        circle.style.top = tpos + 'px';   
        lpos--;
        circle.style.left = lpos + 'px'; 
      }  
    }  
}
function box_anime3()
{
    var pos =600;
    clearInterval(a);  
    a = setInterval(frame, 2);  
    function frame() {  
    if (pos == 0) {  
        circle.style.borderRadius="30px";
        clearInterval(a);
    }
    else
    {  
        pos--;   
        circle.style.top = pos + 'px';   
      }  
    }  
}