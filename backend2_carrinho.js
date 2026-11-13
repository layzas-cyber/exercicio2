
function calcularCarrinho(precos) {
  let total = 0;
  for (let i = 0; i < precos.length; i++) {
    total = total + precos[i];
  }
  if (total > 100) {
    total = total * 0.9;
  }
  return Math.round(total * 100) / 100;
}

function testar(descricao, obtido, esperado) {
  if (obtido === esperado) {
    console.log("✅ " + descricao);
  } else {
    console.log("❌ " + descricao + " | esperado: " + esperado + " | obtido: " + obtido);
  }
}

testar("Teste 1: [30, 50, 40] = 120 -> com desconto = 108",
  calcularCarrinho([30, 50, 40]), 108);

testar("Teste 2: [20, 30] = 50 -> sem desconto",
  calcularCarrinho([20, 30]), 50);

testar("Teste 3: limite - total exatamente 100 -> sem desconto",
  calcularCarrinho([50, 50]), 100);

testar("Teste 4: limite - total 101 -> com desconto = 90.9",
  calcularCarrinho([60, 41]), 90.9);

testar("Teste 5: carrinho vazio -> 0",
  calcularCarrinho([]), 0);

testar("Teste 6: um único item caro [250] -> 225",
  calcularCarrinho([250]), 225);

testar("Teste 7: preços com centavos [19.99, 80.02] = 100.01 -> 90.01",
  calcularCarrinho([19.99, 80.02]), 90.01);
