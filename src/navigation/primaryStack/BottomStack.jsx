import {SafeAreaView} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appRoutes} from '../../constants/routes';
import Merged from '../../screens/merged/Merged';
import Forum from '../../screens/forum/Forum';
import {icons} from '../../constants/icons';
import {verticalScale} from '../../constants/dimension';
import {color} from '../../constants/colors';
import HomeStack from '../childStack/HomeStack';
import AccountStack from '../childStack/AccountStack';
import NarrativeStack from '../childStack/NarrativeStack';

const Tab = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard:true,
          
          tabBarStyle: {
            height: verticalScale(52),
            borderTopWidth: 0,
            elevation: 10,
            shadowColor: color.lightBlack,
            shadowOpacity: 5,
            shadowRadius: 5,
          },
        }}>
        <Tab.Screen
          name={appRoutes.Home}
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <icons.ActiveHome width={80} height={50} />
              ) : (
                <icons.InActiveHome width={55} height={40} />
              ),
          }}
        />
        <Tab.Screen
          name={appRoutes.Narratives}
          component={NarrativeStack}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <icons.ActiveNarratives width={80} height={50} />
              ) : (
                <icons.InActiveNarratives width={55} height={50} />
              ),
          }}
        />
        <Tab.Screen
          name={appRoutes.Merged}
          component={Merged}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <icons.ActiveMerged width={80} height={50} />
              ) : (
                <icons.InActiveMerged width={40} height={40} />
              ),
          }}
        />
        <Tab.Screen
          name={appRoutes.Forum}
          component={Forum}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <icons.ActiveForum width={80} height={50} />
              ) : (
                <icons.InActiveForum width={40} height={40} />
              ),
          }}
        />
        <Tab.Screen
          name={appRoutes.Account}
          component={AccountStack}
          options={{
            tabBarIcon: ({focused}) =>
              focused ? (
                <icons.ActiveAccount width={80} height={50} />
              ) : (
                <icons.InActiveAccount width={50} height={40} />
              ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default BottomStack;
