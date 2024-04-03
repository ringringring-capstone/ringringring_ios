import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import styled from 'styled-components';
import palette from './src/styles/colorPalette'
import Login from './src/screens/Login';


export default function App() {
  const [isFont, setIsFont] = useState(false)
  const Stack = createNativeStackNavigator();

  // 폰트 적용
  useEffect(async () => {
    await Font.loadAsync({
      "IBMPlexSans-Regular": require("./src/assets/font/IBMPlexSansKR-Regular.ttf"),
      "IBMPlexSans-Bold": require("./src/assets/font/IBMPlexSansKR-Bold.ttf"),
    });
    setIsFont(true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={Login}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};