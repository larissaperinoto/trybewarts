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
  for (let item = 0; item < familia.length; item += 1) {
    if (familia[item].checked === true) {
      const valorFamilia = familia[item].value;
      return valorFamilia;
    }
  }
}

function inputConteudo() {
  const valorConteudo = [];
  for (let item = 0; item < conteudo.length; item += 1) {
    if (conteudo[item].checked === true) {
      valorConteudo.push(` ${conteudo[item].value}`);
    }
  }
  return valorConteudo;
}

function inputAvaliacao() {
  for (let item = 0; item < avaliacao.length; item += 1) {
    if (avaliacao[item].checked === true) {
      const valorAvaliacao = avaliacao[item].value;
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
  for (let element = 0; element < conteudoForms.length; element += 1) {
    conteudoForms[element].classList.add('hide');
    botaoEnviar.classList.add('hide');
  }
  dadosUsuario();
}
botaoEnviar.addEventListener('click', escondeForms);
