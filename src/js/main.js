const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },

    breakpoints: {
        
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: false
        },
        
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
          navigation: true
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        }
    }
  
});

const infoDots = document.querySelectorAll(".info__dot");
const infoHints = document.querySelectorAll(".info__hint");
const productItems = document.querySelectorAll(".product__options-item");
const menuBtn = document.getElementById('menu__btn');
const header = document.getElementById('header');
const closeMenu = document.getElementById('close');
const openMenu = document.getElementById('openMenu');


infoDots.forEach( dot => {
    // console.log(dot);
    
    dot.addEventListener('click', toggleHint)
})

document.addEventListener('click', closeHint)

productItems.forEach( item => {
    item.addEventListener("click", function(event) {
        const currentActive = document.querySelector(".product__options-item--active");
        if (event.target !== currentActive) {
            currentActive.classList.remove("product__options-item--active");
            event.target.classList.add("product__options-item--active")
        } 
        
    })
})

function toggleHint(event) {
    event.stopPropagation()
    this.parentNode.querySelector('.info__hint').classList.toggle('none')
}

function closeHint() {
    infoHints.forEach( hint => {
        hint.classList.add('none')
    })
}

infoHints.forEach( hint => {
    hint.addEventListener("click", e => e.stopPropagation())
})

menuBtn.addEventListener('click', ()=> {
  header.classList.toggle('header--active');
  openMenu.classList.toggle('none');
  closeMenu.classList.toggle('none');
})