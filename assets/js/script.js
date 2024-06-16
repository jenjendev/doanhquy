"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
};

addEventOnElem(window, "scroll", headerSticky);

/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
};

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

// glidejs
document.querySelectorAll(".products-slide").forEach((e) => {
  new Glide(e.querySelector(".glide"), {
    type: "slider",
    starAt: 0,
    perView: 3,
    rewind: false,
    bound: true,
    breakpoints: {
      1200: {
        perView: 3,
      },
      800: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
  }).mount();
});
document.querySelectorAll(".product-img").forEach((e) => {
  e.style.width = e.parentElement.offsetWidth + "px";
  e.style.height = e.parentElement.offsetWidth + "px";

  new hoverEffect({
    parent: e,
    intensity: 0.6,
    image1: e.getAttribute("data-img-1"),
    image2: e.getAttribute("data-img-2"),
    displacementImage: "assets/images/distortion.jpg",
  });
});
new Glide(".gallery-slide", {
  type: "carousel",
  starAt: 0,
  perView: 8,
  breakpoints: {
    1200: {
      perView: 3,
    },

    500: {
      perView: 1,
    },
  },
}).mount();
/* cart*/

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");
cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});
closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});
// start when the doc is ready
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
function start() {
  addEvents();
}
function update() {
  addEvents();
  updateTotal();
}
function addEvents() {
  //remove item from the cart
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeItem);
  });

  //change item quantity
  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handle_changeItemQuantity);
  });

  // add item to cart
  let addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });
}
function handle_changeItemQuantity() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  this.value = Math.floor(this.value); // to keep it integer
  update();
}


/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () {
  this.classList.toggle("active");
};

addEventOnElem(accordionAction, "click", toggleAccordion);
