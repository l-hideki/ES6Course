"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2)); //
