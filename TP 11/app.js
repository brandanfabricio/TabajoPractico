window.onload = () => asignar.style.display = 'none';

let id = '';

const ver = document.querySelector('#ver');
const agrega = document.querySelector('#agregar');
const asignar = document.querySelector('#asignar');
const a = document.querySelector('#a');

const btnP = document.querySelector('#btnP');
const btnM = document.querySelector('#btnM');
const btnC = document.querySelector('#btnC');
const btnE = document.querySelector('#btnE');
const btn = document.querySelector('#btn');

btnM.addEventListener('click', mostrar);
btnE.addEventListener('click', mostrarE);
btnC.addEventListener('click', mostrarC);
btnP.addEventListener('click', agregar);

function agregar() {
    ver.innerHTML = '';
    const nom = document.querySelector('#nombre');
    const dir = document.querySelector('#dom');
    const tel = document.querySelector('#tel');
    const fecha = document.querySelector('#fecha');
    axios.post(url = 'http://localhost:3000/PERSONA', {
        "apeynom": nom.value,
        "domicilio": dir.value,
        "telefono": tel.value,
        "fechaNacimiento": fecha.value
    }).then(res => console.log(res))
    mostrar()
}
function mostrar() {
    ver.innerHTML = '';
    axios.get(url = 'http://localhost:3000/PERSONA').then(obj => {
        obj.data.forEach(ve => {
            let oK = Object.keys(ve);
            let oV = Object.values(ve);
            let lar = oK.length - 1;
            for (let i = 0; i < lar; i++) {
                ver.innerHTML += '<p>' + oK[i] + ': ' + oV[i] + '</p>'
            }
            ver.innerHTML += '<input type="button" value="Eliminar" onClick="eliminar(\'' + oV[lar] + '\')">';
            ver.innerHTML += '<input type="button" value="Modificar" onClick="modificar(\'' + oV[lar] + '\')">';
            ver.innerHTML += '<input type="button" value="Asignar Funcion" onClick="agregarFuncion(\'' + oV[lar] + '\')">';
        })
    })
    asignar.style.display = 'none';
}
function agregarFuncion(a) {
    agrega.style.display = 'none';
    asignar.style.display = 'flex';
    id = a

}
function agregarfuncio() {
    const lista = document.querySelector('#lista')
    const z = document.querySelector('#z').value
    const x = document.querySelector('#x').value
    axios.post(url = 'http://localhost:3000/' + lista.value + '/', {
        "personaId": id,
        "descuento": z,
        "fechadecompra": x
    }).then(res => console.log(res))
    agrega.style.display = 'flex';
    asignar.style.display = 'none';
}
function eliminar(a) {
    ver.innerHTML = '';
    axios.delete(url = 'http://localhost:3000/PERSONA/' + a
    ).then(obj => { })
    mostrar();
}
function modificar(a) {
    btnP.style.display = 'none';
    btnM.style.display = 'none';
    btnC.style.display = 'none';
    btnE.style.display = 'none';
    const nom = document.querySelector('#nombre');
    const dir = document.querySelector('#dom');
    const tel = document.querySelector('#tel');
    const fecha = document.querySelector('#fecha');
    ver.innerHTML = ''
    axios(url = 'http://localhost:3000/PERSONA/' + a
    ).then(obj => {
        console.log(obj.data)
        nom.value = obj.data.apeynom;
        dir.value = obj.data.domicilio;
        tel.value = obj.data.telefono;
        fecha.value = obj.data.fechaNacimiento;
    })
    btn.innerHTML = '<input type="button" value="Modificar" onClick="modificarD(\'' + a + '\')">'
}
function modificarD(a) {
    const nom = document.querySelector('#nombre');
    const dir = document.querySelector('#dom');
    const tel = document.querySelector('#tel');
    const fecha = document.querySelector('#fecha');
    axios.put(url = 'http://localhost:3000/PERSONA/' + a, {
        "apeynom": nom.value,
        "domicilio": dir.value,
        "telefono": tel.value,
        "fechaNacimiento": fecha.value
    }).then(res => console.log(res))
    mostrar();
}
function mostrarE() {
    ver.innerHTML = '';
    axios(url = 'http://localhost:3000/EMPLEADO'
    ).then(obj => {
        console.log(obj.data)
        obj.data.forEach(ve => {
            let oK = Object.keys(ve);
            let oV = Object.values(ve);
            let lar = oK.length - 1;
            for (let i = 0; i < lar; i++) {
                ver.innerHTML += '<p>' + oK[i] + ': ' + oV[i] + '</p>'
            }
            ver.innerHTML += '<br>'
        });
    })
}
function mostrarC() {
    ver.innerHTML = '';
    axios(url = 'http://localhost:3000/CLIENTE'
    ).then(obj => {
        console.log(obj.data)
        obj.data.forEach(ve => {
            let oK = Object.keys(ve);
            let oV = Object.values(ve);
            let lar = oK.length - 1;
            for (let i = 0; i < lar; i++) {
                ver.innerHTML += '<p>' + oK[i] + ': ' + oV[i] + '</p>'
            }
            ver.innerHTML += '<br>'
        });
    })
}