//#region const
const barra1 = document.getElementById('barraCarregamento1');
const barra2 = document.getElementById('barraCarregamento2');
const barra3 = document.getElementById('barraCarregamento3');
const barra4 = document.getElementById('barraCarregamento4');

const barra_uni = document.getElementById('barraCarregamento_unico');
//#endregion




// #region carregamento 1
bar_aparece = 'initial';

window.onload(start());

function start(){
    setTimeout(um, 600);
}
function um(){
    bar_aparece = 'um';
    if(bar_aparece == 'um'){
        barra1.style.opacity = '0';
        barra2.style.opacity = '1';
        setTimeout(dois, 600);
    }
}
function dois(){
    bar_aparece = 'dois';
    if(bar_aparece == 'dois'){
        barra2.style.opacity = '0';
        barra4.style.opacity = '1';
        setTimeout(tres, 600);
    }
}
function tres(){
    bar_aparece = 'tres';
    if(bar_aparece == 'tres'){
        barra4.style.opacity = '0';
        barra3.style.opacity = '1';
        setTimeout(quatro, 600)
    }
}
function quatro(){
    bar_aparece = 'quatro';
    if(bar_aparece == 'quatro'){
        barra3.style.opacity = '0';
        barra1.style.opacity = '1';
        setTimeout(um, 600)
    }
}
// #endregion