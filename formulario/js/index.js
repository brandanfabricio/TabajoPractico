document.getElementById("boton").addEventListener('click',(e)=>{
    e.preventDefault();
    
     let url = document.getElementById("url").value;
    document.getElementById("img").src = url; 
    
    console.log(url);
    
    
    })


document.getElementById("btn-guardar").addEventListener('click',(e)=>{
    e.preventDefault();
    
    window.print()
})