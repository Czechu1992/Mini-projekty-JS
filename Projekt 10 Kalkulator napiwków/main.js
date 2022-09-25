const priceInput = document.querySelector('#price');
const peopleInput = document.querySelector('#people');
const tipSelect = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost'); 
// const error = document.querySelector('.error');
const priceError = document.querySelector('.price-error');
const peopleError = document.querySelector('.people-error');
const tipError = document.querySelector('.tip-error');


const checkFields = () => {
    if((priceInput.value !== '' && priceInput.value > 0 ) && (peopleInput.value !== '' && peopleInput.value > 0 ) && tipSelect.value != 0 ){

        clearErrors();
        const price = Number(priceInput.value );
        const people = Math.floor( Number(peopleInput.value ));
        const tipProcent = Number(tipSelect.value );

        const tip = (price + (price * tipProcent ))/ people;
        
        
        costInfo.style.display = 'block';
        cost.textContent = tip.toFixed(2); 
    
        clearInputs();
    } else { 
        checkInput(priceInput,priceError,"Pole nie może być puste a jego wartosć musi być większa od 0" );
        checkInput(peopleInput,peopleError,"Pole nie może być puste a jego wartosć musi być większa od 0" );
        checkInput(tipSelect,tipError,"Wybierz napiwek" );
    }
}

const checkInput = (input, p, text) => {
    if(input.value !== '' && input.value > 0){
        if(input.classList.contains('error-input')){
            input.classList.remove('error-input');
            p.textContent = '';
        }
    } else {
            inputError(input);
            p.textContent = text;
    }
}

const inputError = (el) => {
    el.classList.add('error-input');
}

const clearErrors = () => {
    document.querySelectorAll('.error-input-text').forEach(el => {
        el.textContent = '';
    })
    document.querySelectorAll('.error-input').forEach(el => {
        el.classList.remove('error-input');
    })
}

const clearInputs = () => {
    priceInput.value = '';
    peopleInput.value = '';
    tipSelect.value = 0;
}


countBtn.addEventListener('click', checkFields);

