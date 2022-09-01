const d = document;
export default function conteoRegresivo(id, limitDate, finalMessage){
    const $conteoRegresivo = d.getElementById(id),
    conteoRegresivoDate = new Date(limitDate).getTime();

        let conteoRegresivoTempo = setInterval(()=>{
let now = new Date().getTime(),
limitTime = conteoRegresivoDate-now,
days = Math.floor(limitTime/ (1000 * 60 * 60 *24)),
hours = ("0"+Math.floor((limitTime %(1000 * 60 * 60 *24))/(1000 *60*60))).slice(-2) ,

minutes  = ("0"+Math.floor((limitTime %(1000 * 60 * 60 *24))/(1000 *60))).slice(-2),
seconds  = ("0"+Math.floor((limitTime %(1000 * 60 ))/(1000))).slice(-2);

$conteoRegresivo.innerHTML =`<h3> Faltan ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

if (limitTime < 0) {
    clearInterval(conteoRegresivoTempo);
    $conteoRegresivo.innerHTML =`<h3> ${finalMessage}</h3>`;
}
        },1000);
}