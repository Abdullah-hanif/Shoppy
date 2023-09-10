import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function calculatePercentageDimension(percentage, isWidth = true) {
	const baseDimension = isWidth ? windowWidth : windowHeight;
	return (percentage / 100) * baseDimension;
}
