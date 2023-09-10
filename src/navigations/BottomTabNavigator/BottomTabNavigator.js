import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// @Screens
import HomeStore from "../../screens/home_Store/HomeStore";
import { COLORS } from "../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import HomeCateDetails from "../../screens/homeCateDetails/HomeCateDetails";
import StackNavigator from "../StackNavigator/StackNavigator";
import ProductDetails from "../../screens/productDetails/ProductDetails";

// @//Devliery Screens

import Dashboard from "../../screens/deliveryDashboard/Dashboard";
import AccountDelivery from "../../screens/deliveryProfile/AccountDelivery";
import MyDeleveries from "../../screens/myDeleveries/MyDeleveries";
import AffiliateMarketing from "../../screens/affiliateMarketing/AffiliateMarketing";

const BottomTabNavigator = () => {
	const Tab = createBottomTabNavigator();
	const screenOptions = {
		headerShown: false,

		tabBarStyle: {
			position: "absolute",
			height: 60,
			backgroundColor: "rgba(0,0,0,0.98)",
			// marginHorizontal: 10,

			// marginBottom: 50,
			bottom: 2,
			borderRadius: 30
		},
		tabBarShowLabel: false,
		tabBarLabelStyle: {
			textAlign: "center",
			justifyContent: "center",
			alignItems: "center"
		}
	};
	return (
		<>
			<Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => (
							<>
								<Image
									style={{
										height: 50,
										width: 50,
										resizeMode: "contain",
										opacity:focused?10:0.3
									}}
									source={require("../../assets/Images/home.png")}
								/>
							</>
						)
					}}
					name="HomeStore"
					component={HomeStore}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => (
							<>
								<Image
									style={{
										height: 50,
										width: 50,
										resizeMode: "contain",
										opacity:focused?10:0.3
									}}
									source={require("../../assets/Images/cate.png")}
								/>
							</>
						)
					}}
					name="HomeCateDetails"
					component={HomeCateDetails}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => (
							<>
								<Image
									style={{
										height: 50,
										width: 50,
										resizeMode: "contain",
										opacity:focused?10:0.3
									}}
									source={require("../../assets/Images/noti.png")}
								/>
							</>
						)
					}}
					name="Categories1"
					component={Categories1}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => (
							<>
								<Image
									style={{
										height: 50,
										width: 50,
										resizeMode: "contain",
										opacity:focused?10:0.3
									}}
									source={require("../../assets/Images/profile.png")}
								/>
							</>
						)
					}}
					name="Categories2"
					component={Categories2}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => (
							<>
								<Image
									style={{
										height: 50,
										width: 50,
										resizeMode: "contain",
										opacity:focused?10:0.3
									}}
									source={require("../../assets/Images/cart.png")}
								/>
							</>
						)
					}}
					name="Categories3"
					component={Categories3}
				/>
			</Tab.Navigator>
		</>
	);
};

const Categories1 = () => {
	return (
		<View>
			<Text>Categories</Text>
		</View>
	);
};
const Categories2 = () => {
	return (
		<View>
			<Text>Categories</Text>
		</View>
	);
};
const Categories3 = () => {
	return (
		<View>
			<Text>Categories</Text>
		</View>
	);
};

export const DeliveryAppBottomTab = () => {
	const Tab = createBottomTabNavigator();
	const screenOptions = {
		headerShown: false,

		tabBarStyle: {
			position: "absolute",
			height: 60,
			backgroundColor: "rgba(0,0,0,0.98)",
			// marginHorizontal: 10,

			// marginBottom: 50,
			bottom: 2,
			borderRadius: 30
		},
		tabBarShowLabel: false,
		tabBarLabelStyle: {
			textAlign: "center",
			justifyContent: "center",
			alignItems: "center"
		}
	};
	return (
		<>
			<Tab.Navigator screenOptions={screenOptions}>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => (
							<>
								<Image
									style={{
										height: 50,
										width: 50,
										resizeMode: "contain",
										opacity:focused?10:0.8
									}}
									source={require("../../assets/Images/home.png")}
								/>
							</>
						)
					}}
					name="Dashboard"
					component={Dashboard}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => (
							<>
								<Image
									style={{
										height: 50,
										width: 50,
										resizeMode: "contain",
										opacity:focused?10:0.8
									}}
									source={require("../../assets/Images/Delivery.png")}
								/>
							</>
						)
					}}
					name="MyDeleveries"
					component={MyDeleveries}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => (
							<>
								<Image
									style={{
										height: 50,
										width: 50,
										resizeMode: "contain",
										tintColor:focused? "white":"lightgray",
										opacity:focused?10:0.8
									}}
									source={require("../../assets/Images/MyEarnings.png")}
								/>
							</>
						)
					}}
					name="AffiliateMarketing"
					component={AffiliateMarketing}
				/>
				<Tab.Screen
					options={{
						tabBarIcon: ({ focused }) => (
							<>
								<Image
									style={{
										height: 50,
										width: 50,
										resizeMode: "contain",
										opacity:focused?10:0.8
									}}
									source={require("../../assets/Images/profileactive.png")}
								/>
							</>
						)
					}}
					name="AccountDelivery"
					component={AccountDelivery}
				/>
			</Tab.Navigator>
		</>
	);
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
