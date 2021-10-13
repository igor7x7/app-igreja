class UserController {
  constructor(formId) {
    this.formEl = document.getElementById(formId);
    this.onSubmit();
  }
  onSubmit() {
    this.formEl.addEventListener("submit", (event) => {
      event.preventDefault();
      this.getValues();
    });
  } // fechando o onSubmit

  getValues() {
    let user = {};
    [...this.formEl.elements].forEach(function (field) {
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

    return new User(
      user.nome,
      user.sobrenome,
      user.sexo,
      user.escolaridade,
      user.civil,
      user.conjuge,
      user.nascimento,
      user.telefone,
      user.cep,
      user.logradouro,
      user.numero,
      user.complemento,
      user.bairro,
      user.estado,
      user.admicao,
      user.condicao,
      user.recebido,
      user.batismo,
      user.cargo,
      user.igreja,
      user.rg
    );
  } // fechando e getValues
}
