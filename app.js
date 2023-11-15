import { cargarCiudad } from './includes/ciudad.js';
import { cargarMapa } from './includes/mapa.js';
import { actualizarRecursos } from './includes/recursos.js';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('botonCiudad').addEventListener('click', cargarCiudad);
    document.getElementById('botonMapa').addEventListener('click', cargarMapa);

    // Actualizar recursos cada X segundos
    const INTERVALO_ACTUALIZACION = 10000; // 10 segundos, ajustar según sea necesario
    setInterval(actualizarRecursos, INTERVALO_ACTUALIZACION);

    // Llamar a la función al cargar la página
    actualizarRecursos();
});
