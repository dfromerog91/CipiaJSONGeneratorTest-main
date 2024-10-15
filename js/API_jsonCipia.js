// Función que se ejecutará al cargar la página
window.onload = function() {
  // Selecciona el botón y asigna un evento de clic
  document.getElementById("sendRequest").addEventListener("click", function() {
    // Realiza la solicitud POST
    fetch('https://api.cipia-fscloud.com/validate-json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) // Ajusta este objeto según los datos que necesites enviar
    })
    .then(response => {
      if (response.ok) {
        return response.text(); // o response.json() si esperas un JSON
      }
      throw new Error('La solicitud ha fallado: ' + response.statusText);
    })
    .then(data => {
      // Muestra la respuesta en el textbox
      document.getElementById("responseText").value = data;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById("responseText").value = 'Error: ' + error.message;
    });
  });
};
