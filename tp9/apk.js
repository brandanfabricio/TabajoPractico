window.onload = main
import{ Notas} from './notas.js'

function main(){

    const notas = new Notas();

    document.addEventListener('click',e=>{
        if(e.target.matches('#btn-guardar')){
            let nombre = document.getElementById('nombre');
            let  numero = document.getElementById('numero');
            const notas = new Notas(nombre.value,numero.value);
           notas.guardar(e)
        }
    
        if(e.target.matches('.btn-borrar')){
          const notas = new Notas()
          notas.borrar(e);  
        }  
    })


}
