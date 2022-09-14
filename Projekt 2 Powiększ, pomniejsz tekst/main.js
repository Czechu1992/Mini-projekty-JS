const sizeUpBtn = document.querySelector('.sizeUp');
const sizeDownBtn = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('.text p');
let fontSize = 36;

const increaseFontSize = () => {
    if(fontSize < 64){
        fontSize+=4;
        p.style.fontSize = fontSize + 'px';
    }
}

const decreaseFontSize = () => {
    if (fontSize > 24){
        fontSize-=4;
        p.style.fontSize = fontSize + 'px';
    } 
}

const randNumber = () => { return Math.floor(Math.random()*255)}


const colorChange = () => {
    p.style.color = `rgb(${randNumber()},${randNumber()},${randNumber()})`
}

sizeUpBtn.addEventListener('click', increaseFontSize);
sizeDownBtn.addEventListener('click', decreaseFontSize);
colorBtn.addEventListener('click', colorChange);