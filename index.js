let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// Sticky navbar


menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
 
        }

    });


    header.classList.toggle('sticky' , window.scrollY > 100)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}







