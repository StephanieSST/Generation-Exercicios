let palavra1, palavra2, palavra3;
const leia = require('readline-sync');

palavra1 = leia.question("Digite a primeira palavra: ");
palavra2 = leia.question("Digite a segunda palavra: ");
palavra3 = leia.question("Digite a terceira palavra: ");

if(palavra1 === "vertebrado"){

    if(palavra2 === "ave") {
        
        if(palavra3 === "carnivoro"){
            console.log("Águia");
        } else {
            console.log("Pomba");
        }
    } else {


        if(palavra3 === "herbivoro"){
            console.log("Vaca");
            
        } else{
           console.log("Homem");
        }
    }
} else {
    
    if(palavra2 === "inseto"){
        if(palavra3 === "hematofago"){
            console.log("Pulga");
        } else{
            console.log("Lagarta");
        }

        } else{
            if(palavra3 === "hematofago"){
                console.log("Sanguessuga");
            }
             else{
                console.log("Minhoca");
             }
    }
}