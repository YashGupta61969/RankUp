import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {childStack, homeRoutes} from '../../constants/routes';
import Home from '../../screens/home/Home';
import EPR from '../../screens/epr/EPR';
import GeneratedNarrative from '../../screens/generatedNarrative/GeneratedNarrative';
import ViewNarrative from '../../screens/viewNarrative/ViewNarrative';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={childStack.HomeStack} component={Home} />
      <Stack.Screen name={homeRoutes.EPB} component={EPR} />
      <Stack.Screen name={homeRoutes.GeneratedNarrative} component={GeneratedNarrative}  />
      <Stack.Screen name={homeRoutes.ViewNarrative} component={ViewNarrative}  />

    </Stack.Navigator>
  );
};

export default HomeStack;
