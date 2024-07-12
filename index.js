//
// 1. Dado um array de números inteiros, crie uma função que retorne um novo array contendo apenas os números pares. Utilize o método filter.
//
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function pares(param) {
    var toReturn;
    toReturn = param.filter(item  => item%2 === 0)
    return toReturn;
  }
console.log(pares(array1));

//
// 2. Crie uma função que receba um array de números e retorne o maior número presente no array
//
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function maiorNumero(param) {
  var toReturn;
  
  var maior = param[0]
  for (var i = 1; i < param.length; i++) {
    if (param[i] > maior) {
      maior = param[i]
    }
  }
  toReturn = maior;

  return toReturn;
}
console.log(maiorNumero(array2));

//
// 3. Crie uma função que receba um array de pessoas e retorne o primeiro objeto com idade maior ou igual a 40
//
var pessoas = [
  {
    nome: "joao",
    idade: 20,
  },
  {
    nome: "jose",
    idade: 30,
  },
  {
    nome: "maria",
    idade: 40,
  },
];

function maiorIdade(param) {
  var toReturn;
  toReturn = param.find(pessoa => pessoa.idade >= 40)
  return toReturn;
}
console.log(maiorIdade(pessoas));

//
// 4. Crie uma função que receba um array de alunos e retorne o apenas os alunos aprovados (nota maior ou igual a 7)
//
var alunos = [
  {
    nome: "Aluno 1",
    nota: 10,
  },
  {
    nome: "Aluno 2",
    nota: 6,
  },
  {
    nome: "Aluno 3",
    nota: 7,
  },
];

function alunosAprovados(param) {
  
  return param.filter(aluno=>aluno.nota >=7).sort((a,b)=>a.nota-b.nota);
}
console.log(alunosAprovados(alunos));

//
// 5. Crie uma função que receba um array de numeros e retorne um array com todos os numeros multiplicados por 5
//
var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicaPor5(param) {
  var toReturn;
  toReturn = param.map(dd => dd * 5)
  return toReturn;
}
console.log(multiplicaPor5(array3));

//
// 5. Crie uma função que receba um array de numeros e retorne um array contendo apenas os números multiplicados por 5 e retorna apenas os que forem pares.
//
var array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function multiplicaPor5EapenasPares(param) {
  var toReturn;
  // Faça seu código aqui.
  // Faça seu código aqui.
  // Faça seu código aqui.
  return toReturn;
}
console.log(multiplicaPor5EapenasPares(array4));
