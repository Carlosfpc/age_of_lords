export function cargarCiudad() {
    fetch('http://localhost:3000/ciudad')
        .then(response => response.text())
        .then(html => {
            document.getElementById('contenido').innerHTML = html;
        })
        .catch(error => console.error('Error al cargar la ciudad:', error));
}