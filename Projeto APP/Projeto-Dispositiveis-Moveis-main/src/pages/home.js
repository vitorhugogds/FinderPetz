import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import Calendario from './Calendario';
import meusagend from './meusagend'

const Tab = createBottomTabNavigator();

const Home = () => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/logs/tophome.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.centeredContainer}>

      <Text style={styles.headerText}>Serviços:</Text>

        <TouchableOpacity>
          <Image
            source={require('../assets/logs/banhoetosa.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
}



function App() {
  return (
      <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#DAD7CD',
          borderTopWidth: 0,
      
          bottom: 14,
          left: 14,
          right: 14,
          borderRadius: 10,
          height: 65,
        }
      }}>

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false, // Remover o título e cabeçalho
              tabBarIcon: ({color , size, focused}) => {
                if(focused){ 
                  return <Ionicons name='home' size={size} color={color} />
            }
            
                return <Ionicons name='home-outline' size={size} color={color} />
            }
            
           }} 
        />
        <Tab.Screen 
        name="agendaCalendario" 
        component={Calendario} 
        options={{ 
          headerShown: false,
            tabBarIcon: ({color , size, focused}) => {
               if(focused){ 
                 return <Ionicons name='calendar' size={size} color={color} />
        }
        
               return <Ionicons name='calendar-outline' size={size} color={color} />
        }
            
        }} // Remover o título e cabeçalho 
        />

       <Tab.Screen 
        name="meusagendados" 
        component={meusagend} 
        options={{ 
          headerShown: false,
            tabBarIcon: ({color , size, focused}) => {
               if(focused){ 
                 return <Ionicons name="bookmark" size={size} color={color} />
        }
        
               return <Ionicons name='bookmark-outline' size={size} color={color} />
        }
            
        }} // Remover o título e cabeçalho 
        />


      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EA366',
  },
  imageContainer: {
    height: 450,
    width: 430,
    alignItems: 'center',
  },
  image: {
    width: 450,
    height: 350,
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 390, // Ajuste o tamanho conforme necessário
    height: 100, // Ajuste o tamanho conforme necessário
    borderRadius: 20,
  },
  headerText: {
    color: '#000000',
    fontSize: 22,
    right:110,
    top:-20,
    right:125
  },

});

export default App;