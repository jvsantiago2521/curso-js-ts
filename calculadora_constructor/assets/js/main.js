function Calculadora () {

    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.cliqueBotao();
        this.apertaEnter();
    }

    this.cliqueBotao = () => {
        document.addEventListener('click', (e) => {
            el = e.target;
            if (el.classList.contains('btn-num')) this.numParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.limpaDisplay();
            if (el.classList.contains('btn-del')) this.apagaNum();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        })
    }

    this.apertaEnter = () => {
        this.display.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) this.realizaConta();
        })
    };

    this.numParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    };


    this.limpaDisplay = () => this.display.value = '';
    this.apagaNum = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        let valor = this.display.value;
        
        if(!valor) {
            alert('Conta inválida!');
            return;
        }

        try{
            this.display.value = eval(valor);
        } catch(e){
            alert('Conta inválida!');
            return;
        }
    }

}

const calculadora = new Calculadora();
calculadora.inicia();














// function Calculadora () {
//     this.display = document.querySelector('.display');

//     this.inicia = function () {
//         this.cliqueBotoes();
//         this.pressionaEnter();
//     };

//     this.cliqueBotoes = function () {
//         document.addEventListener ('click', e => {
//             const el = e.target;
    
//             if (el.classList.contains('btn-num')){
//                 this.btnParaDisplay(el.innerText);
//             }

//             if (el.classList.contains('btn-clear')){
//                 this.clearDisplay();
//             }

//             if (el.classList.contains('btn-del')){
//                 this.apagaUm();
//             }

//             if (el.classList.contains('btn-eq')){
//                 this.realizaConta();
//             }
//         });
//     };

//     this.realizaConta = function (){
//         let conta = this.display.value;

//         try {
//             conta = eval(conta);

//             if(!conta){
//                 alert('Conta inválida!');
//                 return;
//             }

//             this.display.value = String(conta);
//         } catch(e) {
//             alert('Conta inválida');
//             return;
//         } 
//     };

//     this.pressionaEnter = function () {
//         this.display.addEventListener('keypress', e => {
//             if (e.keyCode === 13) {
//                 this.realizaConta();
//             }
//         });
//     };

//     this.apagaUm = () => {
//         this.display.value = this.display.value.slice(0, -1);
//     };

//     this.clearDisplay = function () {
//         this.display.value = '';
//     };

//     this.btnParaDisplay = function (valor) {
//         this.display.value += valor;
//     };

// }

// const calculadora = new Calculadora();
// calculadora.inicia();