import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { calculatePercentageDimension } from "./src/utils/calculatePercentageDimension";
import { scaleFontSize } from "./src/utils/scaleFontSize";
import { responsiveFontSize } from "./src/utils/responsiveFontSize";
import { globalStyles, loadCustomFont } from "./src/utils/globalStyles";
import Splash from "./src/screens/splash/Splash";
import { NavigationContainer } from "@react-navigation/native";


// @Screens 
import LanguageSelection from "./src/screens/languageSelection/LanguageSelection";
import Login from "./src/screens/login/Login";
import MainStack from "./src/navigations/MainStack";


export default function App() {
	const headerWidth = calculatePercentageDimension(100);
	const headerHeight = calculatePercentageDimension(10, false);
	const headerFontSize = scaleFontSize(24);
	const contentFontSize = responsiveFontSize(16);
	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		const loadAppResources = async () => {
			await loadCustomFont();
			setFontLoaded(true);
		};

		loadAppResources();
	}, []);

	if (!fontLoaded) {
		return <View />;
	}

	return (
		<>
		<NavigationContainer>
			<MainStack />
		</NavigationContainer>
			{/* <Login />
			<LanguageSelection /> */}

		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		padding: scaleFontSize(10),
		justifyContent: "center"
	}
});
