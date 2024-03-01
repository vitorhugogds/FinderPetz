import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Prelogin from './src/pages/Prelogin'
import Login from './src/pages/Login'
import Cadastro from './src/pages/Cadastro'
import Calendario  from './src/pages/Calendario';
import Home from './src/pages/home';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
     initialRouteName='Prelogin'
      screenOptions={{
       headerShown: false
      }}
      >
          <Stack.Screen
              name="Prelogin"
              component={Prelogin}
              options={{ headerTitle: 'Prehome' }}
            />

          <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerTitle: 'Login' }}
            />
          
          <Stack.Screen
              name="home"
              component={ Home }
              options={{ headerTitle: 'screenTabs' }}
            />

          <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{ headerTitle: 'Cadastro' }}
            />

          <Stack.Screen
              name="Calendario"
              component={Calendario}
              options={{ headerTitle: 'Calendario' }}
            />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;