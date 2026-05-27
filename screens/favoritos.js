import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';

import {
  getAuth
} from 'firebase/auth';

import { db } from '../firebaseConfig';

export default function Favoritos({ navigation }) {

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    buscarFavoritos();
  }, []);

  async function buscarFavoritos() {

    try {

      const auth = getAuth();

      const user = auth.currentUser;

      const querySnapshot = await getDocs(
        collection(db, 'favoritos')
      );

      let lista = [];

      querySnapshot.forEach((documento) => {

        const dados = documento.data();

        if (dados.uid === user.uid) {

          lista.push({
            id: documento.id,
            ...dados
          });

        }

      });

      setFavoritos(lista);

    } catch (error) {

      console.log(error);

    }

  }

  async function removerFavorito(id) {

    try {

      await deleteDoc(
        doc(db, 'favoritos', id)
      );

      buscarFavoritos();

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

      {/* HEADER */}
      <View
        style={{
          backgroundColor: '#0d5be1',

          paddingTop: 60,
          paddingBottom: 35,

          paddingHorizontal: 20,

          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >

        {/* TOPO */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
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
              fontWeight: 'bold'
            }}
          >
            Favoritos
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

      </View>

      {/* LISTA */}
      <FlatList

        data={favoritos}

        keyExtractor={(item) => item.id}

        contentContainerStyle={{
          padding: 15,
          paddingBottom: 120
        }}

        renderItem={({ item }) => (

          <View
            style={{
              backgroundColor: 'white',

              borderRadius: 22,

              padding: 15,

              marginBottom: 15,

              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',

              elevation: 5
            }}
          >

            {/* ESQUERDA */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1
              }}
            >

              <Image

                source={{ uri: item.bandeira }}

                style={{
                  width: 70,
                  height: 50,

                  borderRadius: 10,

                  marginRight: 15
                }}

              />

              <View
                style={{
                  flex: 1
                }}
              >

                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#222'
                  }}
                >
                  {item.nome}
                </Text>

                <Text
                  style={{
                    color: '#666',
                    marginTop: 5
                  }}
                >
                  Capital: {item.capital}
                </Text>

              </View>

            </View>

            {/* BOTÃO REMOVER */}
            <TouchableOpacity

              onPress={() =>
                removerFavorito(item.id)
              }

              style={{
                backgroundColor: '#ff5b5b',

                width: 42,
                height: 42,

                borderRadius: 14,

                justifyContent: 'center',
                alignItems: 'center'
              }}
            >

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                }}

                style={{
                  width: 18,
                  height: 18,
                  tintColor: 'white'
                }}
              />

            </TouchableOpacity>

          </View>

        )}

        ListEmptyComponent={() => (

          <View
            style={{
              alignItems: 'center',
              marginTop: 80
            }}
          >

            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/833/833472.png'
              }}

              style={{
                width: 80,
                height: 80,
                tintColor: '#c7c7c7',
                marginBottom: 20
              }}
            />

            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#555'
              }}
            >
              Nenhum favorito ainda
            </Text>

            <Text
              style={{
                color: '#888',
                marginTop: 8
              }}
            >
              Adicione países aos favoritos
            </Text>

          </View>

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

        {/* HOME */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
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
              tintColor: '#777'
            }}
          />

          <Text
            style={{
              color: '#777'
            }}
          >
            Início
          </Text>

        </TouchableOpacity>

        {/* FAVORITOS */}
        <TouchableOpacity
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
              tintColor: '#0d5be1'
            }}
          />

          <Text
            style={{
              color: '#0d5be1',
              fontWeight: 'bold'
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
