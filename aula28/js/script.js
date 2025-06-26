const numero = Number(prompt("Digite seu número"));
const numeroTitulo = document.getElementById('numero-escolhido');
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero;

texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`
texto.innerHTML += `<p>É inteiro? ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>É NaN? ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)}</p>`
