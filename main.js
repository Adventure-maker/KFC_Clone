var signUpBtn = document.getElementById('signUp');
var closeBtn1 = document.getElementById('closeBtn1');
var closeBtn2 = document.getElementById('closeBtn2');
var modal = document.getElementById('modal');
const registerForm = document.getElementById('registerForm');

const locationBtn = document.getElementById('location')

let users = []

signUpBtn.addEventListener('click', () => {
    modal.style.display = 'block'
});

closeBtn1.addEventListener('click', () => {
    modal.style.display = 'none'
});

closeBtn2.addEventListener('click', () => {
    modal2.style.display = "none"
});

var modal3 = document.getElementById('modal3');
closeBtn3.addEventListener('click', () => {
    modal3.style.display = 'none'
});


var registerBtn = document.getElementById('register');
let flag = true;

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var fullNameInput = document.getElementById('fullName');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    let message = document.getElementById('registerMessage');
    let user = {
        'fullname': fullNameInput.value,
        'email': emailInput.value,
        'password': passwordInput.value
    }

    if (flag) {
        users.push(user);
        flag = false;
        message.innerHTML = "User registered successfully"
        message.setAttribute('class', 'text-success')
        setInterval(() => {
            modal.style.display = 'none'
            message.style.display = 'none'
        }, 2000);
    }
    else if (users.some(x => x.email === user.email)) {
        message.innerHTML = "User exists"
        message.setAttribute('class', 'text-danger')
    }
    else {
        users.push(user)
        message.innerHTML = "User registered successfully"
        message.setAttribute('class', 'text-success')
        setInterval(() => {
            modal.style.display = 'none'
            message.style.display = 'none'
        }, 2000);
    }
})

var modal2 = document.getElementById('modal2')

function logIn() {
    modal.style.display = "none";
    modal2.style.display = "block";
}

var signInForm= document.getElementById('signInForm')
var  usersName = document.getElementById('usersName')

signInForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var closeBtn2 = document.getElementById('closeBtn2');
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;
    let signInmessage = document.getElementById('signInMessage');
    
    for (let x of users) {
        if (x.email === email && x.password === password) {
            signInmessage.setAttribute('class', 'text-success')
            signInmessage.innerHTML = "User is logged in."
            setInterval(() => {
                signUpBtn.style.display = "none"
                usersName.style.display = "block";
                usersName.innerHTML = x.fullname;
                usersName.setAttribute('class', 'fa fa-user')
                modal2.style.display = "none"
            }, 1000);
        }
        else {
            signInmessage.setAttribute('class', 'text-danger')
            signInmessage.innerHTML = "Wrong password or email."
        }
    }
})

var modal3 = document.getElementById('modal3')
locationBtn.addEventListener('click', () => {
    modal3.style.display = 'block';
    var setLocationBtn = document.getElementById('setLocation')
})