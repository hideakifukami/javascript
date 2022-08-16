/*
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);

const output = 'I like the song. \nI gave it a score of 90%.';
console.log(output);
*/

// Objeto Number() converte para number.
// Método .toString() converte para string.

// Strings admitem uma grande possibilidade de parâmetros para manipular seus elementos. Um deles é o .lengh que retorna a quantidade de caracteres de uma string.

const browserType = 'mozilla';
console.log(browserType.length);

// É possível selecionar um elemento específico da string ao utilizar [] após a variável, incluindo a posição do elemento, inciando em 0. Para selecionar o último elemento é possível usar como valor de posição o parâmentro .length-1

console.log(browserType[0]);
console.log(browserType[browserType.length-1]);

// O método .include() permite verificar se dentro de uma string contém uma substring.

if (browserType.includes('zilla')) {
    console.log('Found zilla!');
} else {
    console.log('No zilla here!');
}

// Para verificar se uma string inicia ou finaliza com certa substring é possível utilizar os métodos starsWith() e endsWith().

if (browserType.startsWith('zilla')) {
    console.log('Found zilla!');
} else {
    console.log('No zilla here!');
}

if (browserType.endsWith('zilla')) {
    console.log('Found zilla!');
} else {
    console.log('No zilla here!');
}

// O método indexOf() permite encontrar a posição de uma substring, recebendo dois parâmetros, o primeiro sendo a substring procurada e o segundo a partir de qual posição fazer a procura. Caso a substring não esteja presente, retorna -1.

const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers'));

const firstOccurrence = tagline.indexOf('developers');
const secondOccurrence = tagline.indexOf('developers', firstOccurrence + 1);

console.log(firstOccurrence);
console.log(secondOccurrence); 

// O método .slice() recorta uma parte da string, tendo como parâmetro o index inicial e final do recorte, sendo o index final exclusivo.

console.log(browserType.slice(0, 4));

// The string methods toLowerCase() and toUpperCase() take a string and convert all the characters to lower- or uppercase, respectively.

const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// Podemos substituir uma substring utilizando o método .replace(), onde recebe o que será substituido e pelo que será. Isto trocará apenas a primeira ocorrência, para todas usar o método .replaceAll()

const updated = browserType.replace('moz','van');
console.log(updated);