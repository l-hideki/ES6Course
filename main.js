/*  Classes Hoje podem ser utilizadas no JS, Babel traduz no arquivo bundle.js
    class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

HERANÇA
class TodoList extends List { 
    constructor() {
        super();    //SUPER CHAMA O CONSTRUTOR DA CLASSE PAI
        this.usuario = 'Diego';
    }
    mostraUsuario() {
        console.log(this.usuario);
    }

}

const minhaLista = new TodoList();
document.getElementById('novotodo').onclick = function () {
    minhaLista.add('Novo todo');
    minhaLista.mostraUsuario();
}  */

//-----------------------------//

//Metodos static - Não precisam de um "NEW"

/* class TodoList {
    constructor() {
        this.todos = [];
    }

    static addTodo() { //Metodos estáticos não recebem o "THIS" não enxergam o resto da classe
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

TodoList.addTodo();
 */
//Logo isso não funcionaria




//-----------------------------//

//Utilização exemplo:
/* class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2)) */

//-----------------------------//

//OPERAÇÕES EM ARRAY
/* 
const arr = [1,3,4,5,8,9];
const newArr = arr.map((item,index) => { //MAP percorre todo o vetor
    return item + index;
});

const sum  = arr.reduce((total,next)=>{
    return total+next;
});

const filter = arr.filter((item)=>{
    return item % 2 === 0;
})

const find = arr.find((item)=>{
    return item === 4;
})

console.log(sum);
console.log(newArr);
console.log(filter);
console.log(find); */

//-----------------------------//

//Valores padrão para JS
/* const soma = (a=3,b=6)=>a+b;

console.log(soma(1));
console.log(soma()); */

//-----------------------------//

//Desestruturação
/* const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
}

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario); */

//-----------------------------//

//Operadores REST/SPREAD
//REST - PEGA O RESTO DAS PROPRIEDADES
/* 
const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome, ...resto } = usuario

console.log(nome);
console.log(resto);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));
 */


//SPREAD OPERATOR
/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);


const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat',
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };

console.log(usuario2);
 */

//-----------------------------//

//TEMPLATE LITERALS
/* const nome = "Diego";
const idade = 23;

console.log('Meu nome é ' + nome + ' e tenho ' + idade + 'anos'); 
console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
 */

 //-----------------------------//

 //OBJECT SHORT SYNTAX

 const nome ="Diego"
 const idade = 23

 const usuario={
     nome,
     idade,
     empresa:'Rocketseat'
 };

 console.log(usuario);
