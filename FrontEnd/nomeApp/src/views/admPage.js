import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function App() {
  
  


  return (
    <>
    <View style={styles.container}>
    <View>
        <Text style={styles.title}>BEM VINDO, ADMINISTRADOR</Text>
      </View>
        <View style={styles.row}>
          <TouchableOpacity
              style={styles.btnNavegation}
            >
              <Text  style={styles.btnNavText}>FINANCEIRO</Text>
            </TouchableOpacity>

          <TouchableOpacity
              style={styles.btnNavegation}
          >
              <Text  style={styles.btnNavText}>NOVO</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={styles.btnNavegation}
          >
              <Text  style={styles.btnNavText}>INFO</Text>
          </TouchableOpacity>

        </View>

      
        <View 
        style={styles.containerForm}>

      <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text  style={styles.buttonText}>BLOCOS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text  style={styles.buttonText}>CONSULTAR VAGAS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text  style={styles.buttonText}>AGENDAMENTOS</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('./src/img/logotipo.png')}
          style={styles.img}
          resizeMode="contain"
        />
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

  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "25px",
    fontWeight: '500',
    marginBottom: "50px",
    marginTop: "50px",
    color: "#FFF"
},

  containerForm: {
    flex:1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  img:{
    marginLeft:'20%',
    width: '200px',
    height:"200px"
  },

  row: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: '20%',
  },

  btnNavegation: {
    backgroundColor: '#4A90E2', 
    justifyContent:'center',
    alignItems: 'center',
    padding: 10,
    width: screenWidth * 0.25, 
    height: 50,
    borderRadius: 10,
    marginLeft: '5%'
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
    
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center'
  }
});
