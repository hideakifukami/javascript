// Arrays são utilizadas para definir variáveis com multiplos valores, podendo assim manipular cada componente da variável.

const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

// Da mesma forma que é possível encontrar quantos caracteres tem uma string com a propriedade length, podemos descobrir quantos elementos há em uma array.

console.log(shopping.length);

// Da mesma forma que você acessa uma letra específica de uma string, é possível acessar um valor específico de uma array, definindo sua index position com [].

console.log(shopping[0]);

// É possível substituir um valor da array ao dar a array com index position correta um novo valor.

shopping[0] = 'tahini';
console.log(shopping);

// Arrays dentro de arrays são chamadas de multidimensional array, e para selecionar um elemento dessa lista filha é preciso colocar dois valores de index. 

const random = ['tree', 795, [0, 1, 2]];
console.log(random[2][2]);

// Para localizar o posicionamento de um item em uma array é preciso utilizar do método indexOf(), que retorna a posição ou -1 para não encontrado.

const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));
console.log(birds.indexOf('Rabbit'));

// É possível adiciconar itens ao final da array ao utilizar .push()  e no começo ao usar .unshift().

let cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);

cities.push('Bradford', 'Brighton');
console.log(cities);

// Para remover o último item da array, utiliza-se .pop(). Este método retorna o valor removido. Para remover o primeiro, usa-se shift().

const removedCity = cities.pop();
console.log(removedCity);

cities.shift();
console.log(cities); 

// Para remover um item posicionado no meio é possível utilizar o método .splice(), colocando como parâmetro o índice do valor e o número de elementos a serem retirados da array.

const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]

// As vezes será necessário acessar todos os itens de uma array, para isso usa-se a declaração for...of:

for (const bird of birds) {
  console.log(bird); {}
}

// Quando for necessário submeter todos os itens de uma array a uma função, é possivel utilizar .map(), retornando os novos valores em uma nova array.

function double(number) {
  return number * 2;
}
let numbers = [5, 2, 7, 6];
let doubled = numbers.map(double);
console.log(doubled);

// Para filtrar itens de uma array que cumprem determinado requisíto e colocá-los em uma nova array, usa-se filter(), também chamando uma função, caso retorne verdadeiro, adiciona-se à nova array.

function isLong(city) {
  return city.length > 8;
}
cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
let longer = cities.filter(isLong);
console.log(longer);

// É possível fazer a conversão de strings para arrays e vice versa. Para isso, usa-se os métodos split(), definindo qual elemento faz a marcação da separação dos itens que irão compor a array. O método join() para fazer o oposto, transformando uma array em string, definindo o elemento a ser usado para a separação dos itens. Assim como join, também é possível usar o método toString(), mas limita a separação dos elementos à vírgula.

let data = 'Mancherster,London,Liverpool,Birmingham,Leeds,Carlisle';
cities = data.split(',');
console.log(cities);

let commaSeparated = cities.join(',');
console.log(commaSeparated);

let dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
let dogString = dogNames.toString();
console.log(dogString);