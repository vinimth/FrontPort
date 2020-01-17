const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo= document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');


const tl  = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"}, {height: '80%', ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width:  '100%'}, {width: '80%', ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut }, "-=1.2");


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }