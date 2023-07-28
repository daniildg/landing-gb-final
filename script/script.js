"use strict";

// активация мобильного меню
const menuEl = document.querySelector(".header_menu");
const menuButtonOpenEl = document.querySelector(".header-mobile_menu");

menuButtonOpenEl.addEventListener("click", () => {
  menuEl.style.display = "block";
});

const menuButtonCloseEl = document.querySelector(".menu_close");
menuButtonCloseEl.addEventListener("click", () => {
  menuEl.style.display = "none";
});

const headerRightEl = document.querySelector(".header-right");
const headerStyle = window.getComputedStyle(headerRightEl);
window.addEventListener("resize", () => {
  let headerStyleMaxWidth = headerStyle.getPropertyValue("max-width");
  if (headerStyleMaxWidth === "618px") {
    menuEl.style.display = "block";
  } else {
    menuEl.style.display = "none";
  }
});

// проверка пароля
const passwordForms = document.querySelectorAll(".form_input_password");

const findError = (enter, approve) => {
  const error = approve.value === enter.value ? true : false;
  return error;
};

const successHighlight = (elementsList) => {
  elementsList.forEach((element) => {
    element.style.outline = "2px solid green";
  });
};

const errorHighlight = (elementsList) => {
  elementsList.forEach((element) => {
    element.style.outline = "2px solid red";
  });
};

passwordForms[1].addEventListener("input", () => {
  if (findError(passwordForms[0], passwordForms[1])) {
    successHighlight(passwordForms);
  } else {
    errorHighlight(passwordForms);
  }
});

// пятизвездочная система
let stars = document.querySelectorAll(".rating_star_path");

for (const star of stars) {
  star.addEventListener("click", () => {
    star.setAttribute("data-clicked", "true");
  });
}
