import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import "./firebaseConfig";

import Login from "./screens/login";
import Cadastro from "./screens/cadastro";
import Home from "./screens/home";
import Detalhes from "./screens/detalhes";
import Perfil from "./screens/perfil";
import Favoritos from "./screens/favoritos";
import AlterarFoto from "./screens/alterarFoto";

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />

        <Stack.Screen
          name="Home"
          component={Home}
        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
        />

        <Stack.Screen
          name="Perfil"
          component={Perfil}
        />

        <Stack.Screen
          name="Favoritos"
          component={Favoritos}
        />

        <Stack.Screen
          name="AlterarFoto"
          component={AlterarFoto}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );

}
