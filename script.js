// Visualizar senha (1)
const password1 = document.querySelector(".pass1");
const btnOn1 = document.querySelector(".on");

function eyeClick() {
  let checkTypeIsPassword = password1.type == "password";

  if (checkTypeIsPassword) {
    showPassword();
  } else {
    hiddenPassword();
  }
}

function showPassword() {
  password1.setAttribute("type", "text");
  btnOn1.setAttribute("src", "img/eyeOff.png");
}

function hiddenPassword() {
  password1.setAttribute("type", "password");
  btnOn1.setAttribute("src", "img/eyeOn.png");
}

// Visualizar confirmar senha (2)
const password2 = document.querySelector(".pass2");
const btnOn2 = document.querySelector(".on2");

function eyeClick2() {
  let checkTypeIsPassword = password2.type == "password";

  if (checkTypeIsPassword) {
    showPassword2();
  } else {
    hiddenPassword2();
  }
}

function showPassword2() {
  password2.setAttribute("type", "text");
  btnOn2.setAttribute("src", "img/eyeOff.png");
}

function hiddenPassword2() {
  password2.setAttribute("type", "password");
  btnOn2.setAttribute("src", "img/eyeOn.png");
}

// Validar senhas

const resposta = document.querySelector(".resposta");

function Validar() {
  validarCondicoes();
}

function validarCondicoes() {
  const pass1 = password1.value;

  var letrasMaiusculas = /[A-Z]/;
  var letrasMinusculas = /[a-z]/;
  var numeros = /[0-9]/;
  var caractEspeciais = /[!|@|#|$|%|^|&|*]/;

  if (
    letrasMaiusculas.test(pass1) &&
    letrasMinusculas.test(pass1) &&
    numeros.test(pass1) &&
    caractEspeciais.test(pass1) &&
    pass1.length >= 8
  ) {
    validarConfirmação();
  } else {
    alert(
      "Sua senha deve conter no mínimo 8 caractéres e deve ser composta por números, caracteres especiais e letras maiúsculas e minúsculas."
    );
  }
}

function validarConfirmação() {
  const pass1 = password1.value;
  const pass2 = password2.value;

  if (pass1 === pass2) {
    alert("Sua senha foi confirmada com sucesso!");
  } else {
    alert("As senhas devem coincidir.");
  }
}
