import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ThemeToggle from '@components/ThemeToggle';

import HomeScreen from '@screens/Home';
import DetailsScreen from '@screens/Details';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerRight: ThemeToggle }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
