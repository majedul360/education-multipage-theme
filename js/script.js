let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('header .navbar');
let closeNavbar = document.querySelector('#close-navbar');


menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
});

closeNavbar.addEventListener('click', () => {
    navbar.classList.remove('active');
});


// ACCOUNT SECTION 

let accountBtn = document.querySelector('#account-btn');
let account = document.querySelector('.account');
let accountClose = document.querySelector('#close-account');
let logRegBtn = document.querySelectorAll('.account .btn-container .btn');
let logReg = document.querySelectorAll('.common');

logRegBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        logRegBtn.forEach(finalBtn => {
            finalBtn.classList.remove('active');
        })
        btn.classList.add('active');

        let dataFilter = btn.getAttribute('data-button');

        logReg.forEach(iteam => {
            iteam.classList.remove('active');

            if(iteam.getAttribute('data-target') == dataFilter) {
                iteam.classList.add('active');
            };
        });

    });

    
});

accountBtn.addEventListener('click', () => {
    account.classList.add('active');
});
accountClose.addEventListener('click', () => {
    account.classList.remove('active');
});

// FAQ SECTION 

let accordion = document.querySelectorAll('.accordian');

accordion.forEach(acco =>{
  acco.addEventListener('click', () => {
    accordion.forEach(newAcco => newAcco.classList.remove('active'));
    acco.classList.add('active');
  })
 
});

// BANNER SLIDER 

var swiper = new Swiper(".banner-slider", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    loop:true,
  });

// COURSES SLIDER 

var swiper = new Swiper(".course-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
          },
        991: {
            slidesPerView:3,
          },
      },
  });

//   ABOUT PAGE TEACHER SECTION 

var swiper = new Swiper(".teacher-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
          },
        991: {
            slidesPerView:3,
          },
      },
  });

  //   ABOUT PAGE REVIEW SECTION 

var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
          },
        991: {
            slidesPerView:3,
          },
      },
  });


  //   CONTACT PAGE LOGO SLIDER

var swiper = new Swiper(".logo-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});


// FAMOUS COURSES SECTION 

let course = document.querySelectorAll('.famous-courses .box-container .hide');
let courseBtn = document.querySelector('#famous-courses-btn');

courseBtn.addEventListener('click', () => {
  course.forEach(famousCourse => {
    famousCourse.classList.add('active');
  });
  courseBtn.style.display = "none";
});

