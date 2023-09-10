import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// @Screen
import Splash from "../../screens/splash/Splash";
import Login from "../../screens/login/Login";
import LanguageSelection from "../../screens/languageSelection/LanguageSelection";
import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator";
import ProductDetails from "../../screens/productDetails/ProductDetails";
import ProductVideo from "../../screens/productVideo/ProductVideo";
import OrderDetails01 from "../../screens/orderDetails01/OrderDetails01";
import OrderDetails02 from "../../screens/orderDetails01/OrderDetails02";
import OrderDetails03 from "../../screens/orderDetails01/OrderDetails03";
import OrderDetails04 from "../../screens/orderDetails01/OrderDetails04";

//@ Delivery APP SCREENS
import DeliveryLogin from "../../screens/deliveryLogin/DeliveryLogin";
import DrawerNavigatior from "../DrawerNavigatior/DrawerNavigatior";
import Pending from "../../screens/deliveryPending/Pending";
import DeliveryDetails from "../../screens/deliveryDetails/DeliveryDetails"
import DeliveryCollection from "../../screens/deliveryCollection/DeliveryCollection";


const AuthNavigator = () => {
	const Stack = createStackNavigator();
	const [appName, setAppName] = useState("dApp")
	return (
		<>
			{appName == "dApp" ? (
				<Stack.Navigator
					initialRouteName={Splash}
					screenOptions={{
						headerShown: false
					}}
				>
					<Stack.Screen name="Splash" component={Splash} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen
						name="LanguageSelection"
						component={LanguageSelection}
					/>
					<Stack.Screen
						name="BottomTabNavigator"
						component={BottomTabNavigator}
					/>
					<Stack.Screen
						name="ProductDetails"
						component={ProductDetails}
					/>
					<Stack.Screen
						name="ProductVideo"
						component={ProductVideo}
					/>
					<Stack.Screen
						name="OrderDetails01"
						component={OrderDetails01}
					/>
					<Stack.Screen
						name="OrderDetails02"
						component={OrderDetails02}
					/>
					<Stack.Screen
						name="OrderDetails03"
						component={OrderDetails03}
					/>
					<Stack.Screen
						name="OrderDetails04"
						component={OrderDetails04}
					/>
				</Stack.Navigator>
			) : (
				<DeliveryAppAUth />
			)}
		</>
	);
};

const DeliveryAppAUth = () => {
	const Stack = createStackNavigator();
	return (
		<>
			<Stack.Navigator initialRouteName={DeliveryLogin}
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name="DeliveryLogin" component={DeliveryLogin} />
				<Stack.Screen name="DrawerNavigatior" component={DrawerNavigatior} />

				{/* Without Bottom bar Screen */}
				<Stack.Screen name="Pending" component={Pending} />
				<Stack.Screen name="DeliveryDetails" component={DeliveryDetails} />
				<Stack.Screen name="DeliveryCollection" component={DeliveryCollection} />



			</Stack.Navigator>
		</>
	)
}

export default AuthNavigator;

const styles = StyleSheet.create({});
