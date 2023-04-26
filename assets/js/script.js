// Función para generar la caja informativa dinámicamente
function generarInfoBox() {
    var infoBox = document.createElement("div");
    infoBox.className = "container my-5";
    infoBox.id = "infobox";
    var innerHTML = '<div class="row">' +
                        '<div class="col-6 mx-auto">' +
                            '<div id="info">' +
                                '<h1>¡Apresúrese!</h1>' +
                                '<p>El plazo máximo para inscribirse es solo 2 días después de la siguiente fecha:</p>' +
                            '</div>' +
                            '<div class="column" id="date">' +
                                '<h1 id="insertDate">30-12-2020</h1>' +
                            '</div>' +
                            '<form>' +
                                '<div class="mb-3">' +
                                    '<label for="nombreUsuario" class="form-label">Usuario</label>' +
                                    '<input type="text" class="form-control" id="nombreUsuario" aria-describedby="emailHelp">' +
                                '</div>' +
                                '<div class="mb-3">' +
                                    '<label for="txtCorreo" class="form-label">Correo</label>' +
                                    '<input type="email" class="form-control" id="txtCorreo" aria-describedby="emailHelp">' +
                                '</div>' +
                                '<div class="mb-3">' +
                                    '<label for="txtPassword" class="form-label">Contraseña</label>' +
                                    '<input type="password" class="form-control" id="txtPassword">' +
                                '</div>' +
                                '<button type="button" class="btn btn-primary">Inscribirse</button>' +
                            '</form>' +
                        '</div>' +
                    '</div>';
    infoBox.innerHTML = innerHTML;
    document.body.appendChild(infoBox);
}

// Función para obtener la fecha actual y actualizarla en la página
function actualizarFecha() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var dateStr = day + '-' + month + '-' + year;
    document.getElementById("insertDate").innerText = dateStr;
}

// Llamada a las funciones al cargar la página
window.onload = function() {
    generarInfoBox();
    actualizarFecha();
}

