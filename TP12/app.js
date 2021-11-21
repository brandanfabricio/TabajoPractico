window.onload = cargarListas;

const btnCP = document.querySelector('#btnCP');
const btnLP = document.querySelector('#btnLP');
const btnAM = document.querySelector('#btnAM');
const btnAP = document.querySelector('#btnAP');
const btnA = document.querySelector('#btnA');
const btnMM = document.querySelector('#btnMM');
const verP = document.querySelector('#verP');
const verM = document.querySelector('#verM');
const mat = document.querySelector('#mat');
const prof= document.querySelector('#prof');
const listaP = document.querySelector('#listaP');
const listaE = document.querySelector('#listaE');

btnCP.addEventListener('click', cargarP)
btnLP.addEventListener('click', listarP)
btnAM.addEventListener('click', agregarM)
btnMM.addEventListener('click', mostrarM)
btnAP.addEventListener('click', agregarP)
btnA.addEventListener('click', atras)

let idE;
let idP;
let pro = [];
let es = [];

function atras() {
   mat.style.display = 'flex';
   prof.style.display = 'none';
}

function agregarP() {
    prof.style.display = 'flex';
    mat.style.display = 'none';
}
function cargarP() {
    const nombreP = document.querySelector('#nombreP');
    axios.post(url = 'http://localhost:3000/profesores', {
        "Profesor": nombreP.value
    }).then(res => console.log(res))
}

function agregarM() {
    const nombreM = document.querySelector('#nombreM');
    const listaP = document.querySelector('#listaP');
    const listaE = document.querySelector('#listaE');
    axios.post(url = 'http://localhost:3000/materias', {
        "Materia": nombreM.value,
        "idE": idE,
        "idP": idP
    }).then(res => console.log(res))
}

function listarP() {
    verP.innerHTML = '';
    axios(url = 'http://localhost:3000/profesores').then(obj => {
        obj.data.forEach(ve => {
           
            let oV = Object.values(ve);
            verP.innerHTML += '<p>' + oV[0] + '</p>'
        })
    })
}

async function cargarListas() {
    let estados = await axios.get("http://localhost:3000/estado")
    let profesores = await axios.get("http://localhost:3000/profesores")
    estados.data.forEach(obj => {
        es.push(obj.estado)
        let oV = Object.values(obj);
        listaE.innerHTML += '<option id="' + oV[1] + '">' + oV[0] + '</option>'
    })
    profesores.data.forEach(obj => {
      pro.push(obj.profesor)
        let oV = Object.values(obj);
        listaP.innerHTML += `<option id="${oV[1]}">${oV[0]}</option>`
    })
    atras()
}

function cargarVE() {

    idE = listaE.options[listaE.selectedIndex].id;

}

function cargarVP() {

    idP = listaP.options[listaP.selectedIndex].id;
}

async function mostrarM() {

    let materia= '';
    let ma = await axios(url = 'http://localhost:3000/materias');
    ma.data.forEach(ve => {
        let oV = Object.values(ve);
        materia += '<p>Materia: ' + oV[0] + '</p>';
        materia += '<p>Profesor: ' + pro[oV[2]-1]+ '</p>'
        materia += '<p>Estado: ' + es[oV[1]-1] + '</p>'
        materia += '<input type="button" value="Eliminar Materia" onclick="borrar(\'' + oV[3] + '\')" /> <br>'
    })
    verM.innerHTML = materia;
}

async function profesores(a) {

    let pro = await axios(url = 'http://localhost:3000/profesores/' + a);

    return pro.data
}

async function estado(a) {

    let est = await axios(url = 'http://localhost:3000/estado/' + a);
    return Object.values(est.data)
}

function borrar(id ) {
        axios.delete(url = 'http://localhost:3000/materias/' + id);
        mostrarM()
}