import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const  AppStack = createStackNavigator();

import Map from './screens/Map';

export default function Routes(){
  return(
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false}}>
        <AppStack.Screen name="Map" component={Map}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}