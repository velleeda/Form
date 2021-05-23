import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./Components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import ValidacoesCadastro from "./Components/Contexts/ValidacoesCadastro";
import { validarCPF, validarSenha } from "./models/cadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro onSubmit={onSubmitForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function onSubmitForm(dados) {
  console.log(dados);
}

export default App;
