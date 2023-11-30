import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import api from '../../config/api';

export default function CadNovoAdm(props) {
  
  const [confirmaSenha, setCS] = useState(
    confirma = "")

  const [admin, setAdmin] = useState(
    nome = "",
    cpf = "",
    data_nasc = "",
    email = "",
    apartamento = "",
    login = "",
    senha = "",
    chave = ""
  )

  async function cadastro() {
    const res = await api.post("localhost:8080/admin", {nome:admin.nome, cpf:admin.cpf,
    data_nasc:admin.data_nasc, email:admin.email, apartamento:admin.bloco,apartamento:admin.numero,
    apartamento:admin.andar, login:admin.login, senha:admin.senha, chave:admin.chave})
  }

  function verificaSenha(senha, confirma)
  {
    if (senha === confirma) {
      if(admin.nome != "" && admin.cpf != "" && data_nasc != "" && email != "" && apartamento != ""
      && login != "" && senha != "" && chave != "") {
        const post = cadastro()
        alert("Administrador criado com êxito")
        props.navigation.navigate("AdmPage")
      }
      else {
        alert("É obrigatório preencher todos os Campos")
      }
    }
    else{
        alert("As senhas inseridas não são iguais")
    }
  }


  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastrar novo Administrador</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder='Digite seu Nome'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, nome: text })}
        />

        <Text style={styles.title}>CPF</Text>
        <TextInput
          placeholder='Digite seu CPF'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, cpf: text })}
        />

        <Text style={styles.title}>Data de Nascimento</Text>
        <TextInput
          placeholder='Digite sua Data de Nascimento'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, data_nasc: text })}
        />

        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite seu Email @condomínio.com'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, email: text })}
        />

        <Text style={styles.title}>Bloco do Apartamento</Text>
        <TextInput
          placeholder='Digite o andar de seu apto.'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, bloco: text })}
        />

        <Text style={styles.title}>Número do Apartamento</Text>
        <TextInput
          placeholder='Digite número de seu apto.'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, numero: text })}
        />

        <Text style={styles.title}>Andar do Apartamento</Text>
        <TextInput
          placeholder='Digite o andar de seu apto'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, andar: text })}
        />

        <Text style={styles.title}>Nome de Usuário</Text>
        <TextInput
          placeholder='Digite um login'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, login: text })}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          placeholder='Digite sua senha'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, senha: text })}
        />

        <Text style={styles.title}>Confirmação de Senha</Text>
        <TextInput
          secureTextEntry={true}
          placeholder='Confirme sua senha'
          style={styles.input}
          onChangeText={(text) => setCS({ ...confirmaSenha, confirma: text })}
        />

        <Text style={styles.title}>Chave de acesso</Text>
        <TextInput
          secureTextEntry={true}
          placeholder='Essa chave de acesso será usada no Login do Adm'
          style={styles.input}
          onChangeText={(text) => setAdmin({ ...admin, chave: text })}
        />

        <TouchableOpacity style={styles.btnAdm}
          onPress={() => {verificaSenha(admin.senha, confirmaSenha.confirma)}}
        >
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D576B',
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },

  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },

  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title: {
    fontSize: 20,
    marginTop: 28,
  },

  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16
  },

  btnAdm: {
    backgroundColor: '#343B89',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontWeight: 'bolder',
    color: '#FFF',
    fontSize: 18

  },

  userText: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#a1a1a1',
    fontWeight: 'bold'
  },

  btnUser: {
    marginTop: 14,
  }



});
