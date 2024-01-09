// funcionamanto slide brinquedoteca
const slider = document.querySelectorAll('.slider');
const setaAvancar = document.getElementById('seta-avancar');
const setaVoltar = document.getElementById('seta-voltar');

let slideAtivo = 0;

// monstrar e esconder os slides, adiconando e removendo as imagens do array
function esconderSlide() {
    slider.forEach(item => item.classList.remove('on'));
} 
function monstrarSlide() {
    slider[slideAtivo].classList.add('on');
}

function proximoSlide() {
    esconderSlide()
    if (slideAtivo == slider.length -1){
        slideAtivo = 0;
    }
    else{
        slideAtivo++
    }
    monstrarSlide()
}

function ulimtoSlide() {
    esconderSlide()
    if (slideAtivo == 0){
        slideAtivo = slider.length -1;
    }
    else{
        slideAtivo--
    }
    monstrarSlide()
}
setaAvancar.addEventListener('click', proximoSlide)
setaVoltar.addEventListener('click', ulimtoSlide)

// ------- funcionamanto slide playground ----------------
const sliderPlayground = document.querySelectorAll('.slider-playground');
const setaAvancarPlayground = document.getElementById('seta-avancar-playground');
const setaVoltarPlayground = document.getElementById('seta-voltar-playground');

let slideAtivoPlayground = 0;

// monstrar e esconder os slides, adiconando e removendo as imagens do array
function esconderSlidePlayground() {
    sliderPlayground.forEach(item => item.classList.remove('on'));
} 
function monstrarSlidePlayground() {
    sliderPlayground[slideAtivoPlayground].classList.add('on');
}

function proximoSlidePlayground() {
    esconderSlidePlayground()
    if (slideAtivoPlayground == sliderPlayground.length -1){
        slideAtivoPlayground = 0;
    }
    else{
        slideAtivoPlayground++
    }
    monstrarSlidePlayground()
}

function ulimtoSlidePlayground() {
    esconderSlidePlayground()
    if (slideAtivoPlayground == 0){
        slideAtivoPlayground = sliderPlayground.length -1;
    }
    else{
        slideAtivoPlayground--
    }
    monstrarSlidePlayground()
}


setaAvancarPlayground.addEventListener('click', proximoSlidePlayground)
setaVoltarPlayground.addEventListener('click', ulimtoSlidePlayground)


// ------- funcionamanto slide bercarios ----------------
const sliderBercarios = document.querySelectorAll('.slider-bercarios');
const setaAvancarBercarios = document.getElementById('seta-avancar-bercarios');
const setaVoltarBercarios = document.getElementById('seta-voltar-bercarios');

let slideAtivoBercarios = 0;

// monstrar e esconder os slides, adiconando e removendo as imagens do array
function esconderSlideBercarios() {
    sliderBercarios.forEach(item => item.classList.remove('on'));
} 
function monstrarSlideBercarios() {
    sliderBercarios[slideAtivoBercarios].classList.add('on');
}

function proximoSlideBercarios() {
    esconderSlideBercarios()
    if (slideAtivoBercarios == sliderBercarios.length -1){
        slideAtivoBercarios = 0;
    }
    else{
        slideAtivoBercarios++
    }
    monstrarSlideBercarios()
}

function ulimtoSlideBercarios() {
    esconderSlideBercarios()
    if (slideAtivoBercarios == 0){
        slideAtivoBercarios = sliderBercarios.length -1;
    }
    else{
        slideAtivoBercarios--
    }
    monstrarSlideBercarios()
}


setaAvancarBercarios.addEventListener('click', proximoSlideBercarios)
setaVoltarBercarios.addEventListener('click', ulimtoSlideBercarios)


// ------- funcionamanto slide parkkids ----------------
const sliderParkkids = document.querySelectorAll('.slider-parkkids');
const setaAvancarParkkids = document.getElementById('seta-avancar-parkkids');
const setaVoltarParkkids = document.getElementById('seta-voltar-parkkids');

let slideAtivoParkkids = 0;

// monstrar e esconder os slides, adiconando e removendo as imagens do array
function esconderSlideParkkids() {
    sliderParkkids.forEach(item => item.classList.remove('on'));
} 
function monstrarSlideParkkids() {
    sliderParkkids[slideAtivoParkkids].classList.add('on');
}

function proximoSlideParkkids() {
    esconderSlideParkkids()
    if (slideAtivoParkkids == sliderParkkids.length -1){
        slideAtivoParkkids = 0;
    }
    else{
        slideAtivoParkkids++
    }
    monstrarSlideParkkids()
}

function ulimtoSlideParkkids() {
    esconderSlideParkkids()
    if (slideAtivoParkkids == 0){
        slideAtivoParkkids = sliderParkkids.length -1;
    }
    else{
        slideAtivoParkkids--
    }
    monstrarSlideParkkids()
}


setaAvancarParkkids.addEventListener('click', proximoSlideParkkids)
setaVoltarParkkids.addEventListener('click', ulimtoSlideParkkids)