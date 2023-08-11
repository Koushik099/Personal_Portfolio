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

// projects page 🚀🚀🚀

let projectsDiv = document.getElementById("project-container");
const projects = require("./projects.js");

projects.forEach((ele) => {
  projectsDiv.innerHTML += `
  <div class="project" data-aos=${ele.dataAos}>
  <img src=${ele.imageSrc} alt="projectimg" />
  <div class="links">
    <a
      href=${ele.gitHubLink}
      target="_blank"
      ><button class="btn project-btn">Source Code</button></a
    >

    <a href=${ele.liveLink} target="_blank"
      ><button class="btn project-btn">Deploy Link</button></a
    >
  </div>
</div>
  
  `;
});
