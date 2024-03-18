import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashScreen from './src/screens/flash/FlashScreen';
// import LoginScreen from './src/screens/LoginScreen';
import LoginScreen from './/src/screens/auth/login'
import RegisterScreen from './/src/screens/auth/register'
import MainScreen from './src/screens/seller/verification/MainScreen';
import Otpscreen from './src/screens/seller/startones/Otpscreen';
import Dashboard from './src/screens/seller/sellernavigator/Dashboard';
import AddProduct from './src/screens/seller/sellerhome/addproduct/AddProduct';
import {useState, useEffect} from 'react'
import HomeScreen from './src/screens/seller/sellerhome/HomeScreen';
import AnalysisScreen from './src/screens/seller/selleranalysis';

import BuyerNavigator from './src/screens/buyer/buyernavigation';
import BuyerHome from './src/screens/buyer/home';
import BuyerOrders from './src/screens/buyer/buyerorders';
import BuyerSetting from './src/screens/buyer/buyersetting';
export default function App() {
  const Stack = createStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='flashscreen'>
          <Stack.Screen name="flashscreen" component={FlashScreen} />
          <Stack.Screen name="otpscreen" component={Otpscreen} />
          
          <Stack.Screen name="mainscreen" component={MainScreen} />
          <Stack.Screen name="dashboard" component={Dashboard} />
          <Stack.Screen name="addproduct" component={AddProduct} />
          <Stack.Screen name="analysisscreen" component={AnalysisScreen} />

          {/* auth */}
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="loginscreen" component={LoginScreen} />

          <Stack.Screen name="BuyerNavigator" component={BuyerNavigator} />
          <Stack.Screen name="BuyerHome" component={BuyerHome} />
          <Stack.Screen name="BuyerOrders" component={BuyerOrders} />
          <Stack.Screen name="BuyerSetting" component={BuyerSetting} />


        </Stack.Navigator>
    </NavigationContainer>
    // <Products />
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
