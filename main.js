var signUpBtn = document.getElementById('signUp');
var closeBtn = document.getElementById('closeBtn');
var modal = document.getElementById('modal');

document.addEventListener('keydown', e => {
    if (e.keyCode == 27) {
        modal.style.display = 'none'
    }
})

signUpBtn.addEventListener('click', () => {
    modal.style.display = 'block'
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
});