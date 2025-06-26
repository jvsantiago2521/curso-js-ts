//Declaração de função
falaOi();
function falaOi() {
    console.log('Oi')
}
falaOi();

//First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function () {
    console.log('Sou um dado!');
};
souUmDado();

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

//Dentro do objeto
const obj = {

    falar: function () {
        console.log('Estou falando...');
    },

    latir() {
        console.log('AU AU...');
    }
};
obj.falar();
obj.latir();