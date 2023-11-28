import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function CadastroHome(props) {
  
  return (
    <>
    <View style={styles.container}>
    <View>
    <Image
          source={require('../../img/logotipo.png')}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.title}>NOVO CADASTRO</Text>
      </View>
        <View 
        style={styles.containerForm}>

      <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text  style={styles.buttonText}
                onPress= {() => props.navigation.navigate('CadastrarAdministrador')}
            >CADASTRAR ADMINISTRADOR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text  style={styles.buttonText}>CADASTRAR APARTAMENTO</Text>
          </TouchableOpacity>
        </View>
        
    </View>
    </View>
    </>
  );
}
let screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    marginTop: "20px",
    color: "black"
},

  containerForm: {
    flex:1,
    backgroundColor: '#5D576B',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  img:{
    width: '200px',
    height:"200px",
    display: "flex",
    justifyContent: "center",                               
    alignItems: "center"                                                                                                                            
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
    backgroundColor: "#FFF",
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
    color: "#5D576B",
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center'
  }
});
