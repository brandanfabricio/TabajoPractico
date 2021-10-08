

document.getElementById('boton')

.addEventListener('click',  ()=> {

    let numero = parseInt( document.getElementById("numero").value)
    console.log(numero)
    if(!numero){
        document.getElementById("conte")
        .innerHTML = "<p class='error'>Ingrese un valor </p> "
      
           
   
    }else{
        document.getElementById("conte")
        .innerHTML = `<h2> Tabla de multipicar del  ${numero} </h2>`
    
        for ( i = 1 ; i <= 10;i++) {
            multipicar = numero * i;
           document.getElementById("conte").innerHTML +=
           
           `
                   <p>${numero} x ${i} = <strong class="res">${multipicar}</strong>  </p> 
           
           `;
          
        }
         
    }


    
})

 