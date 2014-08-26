
var Pessoa = function(nome){
    this.nome = nome;
};

Pessoa('Judzhin Miles');

var pessoa = new Pessoa('Eminem');

console.log('Static 1:');
console.dir(Pessoa);
console.log('Variab 1:');
console.dir(pessoa);

Pessoa.prototype = {
    nome: 'Arnold',
    idade: 30
};

var pessoa2 = new Pessoa('Zaedy');

console.log('Static 2:');
console.dir(Pessoa);
console.log('Variab 2.1:');
console.dir(pessoa);
console.log('Variab 2.2:');
console.dir(pessoa2);

Pessoa.prototype.nome = 'John';

delete pessoa2.nome;

console.log('Variad 3:');
console.dir(pessoa2);