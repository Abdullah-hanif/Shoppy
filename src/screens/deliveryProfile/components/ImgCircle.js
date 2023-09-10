import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/colors";
import { scaleFontSize } from "../../../utils/scaleFontSize";

const ImgCircle = () => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.imgStyle}
				source={require("../../../assets/Images/personProfile.png")}
			/>
		</View>
	);
};

export default ImgCircle;

const styles = StyleSheet.create({
	container: {
		padding: 1,
		borderRadius: 100,
    borderColor:COLORS.secoundry
    ,borderWidth:1
		// backgroundColor: COLORS.secoundry
	},
	imgStyle: {
		// height: 100,
		// width: 100,
    height: scaleFontSize(150) ,
		width: scaleFontSize(150) ,
	}
});
