import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

export default function AlterarFoto({ navigation }) {

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

          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,

          alignItems: 'center'
        }}
      >

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 20,
            top: 62
          }}
        >

          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold'
            }}
          >
            ←
          </Text>

        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold'
          }}
        >
          Alterar Foto
        </Text>

      </View>

      {/* CARD */}
      <View
        style={{
          backgroundColor: 'white',

          margin: 20,
          marginTop: 30,

          borderRadius: 30,

          padding: 30,

          alignItems: 'center',

          elevation: 6
        }}
      >

        {/* FOTO */}
        <View
          style={{
            position: 'relative',
            marginBottom: 25
          }}
        >

          <Image

            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            }}

            style={{
              width: 140,
              height: 140,

              borderRadius: 100
            }}

          />

          {/* ÍCONE CAMERA */}
          <View
            style={{
              position: 'absolute',

              right: 0,
              bottom: 0,

              backgroundColor: '#0d5be1',

              width: 42,
              height: 42,

              borderRadius: 100,

              justifyContent: 'center',
              alignItems: 'center',

              borderWidth: 4,
              borderColor: 'white'
            }}
          >

            <Text
              style={{
                color: 'white',
                fontSize: 18
              }}
            >
              📷
            </Text>

          </View>

        </View>

        {/* TEXOS */}
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',

            color: '#222',

            marginBottom: 10
          }}
        >
          Escolha uma imagem
        </Text>

        <Text
          style={{
            color: '#777',
            textAlign: 'center',

            marginBottom: 35
          }}
        >
          Sua foto será enviada para o aplicativo
        </Text>

        {/* BOTÃO GALERIA */}
        <TouchableOpacity

  style={{
    width: '100%',

    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: '#ddd',

    padding: 18,

    borderRadius: 18,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 18
  }}

>

  <Image
    source={{
      uri: 'https://cdn-icons-png.flaticon.com/512/685/685655.png'
    }}

    style={{
      width: 20,
      height: 20,
      marginRight: 10,
      tintColor: '#0d5be1'
    }}
  />

  <Text
    style={{
      color: '#0d5be1',
      fontSize: 16,
      fontWeight: 'bold'
    }}
  >
    Escolher da Galeria
  </Text>

</TouchableOpacity>

        {/* BOTÃO CÂMERA */}
        <TouchableOpacity

  style={{
    width: '100%',

    backgroundColor: '#0d5be1',

    padding: 18,

    borderRadius: 18,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }}

>

  <Image
    source={{
      uri: 'https://cdn-icons-png.flaticon.com/512/685/685655.png'
    }}

    style={{
      width: 20,
      height: 20,
      marginRight: 10,
      tintColor: 'white'
    }}
  />

  <Text
    style={{
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    }}
  >
    Tirar Foto
  </Text>

</TouchableOpacity>

      </View>

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
        tintColor: '#0d5be1'
      }}
    />

    <Text
      style={{
        color: '#0d5be1',
        fontWeight: 'bold'
      }}
    >
      Perfil
    </Text>

  </TouchableOpacity>

</View>

    </View>

  );

}