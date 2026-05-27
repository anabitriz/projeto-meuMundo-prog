import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image
} from 'react-native';

import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function logar() {

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, senha)

      .then((userCredential) => {

        navigation.navigate("Home");

      })

      .catch((error) => {

        console.log(error);

        alert("Senha ou email incorretos!");

      });

  }

  return (

    <View style={styles.container}>

      <Image
        style={styles.img}
        source={{
          uri: 'https://images.vexels.com/media/users/3/157971/isolated/preview/393140c13ded6abdd322098d2d02a6d7-ilustracao-do-planeta-terra.png',
        }}
      />


      <Text style={styles.title}>
        Conheça o Mundo
      </Text>

      <Text style={styles.subtitle}>
        Explore. Descubra. Viaje.
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Digite o email'
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder='Digite a senha'
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={logar}
      >

        <Text style={styles.textoBotao}>
          Entrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Cadastro")}
      >

        <Text style={styles.link}> Não possui conta? 
          <text style={styles.link2}>
           Cadastre-se
          </text>
        </Text>

      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#abdcf8'
  },

  img: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30
  },

  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#1300c0',
    fontFamily: ''
  },

  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#3f3f3f',

  },

  input: {
    borderWidth: 2,
    color: '#020202',
    marginBottom: 20,
    padding: 10,
    borderRadius: 15,
    borderColor: '#c4c4c4',
    backgroundColor: "white"
  },

  botao: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 15,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontSize: 20
  },

  link: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black'
  },

  link2: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue'
  }

});
