import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Calendario = () => {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();

  const handleHourPress = (hour) => {
    console.log(`Hora selecionada: ${hour}`);
  };

  const renderHourButtons = () => {
    const hours = Array.from({ length: 11 }, (_, index) => index + 8);
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.hoursContainer}>
          {hours.map((hour) => (
            <TouchableOpacity
              key={hour}
              style={styles.hourButton}
              onPress={() => handleHourPress(`${hour}:00`)}
            >
              <Text style={styles.hourButtonText}>{`${hour}:00`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.content}>
      {/* Imagem */}
      <Image
        source={require('../assets/logs/banhoetosa.png')}
        style={styles.iconImage}
      />

      {/* Calendário */}
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.agenda}
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: { selected: true, disableTouchEvent: true }
          }}
        />
      </View>

      {/* ScrollView */}
      <View style={styles.scrollViewContent}>
        {renderHourButtons()}
      </View>

      {/* Botão Agendar */}
      <TouchableOpacity
        style={styles.buttonAgendar}
        onPress={() => alert('Agendado com sucesso!!!')}
      >
        <Text style={styles.buttonText}>Agendar</Text>
      </TouchableOpacity>
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
    top:30,
    width: 390,
    height: 100,
    borderRadius: 20,
    marginBottom: 30,
  },
  calendarContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  agenda: {
    width: 350,
    borderRadius: 10,
  },
  scrollViewContent: {
    height: 60, // Ajuste a altura conforme necessário
    marginBottom: 30, // Adicionei um espaçamento abaixo do ScrollView
  },
  buttonAgendar: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    width: 375,
    alignItems: 'center',
    borderRadius: 10,
    top:100
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  hoursContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  hourButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
  },
  hourButtonText: {
    fontSize: 16,
    color: '#000000',
  },
});

export default Calendario;
