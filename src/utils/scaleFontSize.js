import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export function scaleFontSize(fontSize, scaleFactor = 0.1) {
	return Math.round(fontSize + (windowWidth - 375) * scaleFactor);
}
