import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

    const Login = () => {

        const navigation = useNavigation();
      
        const EntrarHome = () => {
            navigation.navigate('home');
        };

        const EntrarCadastro = () => {
            navigation.navigate('Cadastro');
        };
        
    

  return (
    <View style={styles.container}>
      {/* Imagem */}
      <Image
        source={require('../assets/logs/Logofp.png')}
        style={styles.customImage}
      />
      {/* Container do rodapé */}
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          {/* Container do formulário de login */}
          <View style={styles.loginContainer}>
            {/* Container dos campos de entrada */}
            <View style={styles.inputContainer}>
              {/* Campo de entrada de e-mail */}
              <TextInput
                style={styles.input}
                placeholder="Digite seu Email"
                placeholderTextColor="#666" // Cor mais escura para o placeholder
              />
              {/* Campo de entrada de senha */}
              <TextInput
                style={styles.input}
                placeholder="Digite sua Senha"
                secureTextEntry={true}
                placeholderTextColor="#666" // Cor mais escura para o placeholder
              />
            </View>
            {/* Botão de login */}
            <TouchableOpacity
              style={styles.customButton}
              onPress={EntrarHome}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
          {/* Botão "Criar Conta" */}
          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={EntrarCadastro}
          >
            <Text style={styles.createAccountButtonText}>Criar Conta</Text>
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
  customImage: {
    top: 50,
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 530,
  },
  footer: {
    backgroundColor: '#DAD7CD',
    height: 540,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  loginContainer: {
    top: -90,
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    top: 0,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  customButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    width: 170,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold', // Texto em negrito
    color: 'black',
    fontSize: 16,
  },
  createAccountButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    width: 130,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: -50,
  },
  createAccountButtonText: {
    fontWeight: 'bold', // Texto em negrito
    color: 'black',
    fontSize: 16,
  },
});

export default Login;