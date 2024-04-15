const leia = require("readline-sync");
let somaPrincipal=0, somaSecundaria=0, diagonalPrincipal='', diagonalSecundaria='';

let matrizInteiros = new Array(3);

for (let iLinha = 0; iLinha < matrizInteiros.length; iLinha++){
     matrizInteiros[iLinha] = Array(3);
  
    for (let iColuna = 0; iColuna < matrizInteiros.length; iColuna++){
      
      matrizInteiros[iLinha][iColuna] = leia.questionInt(`Digite o numero do elemento [${iLinha}][${iColuna}]: `);
    
      if(iLinha == iColuna){
        somaPrincipal += matrizInteiros[iLinha][iColuna];
        diagonalPrincipal += `${matrizInteiros[iLinha][iColuna]} `;
      }
      if((iLinha == 0 && iColuna == 2) || (iLinha == 1 && iColuna == 1) || (iLinha == 2 && iColuna == 0)){
        somaSecundaria += matrizInteiros[iLinha][iColuna];
        diagonalSecundaria += `${matrizInteiros[iLinha][iColuna]} `;
      } 
    }
}

console.table(matrizInteiros);

console.log(`\nElementos da Diagonal Principal:\n${diagonalPrincipal}\n\nElementos da Diagonal Secundaria:\n${diagonalSecundaria}\n
Soma dos Elementos da Diagonal Principal:\n${somaPrincipal}\n\nSoma dos Elementos da Diagonal Secundaria:\n${somaSecundaria}`);
