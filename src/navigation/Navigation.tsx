
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '@features/auth/SplashScreen';
import { navigationRef } from '@utils/NavigationUtils';
import CustomerLogin from '@features/auth/CustomerLogin';
import DeliveryLogin from '@features/auth/DeliveryLogin';

const Stack = createNativeStackNavigator();
const Navigation :FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen"  component={SplashScreen} />
        <Stack.Screen name="CustomerLogin" component={CustomerLogin}  options={{animation : 'fade'}} />
        <Stack.Screen name="DeliveryLogin" component={DeliveryLogin} options={{animation : 'fade'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
