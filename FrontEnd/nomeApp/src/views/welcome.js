import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome(props) {

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../img/logotipo.png')}
          style={{width: '300px',height:"300px"}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View 
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}>
        <Text style={styles.title}>Faça o gerenciamento de seu Condomínio de maneira eficiente</Text>
        <Text style={styles.text}>Faça o login como Morador ou Síndico</Text>

        <TouchableOpacity style={styles.btn}
          onPress= {() => props.Navigation.navigate('HomePage')}
          >
          <Text style={styles.btnText}>Acessar</Text>
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

    containerLogo: {
      flex: 2,
      backgroundColor: '#5D576B',
      justifyContent: 'center',
      alignItems: 'center',
    },

    containerForm: {
      flex:1,
      backgroundColor: '#F4F1DE',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
    },

    title:{
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom:12,
      color: '#FFFFFFF'
    },

    text:{
      color: '#2E4053',
    },

    btn:{
      position: 'absolute',
      backgroundColor: '#5D576B',
      borderRadius: 50,
      paddingVertical: 8,
      width:'60%',
      alignSelf: 'center',
      bottom: '15%',
      alignItems: 'center',
      justifyContent: 'center'
    },

    btnText:{
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold',
    }

  });
  