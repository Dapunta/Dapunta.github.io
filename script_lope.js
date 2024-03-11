function submitForm(buttonId) {
    if (buttonId === 'button1') {
        document.forms[0].submit();
    }
}
function moveButton(buttonClass) {
    const button = document.querySelector('.' + buttonClass);
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}