

//        modificando visual banner button


let botao = document.querySelector('#btn');



botao.addEventListener('mouseover', () => {

botao.textContent = 'Venha Logo e Faça sua Visita';

})

botao.addEventListener('mouseout', () => {
botao.textContent = 'Agenda a sua Visita';

})




//         modificando visual banner texto

let banner = document.querySelector('.banner'); 

banner.addEventListener('mouseover', () => {
banner.textContent = 'Venha confirir nossa Estrutura';

})

banner.addEventListener('mouseout', () => {
banner.textContent = 'Venha agendar uma Visita';

})
