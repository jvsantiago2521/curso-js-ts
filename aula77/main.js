function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falaOi = function () {
        console.log(`Oi! Eu sou o(a) ${this.nome} ${this.sobrenome}`);
    }
}

p1 = new Pessoa('João', 'Santiago');
p2 = new Pessoa('Sarah', 'Maria');

console.log(p1.nome, p1.sobrenome);
console.log(p2.nome, p2.sobrenome);

p1.falaOi();
p2.falaOi();