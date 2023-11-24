import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable'

export default function App() {
  
  


  return (
    <>
    <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity
              style={styles.btnNavegation}
            >
              <Text  style={styles.btnNavText}>Financeiro</Text>
            </TouchableOpacity>

          <TouchableOpacity
              style={styles.btnNavegation}
          >
              <Text  style={styles.btnNavText}>Novo Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.btnNavegation}
          >
              <Text  style={styles.btnNavText}>Info</Text>
          </TouchableOpacity>

        </View>

      <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text  style={styles.buttonText}>BLOCOS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text  style={styles.buttonText}>VAGAS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text  style={styles.buttonText}>AGENDAMENTOS</Text>
          </TouchableOpacity>
        </View>
    </View>
    </>
  );
}
let screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#5D576B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  btnNavegation: {
    backgroundColor: '#4A90E2', 
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    width: screenWidth * 0.25, 
    height: 50,
    borderRadius: 10,
  },

  btnNavText: {
    padding: '2%',
    color: '#FFF',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center'
  },

  btnContainer: {
    marginTop: '30%'
  },

  button: {
    backgroundColor: "#a1a1a1",
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: '10%',
    width: screenWidth * 0.90,
    height: '50px',
    borderRadius: '10px',
  },

  buttonText: {
    padding: '2%',
    color: '#FFF',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center'
  }










});
