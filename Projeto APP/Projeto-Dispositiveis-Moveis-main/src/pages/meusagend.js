import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Meusagend = () => {
  return (
    <View style={styles.content}>
      <Image
        source={require('../assets/logs/meusagendamentos.png')}
        style={styles.iconImage}
      />

      <View style={styles.contentText}>
        <Text style={styles.text}>
          Nome: Nome do Cliente
        </Text>
        <Text style={styles.text}>
          Dia Marcado: 12 de Novembro, 2023
        </Text>
        <Text style={styles.text}>
          Hora: 14:00
        </Text>

        <Text style={styles.statusText}>
          Status: já realizado
        </Text>
      </View>

      
      <View style={styles.contentText1}>
        <Text style={styles.text}>
          Nome: Nome do Cliente
        </Text>
        <Text style={styles.text}>
          Dia Marcado: 12 de Novembro, 2023
        </Text>
        <Text style={styles.text}>
          Hora: 14:00
        </Text>

        <Text style={styles.statusText1}>
          Status: a realizar
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#3EA366',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  iconImage: {
    top: 30,
    width: 390,
    height: 100,
    borderRadius: 20,
    marginBottom: 30,
  },
  contentText: {
    backgroundColor: '#DAD7CD',
    width: 390,
    borderRadius: 10,
    top: 50,
    padding: 20,
  },
  contentText1: {
    backgroundColor: '#DAD7CD',
    width: 390,
    borderRadius: 10,
    top: 100,
    padding: 20,

  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
    marginBottom: 10,
    left: 30,
  },
  statusText: {
    color: '#3EA366',
  },
  // Nova View de Texto com a cor vermelha para representar o estado
  stateText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  statusText1:{
    color: '#DC9900',
  }
});

export default Meusagend;
