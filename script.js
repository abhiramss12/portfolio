/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

/* ===========================
   AOS
=========================== */

AOS.init({

    duration: 1000,
    once: true,
    easing: "ease-in-out"

});

/* ===========================
   TYPING EFFECT
=========================== */

new Typed("#typing", {

    strings: [

        "Software Developer",
        "Full Stack Developer",
        "Cloud & DevOps Enthusiast",
        "AI / ML Enthusiast",
        "Python Developer"

    ],

    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1500,
    loop: true

});

/* ===========================
   SCROLL PROGRESS BAR
=========================== */

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progress-bar").style.width =
        scrolled + "%";

});

/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "80px";
        nav.style.right = "20px";
        nav.style.padding = "25px";
        nav.style.borderRadius = "20px";
        nav.style.background = "rgba(15,15,35,.95)";
        nav.style.backdropFilter = "blur(20px)";
        nav.style.gap = "20px";

    } else {

        nav.removeAttribute("style");

    }

});

/* ===========================
   CLOSE MENU ON CLICK
=========================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 991) {

            nav.classList.remove("active");
            nav.removeAttribute("style");

        }

    });

});

/* ===========================
   PARTICLES JS
=========================== */

particlesJS("particles-js", {

    particles: {

        number: {

            value: 80,
            density: {

                enable: true,
                value_area: 900

            }

        },

        color: {

            value: "#00f2ff"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.5

        },

        size: {

            value: 3

        },

        line_linked: {

            enable: true,
            distance: 150,
            color: "#00f2ff",
            opacity: 0.3,
            width: 1

        },

        move: {

            enable: true,
            speed: 2

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,
                mode: "grab"

            },

            onclick: {

                enable: true,
                mode: "push"

            }

        }

    },

    retina_detect: true

});

/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   HERO IMAGE FLOAT
=========================== */

const image = document.querySelector(".image-box");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 45;
    const y = (window.innerHeight / 2 - e.pageY) / 45;

    image.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "55px",
    height: "55px",
    border: "none",
    borderRadius: "50%",
    background: "linear-gradient(135deg,#00f2ff,#8f00ff)",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    display: "none",
    zIndex: "9999",
    boxShadow: "0 0 20px rgba(0,255,255,.4)"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ===========================
   COPYRIGHT YEAR
=========================== */

const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} Abhiram S S | Designed & Developed with ❤️`;