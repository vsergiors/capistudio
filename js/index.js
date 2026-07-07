console.log("CapiStudio - Web Development Studio");
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

 /*Responsive*/
 const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('headerNav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
});