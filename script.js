let btns = document.querySelectorAll('#btn');
let opns = document.querySelectorAll('#opn');
let equation = document.getElementById('eqn');
let val;
let ss1;
let ss2;
let v1;
for(let i = 0; i <btns.length; i++){
    btns[i].addEventListener('click',function f(){
        equation.innerHTML += btns[i].innerHTML;
    })
}
for(let i = 0; i <opns.length; i++){
    opns[i].addEventListener('click',function g(){
        val = opns[i].innerHTML ;
        equation.innerHTML += opns[i].innerHTML;

    })
}
function handeldata(){
    let eq = equation.innerHTML ;
    v1 = eq.indexOf(val);
    ss1 = eq.substring(0,v1);
    ss2 = eq.substring(v1+1);
    equation.innerHTML += '=';
    if(val == '+'){
        let total = parseInt(ss1) + parseInt(ss2);
        equation.innerHTML += total
    }
    if(val == '-'){
        let total = parseInt(ss1) - parseInt(ss2);
        equation.innerHTML += total
    }
    if(val == '*'){
        let total = parseInt(ss1) * parseInt(ss2);
        equation.innerHTML += total
    }
    if(val == '/'){
        let total = parseInt(ss1) / parseInt(ss2);
        equation.innerHTML += total
    }
}
function cleard(){
    equation.innerHTML = ' ';
}
