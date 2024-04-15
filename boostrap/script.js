const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});


const container_contenido = document.getElementById('container_contenido');

//Crear variables para cada uno de los items del menu
const item_menu_link1 = document.getElementById('item_menu_link1');
const item_menu_link2 = document.getElementById('item_menu_link2');
const item_menu_login = document.getElementById('item_menu_login');
const item_menu_register = document.getElementById('item_menu_register');
const item_menu_profile = document.getElementById('item_menu_profile');
const item_menu_settings = document.getElementById('item_menu_settings');
const item_menu_task = document.getElementById('item_menu_task');
const item_menu_notification = document.getElementById('item_menu_notification');
const item_menu_top = document.getElementById('item_menu_top');
const item_menu_lomejor = document.getElementById('item_menu_lomejor');
const home = document.getElementById('home');

//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_link1.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('link1.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

item_menu_link2.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('link2.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

item_menu_login.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('login.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

item_menu_notification.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('notification.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

item_menu_profile.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('profile.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

item_menu_register.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('register.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

item_menu_settings.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('settings.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

item_menu_task.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('task.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

item_menu_top.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('top.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

item_menu_lomejor.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('lomejor.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente

home.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('home.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente
