const img = document.querySelector('.item1');
const arrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');

arrowBtn.addEventListener('click', () => {
    img.classList.toggle('hide');

    img.classList.contains('hide') ? 
    arrowIcon.style.transform = "rotate(180deg)" : arrowIcon.style.transform = "rotate(0)"
}
)