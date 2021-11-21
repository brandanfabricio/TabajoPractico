export class Notas{
    constructor(nombre,numero,dni,apellido,direccion,correo){
        this.nombre = nombre;
        this.numero = numero;
        this.dni = dni;
        this.apellido = apellido;
        this.direccion = direccion;
        this.correo = correo;
        this.mostrar();
    }
    guardar(e){
        const notas = {
            nombre :this.nombre,
            apellido :this.apellido,
            dni :this.dni,
            correo :this.correo,
            direccion :this.direccion,
           numero  :this.numero
         }
        if(this.nombre =="" || this.numero==""|| this.apellido ==""||this.direccion ==""|| this.correo =="" ){
            e.preventDefault()
             alert('Tiene que completar las casillas')
             return;
        }
    localStorage.setItem(this.dni,JSON.stringify(notas))
    nombre.value ="";
    numero.value ="";
    dni.value ="";
    apellido.value ="";
    direccion.value ="";
    correo.value ="";
            return
    }
    borrar(e){
        let key = e.target.dataset.key;
        localStorage.removeItem(key)
         this.monstar
         location.reload()
        return alert('Elemento borrado')
    }
    mostrar(){


        for(let i = 0 ; i < localStorage.length;i++){
            
            let  key =  localStorage.key(i)
            
            let value =  localStorage.getItem(key)
            let lista = JSON.parse(value)

            const div = document.getElementById('targetas');
        const fragmento = document.createDocumentFragment();
        const temple = document.querySelector('#temple').content;
        temple.querySelector('h3').textContent =`Nombre: ${lista.nombre}` ;
        temple.querySelector('h4').textContent =  `Apellido: ${lista.apellido}` ;
        temple.querySelector('p').textContent = `Dni: ${lista.dni}`;
        temple.querySelector('strong').textContent = `Numero: ${ lista.numero}` ;
        temple.querySelector('small').textContent = `Direccion: ${lista.direccion}`;
        temple.querySelector('b').textContent = `${lista.correo}`;
        temple.querySelector('button').dataset.key = lista.dni;
        const clone = temple.cloneNode(true)
        fragmento.appendChild(clone)
        div.appendChild(fragmento)  
        }
        
        }     
}
