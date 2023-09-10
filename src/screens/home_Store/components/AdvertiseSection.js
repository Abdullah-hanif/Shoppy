import {
	Dimensions,
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import React from "react";
import { DummyText } from "../../../constants/dummyText";
import { COLORS, FontFamily } from "../../../constants/colors";
import { scaleFontSize } from "../../../utils/scaleFontSize";

const AdvertiseSection = () => {
	return (
		<View style={styles.container}>
			<View style={styles.sectionOne}>
				<Text style={styles.txtStyle}>
					{DummyText.Ventas_calientes}
				</Text>
				<Text style={styles.txt2Style}>{DummyText.ver_más}</Text>
			</View>
			<AdvertisementSection />
		</View>
	);
};

const AdvertisementSection = () => {
	const images = [
		require("../../../assets/Images/banner.png"),
		require("../../../assets/Images/banner.png"),
		require("../../../assets/Images/banner.png")
	];

	return (
		<View style={styless.container}>
			<ScrollView
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
			>
				{images.map((image, index) => (
					<Image key={index} source={image} style={styless.image} />
				))}
			</ScrollView>
			<View style={styless.overlay}>
				{/* <Text style={styless.text}>Advertisement</Text> */}
				<View
					style={{
						height: 30,
						width: 30,
                        padding:10,
						backgroundColor: COLORS.secoundry,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 30,
						// marginVertical: 5
					}}
				>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Bold,
							color: COLORS.white
						}}
					>
						New
					</Text>
				</View>
				<Text
					style={{
						fontFamily: FontFamily.Outfit_Bold,
						color: COLORS.white,
						fontSize: scaleFontSize(16)
					}}
				>
					Iphone 12
				</Text>
				<Text
					style={{
						fontFamily: FontFamily.Outfit_Regular,
						color: COLORS.white,
						fontSize: scaleFontSize(10)
					}}
				>
					Súper. Mega. Rápido.
				</Text>

				<TouchableOpacity
					style={{
						padding: scaleFontSize(5),
                  
						backgroundColor: COLORS.secoundry,
						borderRadius: 30,
						alignItems: "center",
						justifyContent: "center",
                        margin:10,
						// marginTop: 20
					}}
				>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Bold,
							color: COLORS.white
						}}
					>
						Buy now!
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styless.pagination}>
				{images.map((_, index) => (
					<View
						key={index}
						style={[
							styless.dot,
							index === 0 ? styless.activeDot : null
						]}
					/>
				))}
			</View>
		</View>
	);
};

const { width, height } = Dimensions.get("window");

const styless = StyleSheet.create({
	container: {
		position: "relative",
		width: width - 40,
		height: height * 0.2, // Adjust the height as per your requirement
		//   backgroundColor:"red",
		borderRadius: 10,

		marginTop: 5
	},
	image: {
		width: width,
		height: height * 0.2, // Adjust the height as per your requirement
		resizeMode: "cover"
	},
	overlay: {
		position: "absolute",
		top: 0,
		left: 0,
		borderBottomLeftRadius: 10,
		borderTopLeftRadius: 10,
		width: width * 0.3, // Adjust the width as per your requirement
		height: height * 0.2, // Adjust the height as per your requirement
		backgroundColor: "rgb(0, 0, 0)",
		//   justifyContent: 'center',
		paddingLeft: width * 0.03 // Adjust the padding as per your requirement
	},
	text: {
		color: "white",
		fontSize: height * 0.03, // Adjust the font size as per your requirement
		fontWeight: "bold"
	},
	pagination: {
		position: "absolute",
		bottom: height * 0.02, // Adjust the bottom position as per your requirement
		right: width * 0.02, // Adjust the right position as per your requirement
		flexDirection: "row"
	},
	dot: {
		width: width * 0.015, // Adjust the dot size as per your requirement
		height: width * 0.015, // Adjust the dot size as per your requirement
		borderRadius: width * 0.0075, // Adjust the dot size as per your requirement
		backgroundColor: "gray",
		marginHorizontal: width * 0.01 // Adjust the margin as per your requirement
	},
	activeDot: {
		backgroundColor: "white"
	}
});

export default AdvertiseSection;

const styles = StyleSheet.create({
	container: {
		padding: 10
		// backgroundColor:"white"
	},
	sectionOne: {
		// backgroundColor:"blue",
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10
	},
	txtStyle: {
		fontFamily: FontFamily.Outfit_Medium,
		fontSize: scaleFontSize(20),
		color: COLORS.secoundry
	},
	txt2Style: {
		fontFamily: FontFamily.Outfit_Regular,
		fontSize: scaleFontSize(13),
		color: COLORS.white
	}
});
