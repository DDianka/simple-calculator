console.log('Simple calculator starter');
const op1 = document.querySelector('.operand1');
const op2 = document.querySelector('.operand2');
const resultField = document.querySelector('.result');

const mult = document.querySelector('#multiply');
const devide = document.querySelector('#devide');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const clear = document.querySelector('#clear');



mult.addEventListener("click", () => {
  resultField.innerHTML =  Number(op1.value) * Number(op2.value)
});

devide.addEventListener("click", () => {
    resultField.innerHTML = Number(op1.value) / Number(op2.value)
});

plus.addEventListener("click", () => {
    resultField.innerHTML = Number(op1.value) + Number(op2.value)
});

minus.addEventListener("click", () => {
    resultField.innerHTML = Number(op1.value) - Number(op2.value)
});

clear.addEventListener("click", () =>{
    resultField.innerHTML = " ";
    op1.value = " ";
    op2.value = " "
});
