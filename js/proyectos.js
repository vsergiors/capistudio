console.log("CapiStudio - Web Development Studio");

/* ===================== */
/* NAV ACTIVE */
/* ===================== */

const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

/* ===================== */
/* MODAL ELEMENTOS */
/* ===================== */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

/* ===================== */
/* DATOS PROYECTOS */
/* ===================== */

const proyectos = {
    capicash: {
        nombre: "CapiCash",
        desc: "Este sistema es una aplicacion android que vas metiendo tus ingresos y gastos y te va diciendo cuanto dinero tienes, cuanto has gastado, etc. Tambien tiene una interfaz muy bonita y facil de usar. La peculiaridad de esta aplicacion es que tiene un capibara que va evolucionando o involucionando segun el dinero que tengas, es decir si tienes x dinero y metes gastos el capibara se va a ir involucionando y si metes ingresos se va a ir evolucionando, es una forma divertida de ver como vas con tu dinero. La puedes adquirir en https://payhip.com/binarymarket/"
    },
    vibra: {
        nombre: "Vibra",
        desc: "Es una plataforma móvil centrada en compartir contenido visual donde los usuarios publican imágenes y vídeos cortos para mostrar su vida, intereses o trabajo creativo. Ya no se puede adquirir"
    },
    tradeplus2: {
        nombre: "TradePlus2",
        desc: "Plugin de trading en Minecraft. Disponible en Modrinth"
    },
    seasonalshop: {
        nombre: "SeasonalShop",
        desc: "Tienda virtual con productos de temporada. Disponible en Modrinth."
    }
};

/* ===================== */
/* ABRIR MODAL */
/* ===================== */

function openModal(id) {
    modalTitle.textContent = proyectos[id].nombre;
    modalDesc.textContent = proyectos[id].desc;

    modal.style.display = "flex";

    // reiniciar animación
    const box = document.querySelector(".modal-content");
    box.style.animation = "none";
    void box.offsetWidth;
    box.style.animation = "popIn 0.25s forwards";
}

/* ===================== */
/* CERRAR MODAL */
/* ===================== */

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

/* ===================== */
/* CLICK EN PROYECTOS */
/* ===================== */

document.querySelectorAll(".capicash, .vibra, .vaultkey, .tradeplus2, .seasonalshop").forEach(el => {
    el.addEventListener("click", () => {

        if (el.classList.contains("capicash")) {
            openModal("capicash");
        }

        if (el.classList.contains("vibra")) {
            openModal("vibra");
        }

        if (el.classList.contains("vaultkey")) {
            openModal("vaultkey");
        }

        if (el.classList.contains("tradeplus2")) {
            openModal("tradeplus2");
        }

        if (el.classList.contains("seasonalshop")) {
            openModal("seasonalshop");
        }

    });
});

/*Responsive*/
 const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('headerNav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
});