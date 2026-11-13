function contarPorCategoria(produtos, categoria) {
  let contador = 0;

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].categoria === categoria) {
      contador++;
    }
  }

  return contador;
}

function testar(descricao, obtido, esperado) {
  if (obtido === esperado) {
    console.log("✅ " + descricao);
  } else {
    console.log("❌ " + descricao + " | esperado: " + esperado + " | obtido: " + obtido);
  }
}

const estoque = [
  { nome: "TV", categoria: "eletronicos" },
  { nome: "Camiseta", categoria: "roupas" },
  { nome: "Notebook", categoria: "eletronicos" },
  { nome: "Tênis", categoria: "roupas" },
  { nome: "Fone", categoria: "eletronicos" }
];

testar("Teste 1: 3 eletrônicos no estoque",
  contarPorCategoria(estoque, "eletronicos"), 3);

testar("Teste 2: 2 roupas no estoque",
  contarPorCategoria(estoque, "roupas"), 2);

testar("Teste 3: categoria que não existe -> 0",
  contarPorCategoria(estoque, "livros"), 0);

testar("Teste 4: estoque vazio -> 0",
  contarPorCategoria([], "eletronicos"), 0);

testar("Teste 5: todos os itens da mesma categoria",
  contarPorCategoria([{ nome: "A", categoria: "x" }, { nome: "B", categoria: "x" }], "x"), 2);

testar("Teste 6: busca diferencia maiúsculas/minúsculas ('Eletronicos' -> 0)",
  contarPorCategoria(estoque, "Eletronicos"), 0);
