// Factory Function
function criaPessoa (nome, sobrenome) {
    return {

        nome, 

        sobrenome,

        //Getter, a função é tratada como objeto
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        }

    };
}

const p1 = criaPessoa('João','Santiago')

console.log(p1.nomeCompleto)

p1.nomeCompleto = 'Sarah Maria';

console.log(p1.nomeCompleto)