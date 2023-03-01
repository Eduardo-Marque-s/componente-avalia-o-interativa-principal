let icone = document.querySelector('.icone');
let selecNumero = document.querySelector('.select');
let botao = document.querySelector('.btn');
let corp = document.querySelector('.corpo');
let card1 = document.querySelector('.card');

icone.addEventListener('click', event=>{
    let selecionado = event.target.innerText;
    selecNumero.innerText = selecionado;

    if(selecionado >0 ||selecionado <=5){
        botao.addEventListener('click',() =>{
            corp.style.display = 'none'
            card1.style.display = 'flex'
        });
    }
});

