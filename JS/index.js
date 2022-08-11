const mobile_Nav = document.querySelector(".mobile-navbar-btn");
const nav_Header = document.querySelector(".header");
let togglenavbar = () => {
  nav_Header.classList.toggle("active");
};
mobile_Nav.addEventListener("click", () => {
  togglenavbar();
});

// page reload
(function () {
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
})();
