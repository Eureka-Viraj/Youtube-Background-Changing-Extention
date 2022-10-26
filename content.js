window.onload = () => {
    const button = document.createElement('button');
    button.id = "darkModeButton";
    button.textContent = "Do It White"
    document.querySelector('#end').prepend(button);

    button.addEventListener('click', () => enableWhiteMode());
}

function enableWhiteMode() {
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = "white";
}