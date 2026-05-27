import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  function cadastrar() {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        alert("Usuário cadastrado!");

        navigation.navigate("Login");
      })

      .catch((error) => {
        console.log(error);

        alert("senha deve conter no mínimo 6 caracteres");
      });
  }

  return (
    <View style={styles.container}>

      
      <Text style={styles.title}>Criar Conta</Text>

       <TextInput
        style={styles.input}
        placeholder="Digite o nome completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o email"
        value={email}
        onChangeText={setEmail}
      />


      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      

      <TouchableOpacity style={styles.botao} onPress={cadastrar}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>ja tem conta? fazer login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },

  botao: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
  },

  link: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
  },
});
