/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 let typingEffect = new Typed(".typedText",{
    strings : ["Designer","Developer","Embedded Design"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

function insta(){
  window.open("https://www.instagram.com/kumaresan_rk_raj?igsh=dWQ3eDlxcWY5cDJ6 ","_blank");
}
function git(){
  window.open("https://github.com/RKRAJ23","_blank");
}
function linked(){
  window.open("https://in.linkedin.com/in/kumaresan-venkatraman-4238a9258","_blank");
}
function x(){
  window.open(" https://x.com/rk_raj_23?t=TRh01axf8TQkdQ0AHJItXQ&s=08 ","_blank");
}
function resume(){
  window.open("https://u.pcloud.link/publink/show?code=XZXDVD0Z1JXI0b2ylMH2tHlhnMS3xkNir2cV","_blank");
}

/**
 * 
 * to sendEmail for SMTP.JS
 * 
 * 
 */

function sendEmail(){
  let email= document.getElementById('email').value;
  let name = document.getElementById('name').value;
  let body_text= document.getElementById('textArea').value;

  Email.send({
    SecureToken : "Enter your token",       
    To : 'vkumaresan883@gmail.com',
    From :"vkumaresan883@gmail.com",
    Subject :"This is the subject contact as Name:"+name,
    Body : "  " +name+"  <br> Email From  "+ email + " <br>  Query ? :  "+body_text
}).then(
  message => alert(message)
);
console.log(email);
}