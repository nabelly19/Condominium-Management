import { StyleSheet, Text, View} from 'react-native';
import { useState, useContext } from 'react';

export default function HomePage(props) {

  return (
    <View>

      <Text>HOME</Text>

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
