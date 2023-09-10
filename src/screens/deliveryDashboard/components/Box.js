
import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { COLORS, FontFamily } from "../../../constants/colors";
import { scaleFontSize } from "../../../utils/scaleFontSize";
import { color } from "react-native-reanimated";

export const Box = ({
	title,
	title2,
	price,
	imageUri,
	data,
	index,
	backgroundCOLOR,
	txtColor,
	margintop
}) => {
	console.log(margintop, "marginTop");
	return (
		<View
			style={[
				styles.container,

				{
					backgroundColor: backgroundCOLOR,
				marginVertical:10,
					top:margintop?margintop :0,
					// index % 2 === 0 ? COLORS.secoundry : backgroundCOLOR
				}
			]}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between"
				}}
			>
				<View>
					<Text
						style={[
							styles.txtStyle1,
							{ color: COLORS.headingCOLO }
						]}
					>
						{title}
					</Text>
					<Text
						style={[
							styles.txtStyle2,
							{ color: COLORS.headingCOLO }
						]}
					>
						{title2}
					</Text>
				</View>
				<Image source={imageUri} style={styles.image} />
			</View>

			<Text style={[styles.price, , { color: txtColor }]}>{[price]}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: Dimensions.get("screen").height / 4.5,
		margin: 10,
		padding: scaleFontSize(5),
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: COLORS.secoundry
		// alignItems: 'flex-end',
	},
	image: {
		width: 60,
		height: 60,
		position: "absolute",
		right: 0,
		resizeMode: "contain"
	},
	title: {
		position: "absolute",
		top: 10,
		right: 10,
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff"
	},
	price: {
		position: "absolute",
		textAlign: "right",
		bottom: 0,
		// left: 10,

		width: "100%",
		// padding: 5,
		borderRadius: 5,
		fontFamily: FontFamily.Outfit_Bold,
		color: COLORS.black,
		fontSize: scaleFontSize(50)
	},

	txtStyle1: {
		fontFamily: FontFamily.Outfit_Regular,
		color: COLORS.white,
		fontSize: scaleFontSize(12)
	},
	txtStyle2: {
		fontFamily: FontFamily.Outfit_Bold,
		color: COLORS.black,
		fontSize: scaleFontSize(18)
	},
	oddItem: {
		// flex: 1,
		// height:200,
		// margin: 10,
		// top:30,
		// padding:10,
		// borderRadius: 8,
		// overflow: 'hidden',
		backgroundColor: COLORS.white
	}
});

export default Box;
