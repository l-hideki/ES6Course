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
//------------------------//
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
//----------------------------//
//Utilização exemplo:

/* class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2)) */
//--------------------------------//
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
"use strict";
