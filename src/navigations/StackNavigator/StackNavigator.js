import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// @Screen
import HomeStore from "../../screens/home_Store/HomeStore";
import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator";
import ProductDetails from "../../screens/productDetails/ProductDetails";


const StackNavigator = () => {
	const Stack = createStackNavigator();
	return (
		<>
			<Stack.Navigator screenOptions={{
                headerShown:false
            }}>
				<Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
				<Stack.Screen name="ProductDetails" component={ProductDetails} />
				
			</Stack.Navigator>
		</>
	);
};


function Myfun() {
  return (
    <View>
      <Text>StackNavigator</Text>
    </View>
  )
}

export default StackNavigator;

const styles = StyleSheet.create({});
