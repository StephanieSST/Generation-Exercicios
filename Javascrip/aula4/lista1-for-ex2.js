const leia = require('readline-sync');
let num, par=0, impar=0;

for(let cont = 1; cont <= 10; cont++){
    num = leia.questionInt(`Digite o ${cont}º numero: `)

    if(num % 2 == 0){
        par++;
    } else {
        impar++;
    }
}

console.log(`\nTotal de numeros pares: ${par}\nTotal de numeros impares: ${impar}`);