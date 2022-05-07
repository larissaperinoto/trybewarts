function fazerLogin() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const botaoEntrar = document.getElementById('botao-entrar');
botaoEntrar.addEventListener('click', fazerLogin);

const agreement = document.getElementById('agreement');

function habilitar() {
  const botaoEnviar = document.getElementById('submit-btn');
  if (agreement.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

agreement.addEventListener('click', habilitar);

const textarea = document.getElementById('textarea');

function contadorLetras(event) {
  const spanContador = document.getElementById('counter');
  const tamanhoDoTexto = textarea.value.split('').length;
  let contador = 500 - tamanhoDoTexto;
  spanContador.innerText = contador;
  if (event.key === ' ') {
    contador += 1;
  }
}

textarea.addEventListener('keyup', contadorLetras);
