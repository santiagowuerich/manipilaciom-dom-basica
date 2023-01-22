const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result'); //asigna una variable para poder llamarlo despues
const form = document.querySelector('#form');

//btn.addEventListener('submit', btnOnclick) llama mediante el evento click, a la funcion btnOnclick
form.addEventListener('submit', btnOnclick); 

function btnOnclick(event){  
    event.preventDefault(); //para que no recargue la pagina y no cambie el url
    const Sumainput=((Number(input1.value)) +Number((input2.value)));
    pResult.innerText =  'Resultado es: ' + Sumainput;
};