import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from 'screens/app-user/home';
import { AppUserRoutesParamList } from './app-user.navigator.types';
import { AppUserRoutes } from './app-user.navigator.enums';
import { RolePlaying } from "screens/app-user/role-playing";

const Stack = createStackNavigator<AppUserRoutesParamList>();
export const AppUserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={AppUserRoutes.Home}
        component={Home}
      />
      <Stack.Screen
        name={AppUserRoutes.RolePlaying}
        component={RolePlaying}
      />
    </Stack.Navigator>
  );
};
