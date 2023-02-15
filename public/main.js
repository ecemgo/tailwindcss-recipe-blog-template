const menubutton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");
const loadmorebutton = document.querySelector("#loadmore-button");
const allrecipes = document.querySelector("#allrecipes");
const collapsebutton = document.querySelector("#collapse-button");

menubutton.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

loadmorebutton.addEventListener("click", () => {
  allrecipes.classList.remove("hidden");
  loadmorebutton.style.visibility = "hidden";
});

collapsebutton.addEventListener("click", () => {
  allrecipes.classList.add("hidden");
  loadmorebutton.style.visibility = "visible";
});
