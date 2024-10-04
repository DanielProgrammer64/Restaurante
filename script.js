// documentação:
// https://danielcodingspace.notion.site/Documenta-o-sistema-de-sugest-es-restaurante-1-Commit-115a2a173c1d8049a209e2586c8cc5c8

let nome, vegetariano, dieta;

nome = prompt("Insira o seu nome");
vegetariano = parseInt(
  prompt("Você é vegetariano? \nDigite 1 para sim \nDigite 2 para não")
);
dieta = parseInt(
  prompt("Você está de dieta? \nDigite 1 para sim \nDigite 2 para não")
);
console.info("-------------------");

if (vegetariano == 1 && dieta == 1) {
  console.info("Cliente: ", nome);
  console.info("Sugestão de prato: Salada");
} else if (vegetariano == 2 && dieta == 1) {
  console.info("Cliente:", nome);
  console.info("Sugestão de prato: Frango grelhado");
} else if (vegetariano == 1 && dieta == 2) {
  console.info("Cliente: ", nome);
  console.info("Sugestão de prato: Macarrão");
} else if (vegetariano == 2 && dieta == 2) {
  console.info("Cliente: ", nome);
  console.info("Sugestão de prato: Feijoada");
}

let formaDePagamento = parseInt(
  prompt("Insira a sua forma de pagamento: \n1 para dinheiro \n2 para cartão")
);

switch (formaDePagamento) {
  case 1:
    console.info("Você tem direito a 15% de desconto");
    break;
  default:
    console.info("Entrada inválida");
    break;
}
