const inputTarefa = document.querySelector('.input-tarefa');
const botaoAdicionar = document.querySelector('.botao-adicionar');
const listaTarefas = document.querySelector('.lista-tarefas');

function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' '
    const button = document.createElement('button');
    button.setAttribute('class', 'apagar');
    button.innerHTML = 'Apagar tarefa'
    li.appendChild(button);
};

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }

});

function salvarTarefas() {
    const liTarefas = listaTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText.replace('Apagar tarefa', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        adicionaTarefa(inputTarefa.value);
    }
});

function criaLi() {
    return document.createElement('li')
};

function adicionaTarefa(textoInput) {
    if (textoInput.replace(/\s/g, '') !== '') {
        const li = criaLi()
        li.innerHTML = textoInput
        listaTarefas.appendChild(li)
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }
    
};

botaoAdicionar.addEventListener('click', function () {
    adicionaTarefa(inputTarefa.value);
});

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        adicionaTarefa(tarefa);
    }
}

adicionaTarefasSalvas()