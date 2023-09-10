import { Dimensions, PixelRatio } from "react-native";

const windowWidth = Dimensions.get("window").width;

export function responsiveFontSize(baseFontSize, scaleFactor = 1) {
	const scale = windowWidth / 375;
	const adjustedFontSize = baseFontSize * scale;
	const pixelDensityFactor = PixelRatio.getFontScale();
	return Math.round(adjustedFontSize * pixelDensityFactor * scaleFactor);
}
