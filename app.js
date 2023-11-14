// Función para cargar la vista de la ciudad
function cargarCiudad() {
    fetch('http://localhost:3000/ciudad')
        .then(response => response.text())
        .then(html => {
            document.getElementById('contenido').innerHTML = html;
            // Aquí puedes añadir más lógica para manejar los datos de la ciudad
        })
        .catch(error => console.error('Error al cargar la ciudad:', error));
}

// Función para cargar el mapa
function cargarMapa() {
    fetch('http://localhost:3000/mapa')
        .then(response => response.text())
        .then(html => {
            document.getElementById('contenido').innerHTML = html;
            // Aquí puedes añadir más lógica para manejar los datos del mapa
        })
        .catch(error => console.error('Error al cargar el mapa:', error));
}

// Ejemplos de cómo llamar estas funciones
// Suponiendo que tienes botones o enlaces para cargar la ciudad y el mapa
document.getElementById('botonCiudad').addEventListener('click', cargarCiudad);
document.getElementById('botonMapa').addEventListener('click', cargarMapa);
