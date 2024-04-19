import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import palette from './src/styles/colorPalette'

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import MyPageScreen from './src/screens/MypageScreen';
import ChecklistScreen from './src/screens/ChecklistScreen';
import BottomMenu from './src/components/BottomMenu';
import DoingChecklist from './src/components/checklist/DoingChecklist';
import CheckListResult from './src/components/checklist/CheckListResult';
import ConverHistory from './src/components/converhistory/ConverHistory';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFontLoading, setIsFontLoading] = useState(false)

  // 폰트 적용
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "IBMPlexSans-Regular": require("./src/assets/font/IBMPlexSansKR-Regular.ttf"),
        "IBMPlexSans-Medium": require("./src/assets/font/IBMPlexSansKR-Medium.ttf"),
        "IBMPlexSans-Bold": require("./src/assets/font/IBMPlexSansKR-Bold.ttf"),
      });
      setIsFontLoading(true);
    }
    loadFonts();
  }, []);

  // 폰트 로딩 중에는 렌더링 방지
  if(!isFontLoading) { 
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="register" component={RegisterScreen}/>
        <Stack.Screen name="main" component={MainScreen}/>
        <Stack.Screen name="doingchecklist" component={DoingChecklist}/>
        <Stack.Screen name="checklistresult" component={CheckListResult}/>
        <Stack.Screen name="converhistory" component={ConverHistory}/>
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
};

function MainScreen() {
  return (
    <>
      <Stack.Navigator 
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name="checklist" component={ChecklistScreen}/>
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="mypage" component={MyPageScreen}/>
      </Stack.Navigator>
      <BottomMenu/>
    </>
  );
};