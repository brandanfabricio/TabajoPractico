window.onload = main
import{ Notas} from './notas.js'

function main(){

    const notas = new Notas();

    document.addEventListener('click',e=>{
        if(e.target.matches('#btn-guardar')){
            let nombre = document.getElementById('nombre');
            let  numero = document.getElementById('numero');
            let  dni = document.getElementById('dni');
            let  apellido = document.getElementById('apellido');
            let  direccion = document.getElementById('direccion');
            let  correo = document.getElementById('correo');

            const notas = new Notas(nombre.value,numero.value,dni.value,apellido.value,direccion.value,correo.value);
            notas.guardar(e)
        }
    
        if(e.target.matches('.btn-borrar')){
          const notas = new Notas()
          notas.borrar(e);  
        }  
    })


}
