//fetch('pessoas.json')
//    .then(resposta => resposta.json())
//    .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const resultado = document.querySelector('.resultado');
    const table = document.createElement('table');
    for (let pessoa of json){
        let tr = document.createElement('tr');
        let tdNome = document.createElement('td');
        let tdIdade = document.createElement('td');
        let tdCpf = document.createElement('td');

        tdNome.innerHTML += pessoa.nome
        tdIdade.innerHTML += pessoa.idade
        tdCpf.innerHTML += pessoa.cpf

        tr.appendChild(tdNome);
        tr.appendChild(tdIdade);
        tr.appendChild(tdCpf);

        table.appendChild(tr);
    }

    resultado.appendChild(table);
}

