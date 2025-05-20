let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');


menuBtn.onclick = () => {
  menuBtn.classList.toggle('bx-x');
  navbar.classList.toggle('active')
}

const phrases = [
    "app development".toUpperCase(),
    "software solutions".toUpperCase(),
    "analytic engineering".toUpperCase()
  ];
  
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typewriterElement = document.getElementById("typewriter");
  
  function type() {
    const currentPhrase = phrases[currentPhraseIndex];
    const text = currentPhrase.slice(0, currentCharIndex);  // The current text to be displayed
  
    // Remove the previous cursor if any
    typewriterElement.innerHTML = text;
  
    // Add the cursor after the text
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    typewriterElement.appendChild(cursor);
  
    if (isDeleting) {
      currentCharIndex--;
    } else {
      currentCharIndex++;
    }
  
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      setTimeout(() => {
        isDeleting = true;
      }, 1000); // Wait 1 second before deleting
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    }
  
    const speed = isDeleting ? 100 : 150; // Typing speed for deleting and typing
    setTimeout(type, speed);
  }
  
  type();

  
  

  
  var swiper = new Swiper(".projects-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  
    breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  
  });