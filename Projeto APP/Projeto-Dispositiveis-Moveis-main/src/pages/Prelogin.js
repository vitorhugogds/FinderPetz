import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Prelogin = () => {

  const navigation = useNavigation()

  const Entrarlogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem-Vindo ao</Text>
        <Text style={styles.finder}>FinderPetz</Text>
        <Text style={styles.headerText}>{"\n"}Seu pet limpo em um click...</Text>
      </View>
      <Image
        source={require('../assets/logs/Logofp.png')}
        style={styles.customImage}
      />
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={ Entrarlogin }
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EA366',
  },
  header: {
    padding: 50,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
  },
  finder: {
    color: 'white',
    fontSize: 20,
  },
  customImage: {
    position: 'absolute',
    top: 250,
    left: 10,
    width: 370,
    height: 350,
    margin: 1,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    top: 640,
  },
  footer: {
    backgroundColor: '#DAD7CD',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  customButton: {
    backgroundColor: '#ffff',
    width: 225,
    height: 55,
    padding: 10, // Aumentar o espaço ao redor da palavra
    borderRadius: 10, // Tornar o botão mais arredondado
  },
  buttonText: {
    color: 'black',
    fontSize: 24,
    left:72,
  },
}); 

export default Prelogin;