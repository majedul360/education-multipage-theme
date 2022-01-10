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

// BANNER SLIDER 

var swiper = new Swiper(".banner-slider", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });