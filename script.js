let lampada = document.getElementById('lampada');

const btnDesligar = document.getElementById('btnDesligar');
const btnLigar = document.getElementById('btnLigar');

btnLigar.addEventListener("click", function () {
    lampada.src = "./img/lampada acesa.png";
});
btnDesligar.addEventListener("click", function(){
    lampada.src = "./img/lampada apagada1.png";
})