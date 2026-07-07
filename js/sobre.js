console.log("CapiStudio - Web Development Studio");
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

const personas = {
    vsergiors: {
        nombre: "vSergiors",
        desc: "Desarrollador de aplicaciones web y moviles con experiencia en frontend y diseño de interfaces."
    },
    ruvexdev: {
        nombre: "RuvexDev",
        desc: "Desarrollador enfocado en backend y optimización de rendimiento."
    }
};

function openModal(id) {
    modalTitle.textContent = personas[id].nombre;
    modalDesc.textContent = personas[id].desc;

    modal.style.display = "flex";

    // reinicia animación
    const box = document.querySelector(".modal-content");
    box.style.animation = "none";
    void box.offsetWidth;
    box.style.animation = "popIn 0.25s forwards";
}

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

document.querySelectorAll(".vsergiors, .ruvexdev").forEach(el => {
    el.addEventListener("click", () => {
        openModal(el.classList.contains("vsergiors") ? "vsergiors" : "ruvexdev");
    });
});

/*Responsive*/
 const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('headerNav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
});