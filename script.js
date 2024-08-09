const p_dias = document.querySelector(".p_dias");

const inicio = new Date(2024,3,1);

const hoy = new Date();

let dif = inicio.getTime() - hoy.getTime();

const diasTotales = (inicio, hoy) => {
    let dif = inicio.getTime() - (hoy.getTime() - (1000 * 3600));
    let diasTotales = Math.ceil(dif / (1000 * 3600 * 24));
    return diasTotales > 0 ? diasTotales : diasTotales * (-1);
}

const diasDesde = diasTotales(inicio,hoy);

p_dias.innerHTML = `Hasta el día de hoy llevamos juntos ${diasDesde} dias y quiero que siempre que regreses aqui recordar que estare aqui para lo que sea, te hare feliz y te protegere siempre, en las buenas y en las malas, aqui estoy siempre para ti, por siempre tuyo Roly&#128147;`;

console.log("Esta es una pagina en la cual he estado poniendo mi esfuerzo, te amo hoy por siempre y mañana mas &#128147;")