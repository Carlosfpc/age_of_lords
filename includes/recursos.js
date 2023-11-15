export function actualizarRecursos() {
  const idUsuario = 'ID_DEL_USUARIO'; // Reemplazar con el ID de usuario correspondiente

  fetch(`http://localhost:3000/recursos/${idUsuario}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('comida').textContent = data.comida;
      document.getElementById('madera').textContent = data.madera;
      document.getElementById('piedra').textContent = data.piedra;
      document.getElementById('oro').textContent = data.oro;
    })
    .catch(error => console.error('Error al obtener los recursos:', error));
}
  

  