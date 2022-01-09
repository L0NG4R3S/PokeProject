import React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Pages from './pages';

const RootStack = createStackNavigator();

export const navigationRef = createNavigationContainerRef();

const Navigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Loading" component={Pages.Loading} />
        <RootStack.Screen name="Home" component={Pages.Home} />
        <RootStack.Screen name="PokemonDetails" component={Pages.PokemonDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
