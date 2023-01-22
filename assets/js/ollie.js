/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
});

const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');

let clicked = false;
let xAxis;
let x;

sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = `grab`;
}) 
sliderContainer.addEventListener('mousedown', e => {
    clicked = true
    xAxis = e.offsetX - slider.offsetLeft;
    // tells the current position

    sliderContainer.style.cursor = `grabbing`
})

window.addEventListener('mouseup', () => {
    clicked = false
})

sliderContainer.addEventListener('mousemove', e => {
    if (!clicked) return;
    e.preventDefault();

    x = e.offsetX;
    slider.style.left = `${x - xAxis}px`;
    // but we dont want it to scroll forever

    checkSize()
})

function checkSize () {
    let sliderContainerOut = sliderContainer.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();

    if (parseInt(slider.style.left) > 0) {
        slider.style.left = `0px`;
    } else if (sliderIn.right < sliderContainerOut.right) {
        slider.style.left = `-${sliderIn.width - sliderContainerOut.width}px`
    }
}