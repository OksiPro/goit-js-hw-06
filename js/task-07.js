const inputControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputControl.addEventListener('input', () => {
    const fontSize = inputControl.value + 'px'; 
    spanText.style.fontSize = fontSize;
});