import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function HomePage() {

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a), Síndico</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder='Digite seu Email @condomínio.com'
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder='Digite sua senha'
          style={styles.input}
        />

        <TouchableOpacity style={styles.btnAdm}>
          <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnUser}>
          <Text style={styles.userText}>Sou morador!</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
