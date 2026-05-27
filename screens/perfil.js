import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import {
  getAuth,
  updatePassword,
  signOut
} from 'firebase/auth';

export default function Perfil({ navigation }) {

  const [novaSenha, setNovaSenha] = useState('');

  const auth = getAuth();

  const user = auth.currentUser;

  async function alterarSenha() {

    try {

      await updatePassword(user, novaSenha);

      alert('Senha alterada com sucesso!');

      setNovaSenha('');

    } catch (error) {

      console.log(error);

      alert(error.message);

    }

  }

  async function sair() {

    try {

      await signOut(auth);

      navigation.navigate('Login');

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
          paddingBottom: 120
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
              Meu Perfil
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

        {/* CARD PERFIL */}
        <View
          style={{
            backgroundColor: 'white',

            margin: 20,
            marginTop: -20,

            borderRadius: 30,

            padding: 25,

            elevation: 6,

            alignItems: 'center'
          }}
        >

          {/* FOTO */}
          <View
            style={{
              position: 'relative'
            }}
          >

            <Image

              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
              }}

              style={{
                width: 120,
                height: 120,

                borderRadius: 100
              }}

            />

            {/* BOTÃO FOTO */}
            <TouchableOpacity

              onPress={() =>
                navigation.navigate('AlterarFoto')
              }

              style={{
                position: 'absolute',

                right: 0,
                bottom: 0,

                backgroundColor: '#0d5be1',

                width: 38,
                height: 38,

                borderRadius: 100,

                justifyContent: 'center',
                alignItems: 'center',

                borderWidth: 3,
                borderColor: 'white'
              }}

            >

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/685/685655.png'
                }}

                style={{
                  width: 18,
                  height: 18,
                  tintColor: 'white'
                }}
              />

            </TouchableOpacity>

          </View>

          {/* NOME */}
          <Text
            style={{
              fontSize: 26,
              fontWeight: 'bold',

              marginTop: 18,

              color: '#222'
            }}
          >
            Usuário
          </Text>

          {/* EMAIL */}
          <Text
            style={{
              color: '#777',
              fontSize: 15,

              marginTop: 5
            }}
          >
            {user?.email}
          </Text>

          {/* ESTATÍSTICAS */}
          <View
            style={{
              flexDirection: 'row',

              marginTop: 30,

              justifyContent: 'space-between',

              width: '100%'
            }}
          >

            <View
              style={{
                backgroundColor: '#f7f8fc',

                width: '31%',

                borderRadius: 18,

                padding: 18,

                alignItems: 'center'
              }}
            >

              <Text
                style={{
                  color: '#666',
                  marginBottom: 5
                }}
              >
                Favoritos
              </Text>

              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold'
                }}
              >
                12
              </Text>

            </View>

            <View
              style={{
                backgroundColor: '#f7f8fc',

                width: '31%',

                borderRadius: 18,

                padding: 18,

                alignItems: 'center'
              }}
            >

              <Text
                style={{
                  color: '#666',
                  marginBottom: 5
                }}
              >
                Visitados
              </Text>

              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold'
                }}
              >
                5
              </Text>

            </View>

            <View
              style={{
                backgroundColor: '#f7f8fc',

                width: '31%',

                borderRadius: 18,

                padding: 18,

                alignItems: 'center'
              }}
            >

              <Text
                style={{
                  color: '#666',
                  marginBottom: 5
                }}
              >
                Reviews
              </Text>

              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold'
                }}
              >
                8
              </Text>

            </View>

          </View>

          {/* BOTÕES */}
          <View
            style={{
              width: '100%',
              marginTop: 30
            }}
          >

            {/* EDITAR */}
            <TouchableOpacity

              style={{
                backgroundColor: '#f7f8fc',

                padding: 18,

                borderRadius: 18,

                marginBottom: 14,

                flexDirection: 'row',
                alignItems: 'center'
              }}

            >

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1159/1159633.png'
                }}

                style={{
                  width: 20,
                  height: 20,
                  marginRight: 12
                }}
              />

              <Text
                style={{
                  fontSize: 16,
                  color: '#222'
                }}
              >
                Editar Perfil
              </Text>

            </TouchableOpacity>

            {/* ALTERAR FOTO */}
            <TouchableOpacity

              onPress={() =>
                navigation.navigate('AlterarFoto')
              }

              style={{
                backgroundColor: '#f7f8fc',

                padding: 18,

                borderRadius: 18,

                marginBottom: 14,

                flexDirection: 'row',
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
                  marginRight: 12
                }}
              />

              <Text
                style={{
                  fontSize: 16,
                  color: '#222'
                }}
              >
                Alterar Foto
              </Text>

            </TouchableOpacity>

            {/* ALTERAR SENHA */}
            <View
              style={{
                backgroundColor: '#f7f8fc',

                padding: 18,

                borderRadius: 18,

                marginBottom: 14
              }}
            >

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10
                }}
              >

                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3064/3064155.png'
                  }}

                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10
                  }}
                />

                <Text
                  style={{
                    color: '#555'
                  }}
                >
                  Nova Senha
                </Text>

              </View>

              <TextInput

                placeholder="Digite a nova senha"

                secureTextEntry

                value={novaSenha}

                onChangeText={setNovaSenha}

                style={{
                  backgroundColor: 'white',

                  borderRadius: 14,

                  padding: 14,

                  borderWidth: 1,
                  borderColor: '#eee'
                }}

              />

              <TouchableOpacity

                onPress={alterarSenha}

                style={{
                  backgroundColor: '#0d5be1',

                  padding: 15,

                  borderRadius: 15,

                  alignItems: 'center',

                  marginTop: 15
                }}
              >

                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 16
                  }}
                >
                  Alterar Senha
                </Text>

              </TouchableOpacity>

            </View>

            {/* SAIR */}
            <TouchableOpacity

              onPress={sair}

              style={{
                backgroundColor: '#ff5b5b',

                padding: 18,

                borderRadius: 18,

                alignItems: 'center',

                flexDirection: 'row',
                justifyContent: 'center'
              }}

            >

              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828479.png'
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
                  fontWeight: 'bold',
                  fontSize: 16
                }}
              >
                Sair da Conta
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>

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
