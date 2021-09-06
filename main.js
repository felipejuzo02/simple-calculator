const getClick = document.querySelector('[data-calculator]');
let result = document.querySelector('[data-result]');

getClick.addEventListener('click', (event) => {
  let value = event.target.textContent;

  if(value === 'C'){
    clear();
    result.classList.remove('content__result--erro')
  } else if(value === 'backspace'){
    back();
  } else if (value === '='){
    calculate();
  } else {
    result.textContent += value;
  }
})

const clear = () => {
  result.textContent = "";
}

const back = () => {
  const values = result.textContent
  result.textContent = values.substring(0, values.length - 1);
}

const calculate = () => {
  const values = result.textContent.replace("X", "*")

  if(values){
    try { 
      result.textContent = eval(values)
    } catch {
      result.textContent = 'Favor digitar uma operação válida!'
      result.classList.add('content__result--erro')
    };
  }
}