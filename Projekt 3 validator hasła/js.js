const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 8;

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

const removeAdditionalInfo = () => {
    if(document.querySelector('.additional-info')){
    document.querySelector('.additional-info').remove();
    }
    return
}

const showMsg = () => {
    
    if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        removeAdditionalInfo();
        p.textContent = 'Masz bardzo dobre hasło!';
        p.style.color = 'lime';
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)){
        p.textContent = 'Masz dobre hasło!';
        p.style.color = 'gold';
        if(!document.querySelector('.additional-info')){
            const additionalP = document.createElement('p');
            additionalP.setAttribute('class','additional-info')
            additionalP.textContent = 'Możesz wzmocnić swoje hasło dodając znak specialny';
            additionalP.style.fontSize = '16px';
            additionalP.style.color = 'grey';
            insertAfter(p,additionalP);
            }
    } else {
        removeAdditionalInfo();
        p.textContent = 'Masz słabe hasło!';
        p.style.color = 'tomato';
    }
}

const checkPassword = () => {
    if(pass.value != ''){
        showMsg()
    } else {
        removeAdditionalInfo();
        p.textContent = 'Nie podałeś hasła';
        p.style.color = '';
    }
}

pass.addEventListener('keyup', checkPassword);