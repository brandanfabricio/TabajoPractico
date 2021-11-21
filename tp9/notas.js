
export class Notas{
    constructor(nombre,numero){
        this.nombre = nombre;
        this.numero = numero;
        this.mostrar();
    }
    guardar(e){
        if(this.nombre =="" || this.numero==""){
            e.preventDefault()
             alert('Tiene que completar las casillas')
             return;
        }
    localStorage.setItem(nombre.value,numero.value)
    nombre.value ="";
    numero.value ="";
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
            let value = localStorage.getItem(key)
            const div = document.getElementById('targetas');
        const fragmento = document.createDocumentFragment();
        const temple = document.querySelector('#temple').content;
        temple.querySelector('h3').textContent = key;
        temple.querySelector('p').textContent = value;
        temple.querySelector('button').dataset.key = key;
        const clone = temple.cloneNode(true)
        fragmento.appendChild(clone)
        div.appendChild(fragmento)  
        }
        }     
}
