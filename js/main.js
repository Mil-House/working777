const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
    selectElement('header').classList.toggle('active');
});



function mobilemenucloseToggle(){ //remove active mobilemenu when click nav-item
    const mobiletoggleMenu = document.querySelector('header');
    //const mobileitemtoggleMenu = document.querySelector('.mobileitem');
    const minibagtoggleMenu = document.querySelector('.minibagmenu');
    mobiletoggleMenu.classList.remove("active");
    minibagtoggleMenu.classList.remove("active");
    minibagtoggleMenu.style.display = 'block';
    document.body.style.overflow = 'visible';
}



function moblangmenuToggle(){ // mob_lang mobile language menu
    const moblangtoggleMenu = document.querySelector('.moblangmenu');
    moblangtoggleMenu.classList.toggle('active')
}



function minibagmenuToggle(){
    const minibagtoggleMenu = document.querySelector('.minibagmenu');
    minibagtoggleMenu.classList.toggle('active')
}

function minibagmenucloseToggle(){ //remove active minibagmenu when mobile-menu active
    //const minibagtoggleMenu = document.querySelector('.minibagmenu');
    //minibagtoggleMenu.classList.remove("active");

    const minibagtoggleMenu = document.querySelector('.minibagmenu');
    const mobiletoggleMenu = document.querySelector('header');
    
    if(mobiletoggleMenu.classList.contains('active')) {
        minibagtoggleMenu.style.display = 'block';
        minibagtoggleMenu.classList.remove("active");
        document.body.style.overflow = 'visible';
    }
    else {
        minibagtoggleMenu.style.display = 'none';
        document.body.style.overflow = 'hidden';
    }
}

//__________________________________________________________________________________________
// if (window.matchMedia("(min-width: 768px)").matches) {}
function myFunction(x) {
    if (x.matches) { // Если медиа запрос совпадает
        document.body.style.overflow = 'visible';
    } 
    else if (z.matches && mobiletoggleMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'visible';
    }
}

const mobiletoggleMenu = document.querySelector('header');
var x = window.matchMedia("(min-width: 768px)")
var z = window.matchMedia("(max-width: 767px)")
myFunction(x) // Вызов функции прослушивателя во время выполнения
x.addListener(myFunction) // Присоединить функцию прослушивателя при изменении состояния
//__________________________________________________________________________________________


function bagmenuToggle(){
    const bagtoggleMenu = document.querySelector('.bagmenu');
    bagtoggleMenu.classList.toggle('active')
}



function langmenuToggle(){
    const toggleMenu = document.querySelector('.langmenu');
    toggleMenu.classList.toggle('active')
}


// smooth scroll by JQuery
$('.nav-item a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

    $('html, body')
        .animate({
            scrollTop: $(hash).offset().top
        },800);
    }
});