const frm = document.querySelector("form");
const pre = document.querySelector("pre");
const soma = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    let resposta = "";
    let somar = 0;

    for (let i = 1; i <= 10; i++){
        resposta += numero + " x " + i + " = " + (numero * i) + "\n";
        somar += (numero*i);
    }

    pre.innerText = resposta;
    soma.innerText = "A soma dos resultados é: " + somar;
})