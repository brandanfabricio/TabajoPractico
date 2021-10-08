// Ejercicio 1 
let a = 1, b=1;
let c = ++a;
let d= b++;
document.getElementById("uno").innerHTML = `<p> <strong> El valor de </strong> <br> a = ${a} <br> b = ${d} <br> c = ${c} </p>`

//Ejercicio 2
let aa = 2;
let x = 1 + (a*=2);
document.getElementById("dos").innerHTML = `<p> <strong> El valor de </strong>  A = ${aa} y X = ${x} </p>`


//Ejercicio 4 
let mayor = 5 > 4;
console.log('5 es mayo que 4 = ' + mayor);
let mayorL = "apple" > "pineapple"
console.log(mayorL)
console.log("2" > "12");
console.log( undefined == null);
console.log(undefined === null);
console.log( null == "\n0\n");
console.log(null === +"\n0\n");




//Ejercicio 5
let arr = [5,3,8,1];
function FilterRange(arr,a,b){

    for (let i of arr) {
            if( i >= a && i <= b ){
                document.getElementById("cinco")
                .innerHTML += `<p>El valor filtrado de la funcion FilterRange es <strong> ${i} </strong> </p>`
            }
    }

}
FilterRange(arr,1,4)




//seis



function burbuja(arreglo){
    //recorreremos todos los elementos hasta n-1
    for(i=0;i<(arreglo.length-1);i++)
    //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
    for(j=0;j<(arreglo.length-i);j++){
 
        //comparamos
        if(arreglo[j]> arreglo[j+1]){
             //guardamos el numero mayor en el auxiliar
             aux=arreglo[j];
             //guardamos el numero menor en el lugar correspondiente
             arreglo[j]=arreglo[j+1];
             //asignamos el auxiliar en el lugar correspondiente
             arreglo[j+1]=aux;
 
        }
 
    }
 
    return arreglo
}

//arreglo a ordenar
var arregloAOrdenar=[1000,9,111,8,1,5,4,2,99,2,3];
 
//invocamos la función
arregloAOrdenar=burbuja(arregloAOrdenar);
 
//imprimimos para ver el resultado
document.getElementById('seis').innerHTML = arregloAOrdenar;


//ejercicio 7
var array = [2,1,3,4,5];
array.sort(
    function shuffle() 
    
    { return Math.random() - 0.5 });
   
document.getElementById("siete").innerHTML = `El orden cambia del arreglo <strong>( ${array}  )</strong>`    
console.log(array)




//ejercicio 8

let string = ["Hare","Krisna","Hare","Krisna","Krisna","krisna",":-0"]


var unique = string.filter(function(item, index, array) {
  return array.indexOf(item) === index;
})
document.getElementById("ocho").innerHTML =`Arreglo sin elementos repetidos <strong>( ${unique} )</strong>`
console.log(unique);