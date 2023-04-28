
$('.single-item').slick({
    nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
    prevArrow: '<i class="fa-solid fa-chevron-left "></i>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
    ]
})


// ______________Validacia___________

const form = document.querySelector('.forms');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const makeOffer = document.getElementById('offer');
const message = document.getElementById('message');

form?.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    // trim to remove the whitespaces
    const emailValue = email.value.trim();
    const nameValue = name.value.trim();
    const phoneValue = phone.value.trim();
    const makeOfferValue = makeOffer.value.trim();
    const messageValue = message.value.trim();

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(nameValue ===''){
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name);
    }

    if(phoneValue === ''){
        setErrorFor(phone, 'Number cannot be blank');
    } else if(!isNumber(phoneValue)){
        setErrorFor(phone, 'Not a valid number');
    } else {
        setSuccessFor(phone);
    }

    if(makeOfferValue ===''){
        setErrorFor(makeOffer, 'Make offer cannot be blank');
    } else {
        setSuccessFor(makeOffer);
    }

    if(messageValue ===''){
        setErrorFor(message, 'Message cannot be blank');
    } else {
        setSuccessFor(message);
    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.classList.add("error");
    formControl.classList.remove('success')
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
    formControl.classList.remove("error")
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// +919367788755
// 8989829304
// +16308520397
// 786-307-3615

function isNumber(phone) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
}



// ____________hamburger menu____________


let nav = document.querySelector('.nav')
let nav_icon1 = document.querySelector('#nav-icon1');
let modal = document.querySelector('.modal')
let body = document.querySelector('.body')

nav_icon1.addEventListener("click", menuOpen)

function menuOpen(){

    nav.classList.toggle('menu-show')
    nav_icon1.classList.toggle('open')
    modal.classList.toggle('modal-open')
    body.classList.toggle('body-open')
}

modal.addEventListener('click' , modalClose)

function modalClose() {
    modal.classList.remove('modal-open')
    nav_icon1.classList.remove('open')
    nav.classList.remove('menu-show')
    body.classList.remove('body-open')

}