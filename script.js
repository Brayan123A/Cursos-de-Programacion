// Buscador de cursos
const buscador = document.getElementById("buscador");
const cursos = document.querySelectorAll(".curso");

buscador.addEventListener("keyup", function() {
  let filtro = buscador.value.toLowerCase();
  cursos.forEach(curso => {
    let texto = curso.textContent.toLowerCase();
    curso.style.display = texto.includes(filtro) ? "block" : "none";
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // 1. Seleccionamos el botón de hamburguesa.
  const toggleButton = document.querySelector('.menu-toggle');
  
  // 2. Seleccionamos la lista de navegación.
  const navList = document.querySelector('.nav-list');
  
  // 3. Verificamos que los elementos existan.
  if (toggleButton && navList) {
    // 4. Agregamos un "escuchador de eventos" para el clic en el botón.
    toggleButton.addEventListener('click', () => {
      // 5. Usamos .classList.toggle para agregar o quitar la clase 'show-menu'.
      navList.classList.toggle('show-menu');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');
    const formTitle = document.querySelector('.formulario-caja h1');

    function showLoginForm() {
        loginForm.classList.add('form-active');
        loginForm.classList.remove('form-hidden');
        registerForm.classList.add('form-hidden');
        registerForm.classList.remove('form-active');
        formTitle.textContent = 'Iniciar Sesión';
        showLoginLink.style.display = 'none';
        showRegisterLink.style.display = 'block';
    }

    function showRegisterForm() {
        loginForm.classList.add('form-hidden');
        loginForm.classList.remove('form-active');
        registerForm.classList.add('form-active');
        registerForm.classList.remove('form-hidden');
        formTitle.textContent = 'Registrarse';
        showLoginLink.style.display = 'block';
        showRegisterLink.style.display = 'none';
    }

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });

    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        showRegisterForm();
    });

    // Mostrar el formulario de registro por defecto si es necesario
    // showRegisterForm(); 
});

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "/",
        "index.html",
        "estilos.css",
        "script.js",
        "cursos.png",
        "cursos.png"
      ]);
    })
  );
});



self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(err => console.log("Error al registrar:", err));
}


