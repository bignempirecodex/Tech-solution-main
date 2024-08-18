const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.web-dev-high');
    const words = ['Website development', 'Graphic design', 'Video editing'];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = words[wordIndex];
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, letterIndex--);
        } else {
            textElement.textContent = currentWord.substring(0, letterIndex++);
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            currentWord = words[wordIndex];
        }

        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typingSpeed);
    }

    type();
});

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  }

  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "video":
      return "fa-solid fa-play";
    default:
      return "fa-solid fa-arrow-up-right"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;

  const icon = document.getElementById("trailer-icon");

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";

  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}

// Redirect on click
document.querySelectorAll('.interactable').forEach(element => {
  element.addEventListener('click', () => {
    window.location.href = 'about/about_us.html';
  });
});

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}
$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }

})