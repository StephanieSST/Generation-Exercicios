let codigo, produto, valor, qtd;
const leia = require('readline-sync');

codigo = leia.questionInt("Digite o codigo do produto que deseja:\n1 - Cachorro Quente\n2 - X-Salada\n3 - X-Bacon\n4 - Refrigerante\n5 - Suco de laranja\n");
qtd = leia.questionInt("Quantidade: ");

switch(codigo){
    case 1:
        produto = "Cachorro Quente";
        valor = 10;
        break;

        case 2:
            produto = "X-Salada";
            valor = 15;
            break;

            case 3:
                produto = "X-Bacon";
                valor = 18;
                break;

                case 4:
                    produto = "Bauru";
                    valor = 12;
                    break;

                case 5: 
                produto = "Refrigerante";
                valor = 8;
                break;

                case 6:
                    produto = "Suco de laranja";
                    valor = 13;
                    break;

}

console.log(`Produto: ${produto}\nValor Total: R$ ${valor * qtd},00`)