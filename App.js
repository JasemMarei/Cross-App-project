import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/screens/Home";
import Product from "./src/screens/Product";
import Order from "./src/screens/Order";
import Category from "./src/screens/Category";
import UpdateCategory from "./src/screens/UpdateCategory";
import AddCategory from "./src/screens/AddCategory";
import Pro_Listing from "./src/screens/Pro_Listing";
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Order" component={Order} options={{ title: 'Product Detalis' }} />
        <Stack.Screen name="Pro_Listing" component={Pro_Listing} />
        <Stack.Screen name="UpdateCategory" component={UpdateCategory} />
        <Stack.Screen name="AddCategory" component={AddCategory} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
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
