// Os laços servem para repetir um código até que certa condição seja reconhecida.

// 4.For..In
// 5.For..of

// 1.For
for(let i = 0; i < 5; i++) {
    console.log('Estou aprendendo!');
} //Definição de variável ; Condição ; Efeito

// 2.While
//Necessário criar variável fora do loop.
let i = 5;

while (i >= 1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

// 3.Do..while
let i = 0;

do {
    console.log('digitando');
    i++;
} while (i < 10)