import React from "react";

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  nome: semValidacao,
  senha: semValidacao,
});

function semValidacao(dados) {
  return {
    valido: true,
    texto: "",
  };
}

export default ValidacoesCadastro;
