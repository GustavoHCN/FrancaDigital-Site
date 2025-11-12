const seletorCor = document.getElementById('seletor-cor');
const btnAplicarCor = document.getElementById('btn-aplicar-cor');

btnAplicarCor.addEventListener('click', (e) => {
    const cor = seletorCor.value;
    document.documentElement.style.setProperty("--cor-fundo", cor);
});

const chips = document.querySelectorAll('.chip');   
const galeria = document.getElementById('galeria');