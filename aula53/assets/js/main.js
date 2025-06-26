const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let elementoCriado = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    elementoCriado.appendChild(textoCriado);
    container.appendChild(elementoCriado);
}


