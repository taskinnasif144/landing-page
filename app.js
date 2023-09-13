const explore__btn = document.querySelector(".home__btn");

explore__btn.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const buttonRect = explore__btn.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const deltaX = clientX - buttonCenterX;
  const deltaY = clientY - buttonCenterY;

  explore__btn.style.transform = `translate(${deltaX * 0.3}px, ${
    deltaY * 0.3
  }px)`;

  explore__btn.style.filter = `drop-shadow(${deltaX * 0.2}px ${
    deltaY * 0.2
  }px 16px rgba(0, 0, 0, 1))`;
});

explore__btn.addEventListener("mouseleave", () => {
  explore__btn.style.transform = "translate(0, 0)";
  explore__btn.style.filter = `drop-shadow(14px 20px 16px rgba(0, 0, 0, 1))`;
});

const nav__btn = document.querySelector(".nav__openMenu");
const showNavMenu = document.querySelector(".resNav");
let navbar = true;

nav__btn.addEventListener("click", () => {
  if (navbar) {
    nav__btn.src = "assets/shared/icon-close.svg";
  } else {
    nav__btn.src = "assets/shared/icon-hamburger.svg";
  }

  showNavMenu.classList.toggle("resNav__active");
  navbar = !navbar;
});

/////////tabs//////////

function showTab(tabId) {
  var tabContents = document.querySelectorAll(".des__details__body");
  tabContents.forEach(function (tabContent) {
    if (tabContent.classList.contains("active")) {
      tabContent.classList.remove("active");
    }
  });
  var img = document.querySelector(".des__img__img > img");
  console.log(img);
  img.src = `assets/destination/image-${tabId}.png`;
  document.getElementById(tabId).classList.add("active");
}

showTab("moon");
