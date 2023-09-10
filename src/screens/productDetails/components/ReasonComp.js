import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FontFamily } from "../../../constants/colors";
import { DummyText } from "../../../constants/dummyText";
import { Rating, AirbnbRating } from "react-native-ratings";
import { scaleFontSize } from "../../../utils/scaleFontSize";
import ButtonComp from "../../../components/ButtonComp";

const ReasonComp = () => {
	return (
		<View style={styles.container}>
			<View style={styles.container2}>
				<Text style={styles.nameStyle}>mukesh lambani</Text>
				<View style={styles.container3}>
					<Rating
						type="star"
						ratingCount={5}
						imageSize={15}
						tintColor={COLORS.lightBlack}
						//   onFinishRating={this.ratingCompleted}
						style={{
							paddingVertical: 10,
							backgroundColor: COLORS.lightBlack
						}}
					/>
					<View style={styles.starContainer}>
						<Text style={styles.ratingStyle}>
							<Text style={{ color: COLORS.secoundry }}>
								3.0
							</Text>
							/5.0
						</Text>
					</View>
				</View>
			</View>
			<View>
				<Text style={styles.descriptionStyle}>
					{DummyText.loreIpsum}
				</Text>
			</View>

		</View>
	);
};

export default ReasonComp;

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: COLORS.white,
		borderRadius: 10,
		marginVertical: 10,
		padding: 5
	},
	container2: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	container3: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	starContainer: {
		padding: 5,
		backgroundColor: COLORS.black,
		borderRadius: 30,
		left: 2,
		paddingHorizontal: 15
	},
	ratingStyle: {
		padding:2,
		color: COLORS.white,
		fontSize: scaleFontSize(10),
		fontFamily: FontFamily.Outfit_Bold
	},
	nameStyle: {
		color: COLORS.white,
		fontSize: scaleFontSize(13),
		fontFamily: FontFamily.Outfit_Medium
	},
	descriptionStyle: {
		color: COLORS.white,
		fontSize: scaleFontSize(10),
		fontFamily: FontFamily.Outfit_Regular
	}
});
