import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import StackNavigator from "./StackNavigator/StackNavigator";
import AuthNavigator from "./AuthNavigatior/AuthNavigator";
import BottomTabNavigator from "./BottomTabNavigator/BottomTabNavigator";

const MainStack = () => {
	const [isLogin, setIsLogin] = useState(false);
	return isLogin ? <StackNavigator /> : <AuthNavigator />;
};

export default MainStack;

const styles = StyleSheet.create({});
