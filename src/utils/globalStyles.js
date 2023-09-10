import { StyleSheet } from "react-native";
import * as Font from "expo-font";

export const globalStyles = StyleSheet.create({
	text: {
		fontFamily: "CustomFont-Regular",
		fontSize: 16
		// Add more global text styles as needed
	}
});

export const loadCustomFont = async () => {
	await Font.loadAsync({
		"CustomFont-Regular": require("../fonts/Outfit-VariableFont_wght.ttf"),
		"Outfit-Black": require("../fonts/Outfit-Black.ttf"),
		"Outfit-Bold": require("../fonts/Outfit-Bold.ttf"),
		"Outfit-ExtraBold": require("../fonts/Outfit-ExtraBold.ttf"),
		"Outfit-Light": require("../fonts/Outfit-Light.ttf"),
		"Outfit-ExtraLight": require("../fonts/Outfit-ExtraLight.ttf"),
		"Outfit-Medium": require("../fonts/Outfit-Medium.ttf"),
		"Outfit-Regular": require("../fonts/Outfit-Regular.ttf"),
		"Outfit-SemiBold": require("../fonts/Outfit-SemiBold.ttf"),
		"Outfit-Thin": require("../fonts/Outfit-Thin.ttf")
		// Add more font variations if needed
	});
};
