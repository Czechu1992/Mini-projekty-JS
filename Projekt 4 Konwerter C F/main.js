const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

const changeUnits = () => {
    if(one.textContent === '°C' ){
        one.textContent = '°F' ;
        two.textContent = '°C' ;
        result.textContent = '';
    } else {
        two.textContent = '°F' ;
        one.textContent = '°C' ;
        result.textContent = '';
    }
}

const convertToC = () => {
    const value = (converter.value *1.8) + 32;
    result.textContent = `${converter.value}°C to ${value.toFixed(1)}°F`;
    converter.value = '';
}

const convertToF = () => {
    const value = (converter.value - 32)/1.8;
    result.textContent = `${converter.value}°F to ${value.toFixed(1)}°C`;
    converter.value = '';
}

const conversion = () => {
    if(converter.value !== ''){

        if(one.textContent === '°C'){
            convertToC();
        } else {
            convertToF();
        }
        
    }else {
        result.textContent = 'Musisz podać jakąś wartość';
    }
}

const reset = () => {
    converter.value = '';
    result.textContent = '';
}

changeBtn.addEventListener('click', changeUnits);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', reset);