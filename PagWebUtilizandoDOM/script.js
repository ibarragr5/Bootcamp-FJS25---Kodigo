// Función para agregar productos a la tabla
function agregar() {
  // Obtén los valores del formulario
  var form = document.getElementById("char");
  var textboxs = form.getElementsByTagName("input");
  var cant = parseInt(document.getElementById("cant").value, 10);
  var valor = parseFloat(document.getElementById("amount").value);
  // Validación de los valores ingresados
  if (isNaN(cant) || isNaN(valor)) {
    alert("Introduce valores numéricos válidos.");
    return;
  }

  var subTotal = cant * valor; // Calcular el subtotal
  var newTR = document.createElement("tr"); // Crear nueva fila
  // Rellenar la fila con los valores del formulario y el subtotal
  for (let i = 0; i <= 4; i++) {
    var newTD = document.createElement("td"); // Crear celda
    var content;

    if (i === 4) {
      content = document.createTextNode(subTotal.toFixed(2)); // Mostrar subtotal
    } else {
      content = document.createTextNode(textboxs[i].value); // Mostrar otros valores del formulario
    }

    newTD.appendChild(content);
    newTR.appendChild(newTD);
  }

  // Crear y agregar botón de "Eliminar"
  var deleteTD = document.createElement("td");
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.onclick = function () {
    // Restar el subtotal al total
    var row = this.parentNode.parentNode;
    var rowSubTotal = parseFloat(row.getElementsByTagName("td")[4].textContent);
    updateRow(-rowSubTotal);

    // Agregar la nueva fila a la tabla
    row.remove();
  };
  deleteTD.appendChild(deleteBtn);
  newTR.appendChild(deleteTD);

  var table = document.getElementsByTagName("tbody")[0]; // Buscar ubicación
  table.appendChild(newTR);

  // Limpiar los campos de entrada, excepto el botón "Agregar"
  for (let i = 0; i < textboxs.length; i++) {
    if (textboxs[i].type !== "button" && textboxs[i].type !== "submit") {
      textboxs[i].value = ""; // Limpiar solo los campos de tipo text o number
    }
  }
  // Actualizar el total
  updateRow(subTotal);
}
// Función para actualizar el total de la venta
function updateRow(subTotal) {
  var table = document.getElementsByTagName("tfoot")[0];
  var sumTotal =
    parseFloat(table.getElementsByTagName("td")[1].childNodes[0].nodeValue) ||
    0;

  var elemento = table.getElementsByTagName("td")[1].childNodes[0];

  sumTotal += subTotal;

  elemento.nodeValue = sumTotal.toFixed(2); // Actualiza el total con dos decimales
}
