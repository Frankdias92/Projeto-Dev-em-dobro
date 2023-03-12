const selecionarBotao = document.querySelectorAll('.btnLast');

const imagens = document.querySelectorAll('.imgs');

selecionarBotao.forEach((btnLast, indice) => {

  btnLast.addEventListener('click', () => {
    
    desativarBotaoSelecionado();
    btnLast.classList.add('select');

    
    trocarImagemAtiva();
    imagens[indice].classList.add('ativa');
  });
})


function trocarImagemAtiva() {
  const ativarImagem = document.querySelector('.ativa');
  ativarImagem.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector('.select');
  botaoSelecionado.classList.remove('select');
}

