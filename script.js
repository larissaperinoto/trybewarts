function fazerLogin() {
  const login = document.getElementById('email');
  const senha = document.getElementById('senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const botaoEntrar = document.getElementById('botao-entrar');
botaoEntrar.addEventListener('click', fazerLogin);

const agreement = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');

function habilitar() {
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

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const avaliacao = document.getElementsByClassName('avaliacao');
const familia = document.getElementsByClassName('familia');
const conteudo = document.getElementsByClassName('subject');

function inputFamilia() {
  for (const item of familia) {
    if (item.checked === true) {
      const valorFamilia = item.value;
      return valorFamilia;
    }
  }
}

function inputConteudo() {
  const valorConteudo = [];
  for (const item of conteudo) {
    if (item.checked === true) {
      valorConteudo.push(` ${item.value}`);
    }
  }
  return valorConteudo;
}

function inputAvaliacao() {
  for (const item of avaliacao) {
    if (item.checked === true) {
      const valorAvaliacao = item.value;
      return valorAvaliacao;
    }
  }
}

function dadosUsuario() {
  const formulario = document.getElementById('evaluation-form');
  const dados = document.createElement('p');
  dados.innerText = `Nome:  ${nome.value} ${sobrenome.value}
    Email: ${email.value}
    Casa: ${casa.value}
    Família: ${inputFamilia()}
    Matérias: ${inputConteudo()}
    Avaliação: ${inputAvaliacao()}
    Observações: ${textarea.value}`;
  formulario.appendChild(dados);
}

function escondeForms() {
  const conteudoForms = document.getElementsByTagName('div');
  for (const element of conteudoForms) {
    element.classList.add('hide');
  }
  dadosUsuario();
}
botaoEnviar.addEventListener('click', escondeForms);
