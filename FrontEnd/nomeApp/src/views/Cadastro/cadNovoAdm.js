import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import api from '../../config/api';

export default function CadNovoAdm(props) {

  async function cadastro(){
    const res = await api.post("/admi",{})
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
        />

        <Text style={styles.title}>Data de Nascimento</Text>
              <TextInput
                placeholder='Digite sua Data de Nascimento'
                style={styles.input}
              />

        <Text style={styles.title}>CPF</Text>
              <TextInput
                placeholder='Digite seu CPF'
                style={styles.input}
              />

        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite seu Email @condomínio.com'
          style={styles.input}
        />

        <Text style={styles.title}>Número do Apartamento</Text>
              <TextInput
                placeholder='Digite número de seu apto.'
                style={styles.input}
              />

        <Text style={styles.title}>Bloco do Apartamento</Text>
              <TextInput
                placeholder='Digite o andar de seu apto.'
                style={styles.input}
              />

<Text style={styles.title}>Andar do Apartamento</Text>
              <TextInput
                placeholder='Digite o andar de seu apto'
                style={styles.input}
              />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
        />

        <TouchableOpacity style={styles.btnAdm}>
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

  message:{
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },

  containerForm:{
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius:25,
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
    marginBottom: 12 ,
    fontSize: 16
  },

  btnAdm: {
    backgroundColor: '#343B89',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop:14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText:{
    fontWeight: 'bolder',
    color:'#FFF',
    fontSize: 18

  },

  userText:{
    fontSize: 16,
    alignSelf: 'center',
    color: '#a1a1a1',
    fontWeight: 'bold'
  },

  btnUser:{
    marginTop: 14,
  }



});
