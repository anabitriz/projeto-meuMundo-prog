import React from 'react';

import {
  View,
 Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import {
  addDoc,
  collection
} from 'firebase/firestore';

import {
  getAuth
} from 'firebase/auth';

import { db } from '../firebaseConfig';

export default function Detalhes({ route, navigation }) {

  const { pais } = route.params;

  async function favoritar() {

    try {

      const auth = getAuth();

      const user = auth.currentUser;

      await addDoc(
        collection(db, 'favoritos'),
        {
          uid: user.uid,
          nome: pais.name.common,
          capital: pais.capital?.[0],
          bandeira: pais.flags.png
        }
      );

      alert('País favoritado!');

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: '#f4f6fb'
      }}
    >

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40
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
            borderBottomRightRadius: 30,
          }}
        >

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >

            {/* VOLTAR */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png'
                }}

                style={{
                  width: 24,
                  height: 24,
                  tintColor: 'white'
                }}
              />

            </TouchableOpacity>

            {/* TÍTULO */}
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 'bold'
              }}
            >
              Detalhes do País
            </Text>

            {/* FAVORITO */}
            <TouchableOpacity>

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
                }}

                style={{
                  width: 24,
                  height: 24,
                  tintColor: 'white'
                }}
              />

            </TouchableOpacity>

          </View>

        </View>

        {/* CARD */}
        <View
          style={{
            backgroundColor: 'white',

            margin: 18,
            marginTop: -10,

            borderRadius: 28,

            overflow: 'hidden',

            elevation: 5
          }}
        >

          {/* IMAGEM PAÍS */}
          <Image

            source={{
              uri: pais.flags.png
            }}

            style={{
              width: '100%',
              height: 230
            }}

            resizeMode="cover"

          />

          {/* CONTEÚDO */}
          <View
            style={{
              padding: 22
            }}
          >

            {/* BANDEIRA PEQUENA */}
            <Image

              source={{
                uri: pais.flags.png
              }}

              style={{
                width: 70,
                height: 50,

                borderRadius: 12,

                marginTop: -55,

                borderWidth: 4,
                borderColor: 'white',

                marginBottom: 18
              }}

            />

            {/* NOME */}
            <Text
              style={{
                fontSize: 34,
                fontWeight: 'bold',
                color: '#111'
              }}
            >
              {pais.name.common}
            </Text>

            {/* NOME OFICIAL */}
            <Text
              style={{
                color: '#777',
                fontSize: 16,

                marginTop: 5,
                marginBottom: 30
              }}
            >
              {pais.name.official}
            </Text>

            {/* INFO */}
            {[
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/535/535137.png',
                titulo: 'Capital',
                valor: pais.capital?.[0]
              },

              {
                icon: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
                titulo: 'População',
                valor: pais.population?.toLocaleString()
              },

              {
                icon: 'https://cdn-icons-png.flaticon.com/512/3898/3898082.png',
                titulo: 'Idioma',
                valor: pais.languages
                  ? Object.values(pais.languages).join(', ')
                  : 'Não informado'
              },

              {
                icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png',
                titulo: 'Moeda',
                valor: pais.currencies
                  ? Object.values(pais.currencies)
                      .map(item => `${item.name}`)
                      .join(', ')
                  : 'Não informado'
              },

              {
                icon: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                titulo: 'Região',
                valor: pais.region
              },

              {
                icon: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
                titulo: 'Sub-região',
                valor: pais.subregion || 'Não informado'
              },

              {
                icon: 'https://cdn-icons-png.flaticon.com/512/854/854866.png',
                titulo: 'Continente',
                valor: pais.continents?.[0] || 'Não informado'
              },

              {
                icon: 'https://cdn-icons-png.flaticon.com/512/2972/2972531.png',
                titulo: 'Fuso horário',
                valor: pais.timezones?.[0]
              }
            ].map((item, index) => (

              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',

                  justifyContent: 'space-between',

                  marginBottom: 24
                }}
              >

                {/* ESQUERDA */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >

                  <Image
                    source={{
                      uri: item.icon
                    }}

                    style={{
                      width: 22,
                      height: 22,

                      tintColor: '#777',

                      marginRight: 14
                    }}
                  />

                  <Text
                    style={{
                      fontSize: 18,
                      color: '#222'
                    }}
                  >
                    {item.titulo}
                  </Text>

                </View>

                {/* DIREITA */}
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '600',
                    color: '#222',

                    maxWidth: '50%',
                    textAlign: 'right'
                  }}
                >
                  {item.valor}
                </Text>

              </View>

            ))}

            {/* BOTÃO */}
            <TouchableOpacity

              onPress={favoritar}

              style={{
                backgroundColor: '#0d5be1',

                padding: 18,

                borderRadius: 18,

                marginTop: 10,

                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
                }}

                style={{
                  width: 20,
                  height: 20,

                  tintColor: 'white',

                  marginRight: 10
                }}
              />

              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontWeight: 'bold'
                }}
              >
                Adicionar aos Favoritos
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

    </View>

  );

}
