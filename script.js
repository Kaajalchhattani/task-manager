`use strict`;
let click=0;
document.querySelector('.enter').addEventListener('click',function()
{   click++;
    let x= document.querySelector('.tt').value;
     var p=document.createElement("button");
     let c=document.createElement("button");
     let m=document.createElement("button");
     let y=document.createElement("button");
     c.innerHTML="Delete";
     m.innerHTML="Mark as Done";
     y.innerHTML="Description";
    
     p.setAttribute('class', `btn1  ${click}`);
     c.setAttribute('class', `btn2  ${click}`);
     m.setAttribute('class', `btn3  ${click}`);
     y.setAttribute('class', `btn4  ${click}`);
 
  /*   1
     p.id=`btn1 btn1--${i}`;
     c.id=`btn2  btn1--${i}`;
     *//*
    c.onclick=function()
    {  
            p.remove();
       
            c.remove();
            m.remove();
        
    };

*/
var t = document.createTextNode(`${x}`);
p.appendChild(t);
document.body.appendChild(p);
document.body.appendChild(c);
document.body.appendChild(m);
document.body.appendChild(y);
    
c.addEventListener('click', function onClick(event) {
        
      
        p.remove();
       
        c.remove();
        m.remove();
        y.remove();
      
        
      });
     
  let p1=0;
    m.addEventListener('click', function onClick(event) {
        p1++;
        if(p1%2!=0)
        p.style.backgroundColor = 'lightgreen';
        else
        p.style.backgroundColor = '#f0f0f0';
        
        
      
        
      });
      let x1= document.querySelector('.area').value;
      y.addEventListener('click', function onClick(event) {
        
        
        alert(`${x1}`);
        
      
        
      });
     
 
   
})