import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import axios from "axios";

export default function Home({ navigation }) {

  const [paises, setPaises] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    buscarPaises();
  }, []);

  async function buscarPaises() {

    try {

      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,languages,currencies,timezones"
      );

      setPaises(response.data);

    } catch (error) {

      console.log(error);

    }

  }

  const paisesFiltrados = paises.filter((item) =>
    item.name.common.toLowerCase().includes(busca.toLowerCase())
  );

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "#f4f6fb",
      }}
    >

      {/* HEADER */}
<View
  style={{
    backgroundColor: '#0d5be1',

    paddingTop: 60,
    paddingBottom: 25,

    paddingHorizontal: 20,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  }}
>

  {/* TOPO */}
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      marginBottom: 25
    }}
  >

    {/* MENU */}
    <TouchableOpacity>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'
        }}

        style={{
          width: 26,
          height: 26,
          tintColor: 'white'
        }}
      />

    </TouchableOpacity>

    {/* TÍTULO */}
    <Text
      style={{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',

        position: 'absolute',

        left: 0,
        right: 0,

        textAlign: 'center'
      }}
    >
      Meu Mundo
    </Text>

    {/* SININHO */}
    <TouchableOpacity>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827392.png'
        }}

        style={{
          width: 24,
          height: 24,
          tintColor: 'white'
        }}
      />

    </TouchableOpacity>

  </View>

  {/* PESQUISA */}
  <View
    style={{
      backgroundColor: 'white',

      borderRadius: 18,

      flexDirection: 'row',
      alignItems: 'center',

      paddingHorizontal: 15,
      paddingVertical: 5
    }}
  >

    <Image
      source={{
        uri: 'https://cdn-icons-png.flaticon.com/512/149/149852.png'
      }}

      style={{
        width: 18,
        height: 18,

        tintColor: '#777',

        marginRight: 10
      }}
    />

    <TextInput

      placeholder="Pesquisar país..."

      placeholderTextColor="#999"

      value={busca}

      onChangeText={setBusca}

      style={{
        flex: 1,
        fontSize: 15,
        color: '#222'
      }}

    />

  </View>

</View>

      
      {/* LISTA */}
      <FlatList

        data={paisesFiltrados}

        keyExtractor={(item) => item.name.common}

        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 100
        }}

        renderItem={({ item }) => (

          <TouchableOpacity

            style={{
              backgroundColor: "white",
              borderRadius: 22,
              padding: 15,
              marginBottom: 15,
              flexDirection: "row",
              alignItems: "center",
              elevation: 5
            }}

            onPress={() =>
              navigation.navigate("Detalhes", {
                pais: item
              })
            }
          >

            <Image

              source={{ uri: item.flags.png }}

              style={{
                width: 70,
                height: 50,

                borderRadius: 10,

                marginRight: 15
              }}

            />

            <View>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#222"
                }}
              >
                {item.name.common}
              </Text>

              <Text
                style={{
                  color: "#666",
                  marginTop: 5
                }}
              >
                Capital: {item.capital?.[0]}
              </Text>

            </View>

          </TouchableOpacity>

        )}

      />

      {/* MENU INFERIOR */}
      <View
        style={{

          position: 'absolute',

          bottom: 0,

          width: '100%',

          height: 75,

          backgroundColor: 'white',

          flexDirection: 'row',

          justifyContent: 'space-around',

          alignItems: 'center',

          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,

          elevation: 10
        }}
      >

        {/* INÍCIO */}
        <TouchableOpacity
          style={{
            alignItems: 'center'
          }}
        >

          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png'
            }}

            style={{
              width: 24,
              height: 24,
              marginBottom: 4,
              tintColor: '#0d5be1'
            }}
          />

          <Text
            style={{
              color: '#0d5be1',
              fontWeight: 'bold'
            }}
          >
            Início
          </Text>

        </TouchableOpacity>

        {/* FAVORITOS */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Favoritos')}
          style={{
            alignItems: 'center'
          }}
        >

          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
            }}

            style={{
              width: 24,
              height: 24,
              marginBottom: 4,
              tintColor: '#777'
            }}
          />

          <Text
            style={{
              color: '#777'
            }}
          >
            Favoritos
          </Text>

        </TouchableOpacity>

        {/* PERFIL */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Perfil')}
          style={{
            alignItems: 'center'
          }}
        >

          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
            }}

            style={{
              width: 24,
              height: 24,
              marginBottom: 4,
              tintColor: '#777'
            }}
          />

          <Text
            style={{
              color: '#777'
            }}
          >
            Perfil
          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}
