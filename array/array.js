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

const cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);

cities.push('Bradford', 'Brighton');
console.log(cities);

// Para remover o último item da array, utiliza-se .pop(). Este método retorna o valor removido. Para remover o primeiro, usa-se shift().

const cities = ['Manchester', 'Liverpool'];
const removedCity = cities.pop();
console.log(removedCity);

const cities = ['Manchester', 'Liverpool'];
cities.shift();
console.log(cities); 

// Para remover um item posicionado no meio é possível utilizar o método .splice(), colocando como parâmetro o índice do valor e o número de elementos a serem retirados da array.

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]