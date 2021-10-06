var fields = document.querySelectorAll("#formulario-membros [name]");
var user = {};



document.getElementById("formulario-membros").addEventListener("submit", function (event) {
  event.preventDefault();
  fields.forEach(function (field) {
    if (
      field.name == "sexo" ||
      field.name == "estadocivil" ||
      field.name == "condicao"
    ) {
      if (field.checked) {
        user[field.name] = field.value;
      }
    } else {
      user[field.name] = field.value;
    }
  });

  console.log(user);
  });
