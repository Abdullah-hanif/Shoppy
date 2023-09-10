import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export function scaleSize(size, scaleFactor = 0.1) {
	return Math.round(size + (windowWidth - 375) * scaleFactor);
}
