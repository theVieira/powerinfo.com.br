const btn = document.querySelector('#powerButton')

function activateBtn() {
    if(btn.classList == 'off') {
        btn.style.filter = 'brightness(100%)'
        btn.classList = 'on'
    } else if(btn.classList == 'on') {
        btn.style.filter = 'brightness(60%)'
        btn.className = 'off'
    }
}

btn.addEventListener('click', activateBtn)
