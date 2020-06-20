const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
const idadeArr = usuarios.map(item => { return item.idade; });
console.log(idadeArr);

//2.2
const eMaior = usuarios.filter(item => { return item.idade >= 18 });
console.log(eMaior);

//2.3
const empresa = usuarios.find(item => { return item === 'Google' });
console.log(empresa);

//2.4
const calculo = usuarios.map(users => ({...users, idade : users.idade * 2})).filter(users => users.idade <= 50)
console.log(calculo);

//usuarios.filter(item => { return item.idade*2<50; });
