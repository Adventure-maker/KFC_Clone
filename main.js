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
        // setInterval(() => {
        //     modal.style.display = 'none'
        //     message.style.display = 'none'
        // }, 2000);
    }
    else if (users.some(x => x.email === user.email)) {
        message.innerHTML = "User exists"
        message.setAttribute('class', 'text-danger')
    }
    else {
        users.push(user)
        message.innerHTML = "User registered successfully"
        message.setAttribute('class', 'text-success')
        // setInterval(() => {
        //     modal.style.display = 'none'
        //     message.style.display = 'none'
        // }, 2000);
    }
})

var modal2 = document.getElementById('modal2')

function logIn() {
    modal.style.display = "none";
    modal2.style.display = "block";
}

var signInForm = document.getElementById('signInForm')
var usersName = document.getElementById('usersName')

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
            usersName.innerHTML = x.fullname;
            signUpBtn.style.display = 'none'
            usersName.style.display = 'block'
            // setInterval(() => {
            //     signUpBtn.style.display = "none"
            //     usersName.style.display = "block";
            //     usersName.setAttribute('class', 'fa fa-user')
            //     modal2.style.display = "none"
            // }, 1000);
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

const logOutDiv = document.getElementById('logOut')
usersName.addEventListener('mouseover', () => {
    logOutDiv.style.display = 'block'
})

usersName.addEventListener('mouseout', () => {
    setInterval(() => {
        logOutDiv.style.display = 'none'
    }, 4000);
})

function logOut() {
    usersName.style.display = 'none';
    signUpBtn.style.display = 'inline'
    logOutDiv.style.display = 'none'
    // console.log('function')
}

function setLocation() {
    initMap()
    console.log(latt)
}

// Initialize and add the map
function initMap() {

    var latt;
    var long;
    navigator.geolocation.getCurrentPosition(position => {
        latt = position.coords.latitude;
        long = position.coords.longitude;
        // The location of Uluru
        const city = { lat: latt, lng: long };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: city,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: city,
            map: map,
        });
    })
}










































const modal4 = document.getElementById('modal4')
function order() {
    modal4.style.display = "block"
}

var closeBtn4 = document.getElementById('closeBtn4')
closeBtn4.addEventListener('click', () => {
    modal4.style.display = 'none'
})

const savedAddress = document.getElementById('place')
const newAddress = document.getElementById('newAddress')
savedAddress.addEventListener('change', () => {
    if (savedAddress.checked = true) {
        savedAddress.checked = true;
        newAddress.checked = false;
    } else {
        savedAddress.checked = true;
    }
})

newAddress.addEventListener('change', () => {
    if (savedAddress.checked = true) {
        savedAddress.checked = false;
        newAddress.checked = true;
    } else {
        newAddress.checked = true;
    }
})

const promoCode = document.getElementById('code')
const promoCodeCont = document.getElementById('promoCodeCont')

promoCode.addEventListener('change', () => {
    if (promoCode.checked == false) {
        promoCodeCont.style.display = 'none';
    } else {
        promoCodeCont.style.display = 'block'
    }
})


const giftMessageInput = document.getElementById('giftMessageLabel')
const textArea = document.getElementById('gift')

giftMessageInput.addEventListener('change', () => {
    if (giftMessageInput.checked == false) {
        textArea.style.display = 'none';
    } else {
        textArea.style.display = 'block'
    }
})

const payment1 = document.getElementById('creditCard')
const payment2 = document.getElementById('paypal')

payment1.addEventListener('change', () => {
    if (payment1.checked = true) {
        payment1.checked = true;
        payment2.checked = false;
    } else {
        payment1.checked = true;
    }
})

payment2.addEventListener('change', () => {
    if (payment1.checked = true) {
        payment1.checked = false;
        payment2.checked = true;
    } else {
        payment2.checked = true;
    }
})

const placeOrder = document.getElementById('placeOrder')
const alert = document.getElementById('alert-box');

placeOrder.addEventListener('click', () => {
    alert.style.display = 'inline';
})