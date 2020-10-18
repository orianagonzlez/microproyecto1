/* Insertando dinamicamente las habilidades */

var habilidades = [{'titulo': 'HTML', 'destreza': 60}, 
                {'titulo': 'CSS', 'destreza': 50},
                {'titulo': 'JavaScript', 'destreza': 35}, 
                {'titulo': 'Python', 'destreza': 70}, 
                {'titulo': 'Java', 'destreza': 60}];

var seccion = document.getElementById('contenedor-skills');

var rangoDestreza = 0;
habilidades.forEach(habilidad => {
    if (habilidad.destreza === 0) {
        rangoDestreza = 0;
    } else if (habilidad.destreza < 11) {
        
    } else if (habilidad.destreza < 21) {
        rangoDestreza = 20;
    } else if (habilidad.destreza < 31) {
        rangoDestreza = 30;
    } else if (habilidad.destreza < 41) {
        rangoDestreza = 40;
    } else if (habilidad.destreza < 51) {
        rangoDestreza = 50;
    } else if (habilidad.destreza < 61) {
        rangoDestreza = 60;
    } else if (habilidad.destreza < 71) {
        rangoDestreza = 70;
    } else if (habilidad.destreza < 81) {
        rangoDestreza = 80;
    } else if (habilidad.destreza < 91) {
        rangoDestreza = 90;
    } else {
        rangoDestreza = 100;
    }

    seccion.innerHTML += '<div class="destreza"><div class="grafico-barra rango-' + rangoDestreza + '"></div><div class="porcentaje-destreza">' + habilidad.destreza + '%</div>\n' + '<div class="titulo-destreza">' + habilidad.titulo + '</div></div>';
});

