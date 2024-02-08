import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {childStack, homeRoutes, narrativesRoutes} from '../../constants/routes';

import OPB from '../../screens/opb/OPB';
import Narratives from '../../screens/narratives/Narratives';

const NarrativeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={childStack.NarrativeStack} component={Narratives} />
      <Stack.Screen name={narrativesRoutes.OPB} component={OPB} />
      

    </Stack.Navigator>
  );
};

export default NarrativeStack;
