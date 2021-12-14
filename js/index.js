//Photo Gallery 
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

imgs[0].style.opactiy = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick)
  );

  function imgClick(e) {
    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));
    //Change current img to source of clicked
    current.src = e.target.src;
    // Add fade in 
    current.classList.add('fade-in');
    //remove fade-in class
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //Change opacity
    e.target.style.opacity = opacity;

  }
