import '../css/reset.css';
import '../css/style.css';
import '../css/fonts.css';

// Browser compatibility ie11 (forEach)
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    // eslint-disable-next-line no-param-reassign
    thisArg = thisArg || window;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// ---------- show nav menu right ----------
const btnIconMenu = document.querySelector('.icon');
btnIconMenu.addEventListener('click', () => {
  btnIconMenu.classList.toggle('open');
  document.getElementById('sidebar-right-show').classList.toggle('show-menu');
  document.getElementById('mask-overlay-show').classList.toggle('show-mask');
});

// ---------- show search ----------
const btnIconSearch = document.querySelectorAll('.icon-search-show');
btnIconSearch.forEach(icon => {
  icon.addEventListener('click', () => {
    document.getElementById('search').classList.toggle('show-search');
  });
});

// const hiddenElement = document.getElementById("top-page");
// const btn = document.querySelector(".footer__top-page-link");
// function handleButtonClick() {
//   console.log("object");
//   hiddenElement.scrollIntoView({ behavior: "smooth" });
// }
// btn.addEventListener("click", handleButtonClick);

// ----------- Close the nav menu if the clicks outside of it
// window.onclick = event => {
//   if (!event.target.matches(".icon")) {
//     const sidebar = document.getElementsByClassName("sidebar-right");
//     for (let i = 0; i < sidebar.length; i++) {
//       const openSidebar = sidebar[i];
//       if (openSidebar.classList.contains("show-menu")) {
//         openSidebar.classList.remove("show-menu");
//         document.querySelector(".icon").classList.remove("open");
//       }
//     }
//   }
// };
