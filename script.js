document.addEventListener('DOMContentLoaded', function () {
    const ciudadSection = document.getElementById('ciudad');
    const mapaSection = document.getElementById('mapa');
    
    document.getElementById('linkCiudad').addEventListener('click', function () {
        ciudadSection.classList.add('active');
        mapaSection.classList.remove('active');
    });

    document.getElementById('linkMapa').addEventListener('click', function () {
        mapaSection.classList.add('active');
        ciudadSection.classList.remove('active');
    });
});

function cargarSeccion(id, archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => console.error('Error al cargar la sección:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    cargarSeccion('ciudad', './secciones/ciudad.html');
    cargarSeccion('mapa', './secciones/mapa.html');
});
