const inputControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

const initialFontSize = getComputedStyle(spanText).fontSize;

inputControl.value = parseInt(initialFontSize);

inputControl.addEventListener('input', () => {
    const fontSize = inputControl.value + 'px'; 
    spanText.style.fontSize = fontSize;
});