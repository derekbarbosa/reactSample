import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import PatientScreen from '../screens/Patient';
import MedScreen from '../screens/MedProfessional';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='PatientScreen' component={PatientScreen} />
      <Stack.Screen name='MedicalScreen' component={MedScreen} />
    </Stack.Navigator>
  );
}