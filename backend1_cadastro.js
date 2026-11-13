function validarCadastro(usuario) {
  if (!usuario || typeof usuario.nome !== "string" ||
      typeof usuario.idade !== "number" || typeof usuario.email !== "string") {
    return "DADOS_INVALIDOS";
  }

  if (usuario.nome.length >= 3 && usuario.idade >= 18 && usuario.email.includes("@")) {
    return "CADASTRO_OK";
  } else {
    return "DADOS_INVALIDOS";
  }
}

function testar(descricao, obtido, esperado) {
  if (obtido === esperado) {
    console.log("✅ " + descricao);
  } else {
    console.log("❌ " + descricao + " | esperado: " + esperado + " | obtido: " + obtido);
  }
}

testar("Teste 1: tudo válido",
  validarCadastro({ nome: "Ana", idade: 25, email: "ana@email.com" }), "CADASTRO_OK");

testar("Teste 2: nome curto (2 letras)",
  validarCadastro({ nome: "Jo", idade: 25, email: "jo@email.com" }), "DADOS_INVALIDOS");

testar("Teste 3: menor de idade (17)",
  validarCadastro({ nome: "Carlos", idade: 17, email: "carlos@email.com" }), "DADOS_INVALIDOS");

testar("Teste 4: e-mail sem @",
  validarCadastro({ nome: "Maria", idade: 30, email: "mariaemail.com" }), "DADOS_INVALIDOS");

testar("Teste 5: limite - nome com exatamente 3 letras",
  validarCadastro({ nome: "Leo", idade: 30, email: "leo@email.com" }), "CADASTRO_OK");

testar("Teste 6: limite - idade exatamente 18",
  validarCadastro({ nome: "Pedro", idade: 18, email: "pedro@email.com" }), "CADASTRO_OK");

testar("Teste 7: todos os campos inválidos",
  validarCadastro({ nome: "A", idade: 10, email: "sem-arroba" }), "DADOS_INVALIDOS");

testar("Teste 8: campo email ausente",
  validarCadastro({ nome: "Bruna", idade: 22 }), "DADOS_INVALIDOS");

testar("Teste 9: objeto vazio",
  validarCadastro({}), "DADOS_INVALIDOS");
