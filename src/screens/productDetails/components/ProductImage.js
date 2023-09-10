
import React, { useRef, useState } from "react";
import {
	View,
	Image,
	Text,
	StyleSheet,
	Dimensions,
	ScrollView
} from "react-native";
import { COLORS, FontFamily } from "../../../constants/colors";
import { DummyText } from "../../../constants/dummyText";

import { scaleFontSize } from "../../../utils/scaleFontSize";
import { MaterialIcons } from "@expo/vector-icons";

const ProductImage = () => {
	const images = [
		{ uri: "https://example.com/image1.jpg", price: "$19.99" },
		{ uri: "https://example.com/image2.jpg", price: "$29.99" },
		{ uri: "https://example.com/image3.jpg", price: "$39.99" }
		// Add more images as needed
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const scrollViewRef = useRef(null);

	const handleScroll = (event) => {
		const { contentOffset, layoutMeasurement } = event.nativeEvent;
		const currentIndex = Math.round(
			contentOffset.x / layoutMeasurement.width
		);
		setCurrentImageIndex(currentIndex);
	};

	const scrollToIndex = (index) => {
		if (scrollViewRef.current) {
			scrollViewRef.current.scrollTo({
				x: index * Dimensions.get("window").width,
				animated: true
			});
		}
	};

	return (
		<View style={styles.container}>
			<ScrollView
				ref={scrollViewRef}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				onScroll={handleScroll}
				scrollEventThrottle={16}
				centerContent={true}
			>
				{images.map((image, index) => (
					<View key={index} style={styles.imageContainer}>
						<Image
							source={require("../../../assets/Images/shirt.png")}
							style={styles.image}
						/>
					</View>
				))}
			</ScrollView>

			<View style={styles.paginationContainer}>
				{images.map((_, index) => (
					<View
						key={index}
						style={[
							styles.paginationDot,
							index === currentImageIndex && styles.activeDot
						]}
					/>
				))}
			</View>

			<View style={styles.topLeftCorner}>
				<MaterialIcons
					name="online-prediction"
					size={50}
					color={COLORS.green}
				/>
			</View>

			<View style={styles.topRightCorner}>
				<Text style={styles.priceText}>
					{images[currentImageIndex].price}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: COLORS.white,
		borderRadius: 10
	},
	imageContainer: {
		width: Dimensions.get("window").width
	},
	image: {
		// width: "85%",
		// height: Dimensions.get("window").width/1.2 // Assuming square images
	},
	topLeftCorner: {
		position: "absolute",
		top: 10,
		left: 10,

		padding: 5
	},
	topRightCorner: {
		position: "absolute",
		top: 10,
		right: 10,
		// backgroundColor: 'white',
		padding: 5
	},
	priceText: {
		fontSize: scaleFontSize(20),
		fontFamily: FontFamily.Outfit_Bold,
		color: COLORS.secoundry
	},
	liveIcon: {
		color: "white",
		fontWeight: "bold"
	},
	paginationContainer: {
		position: "absolute",
		bottom: 10,
		flexDirection: "row",
		alignSelf: "flex-end"
	},
	paginationDot: {
		width: 10,
		height: 10,
		borderRadius: 20,
		backgroundColor: "black",
		marginHorizontal: 3
	},
	activeDot: {
		backgroundColor: "black",
        borderWidth:3,
        borderColor:COLORS.secoundry
	}
});

export default ProductImage;
