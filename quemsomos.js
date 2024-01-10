

//        modificando visual banner button


let botao = document.querySelector('#btn');


botao.addEventListener('mouseover', () => {

botao.textContent = 'Venha Logo e Faça sua Visita';

})

botao.addEventListener('mouseout', () => {
botao.textContent = 'Agenda a sua Visita';

})





//         modificando visual banner texto

let banner = document.querySelector('#banner'); 

banner.addEventListener('mouseover', () => {
banner.textContent = 'Venha até a nossa amada Estrutura';

})

banner.addEventListener('mouseout', () => {
banner.textContent = 'Venha logo e agende uma Visita';

})

