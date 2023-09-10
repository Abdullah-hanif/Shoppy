import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS, FontFamily } from "../../../constants/colors";
import { scaleFontSize } from "../../../utils/scaleFontSize";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { responsiveFontSize } from "../../../utils/responsiveFontSize";
const PaymentOptions = ({ showIcon, title, subtitle }) => {
	const [checked, setChecked] = useState(false);
	return (
		<View style={styles.container}>
			<View style={styles.container1}>
				<TouchableOpacity onPress={() => setChecked(!checked)}>
					{checked ? (
						<FontAwesome5
							name="dot-circle"
							color={COLORS.black}
							size={30}
						/>
					) : (
						<FontAwesome
							name="circle"
							color={COLORS.gray}
							size={30}
						/>
					)}
				</TouchableOpacity>
				<View>
					<Text style={styles.titleTxt}>{title}</Text>
					<Text
						style={[
							styles.titleTxt,
							{
								fontSize: responsiveFontSize(13),
								fontFamily: FontFamily.Outfit_Regular,
								color: COLORS.gray
							}
						]}
					>
						{subtitle}
					</Text>
				</View>
			</View>
			{showIcon ? (
				<>
					<View style={styles.moneyContainer}>
						<Text style={styles.iconStyle}>$</Text>
					</View>
				</>
			) : (
				<View />
			)}
		</View>
	);
};

export default PaymentOptions;

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.white,
		padding: scaleFontSize(8),
		borderBottomWidth: 1,
		borderColor: COLORS.gray,
		flexDirection: "row",
		alignItems: "center",

		justifyContent: "space-between"
	},
	container1: {
		flexDirection: "row",
		alignItems: "center",
	},
	titleTxt: {
		fontSize: responsiveFontSize(16),
		fontFamily: FontFamily.Outfit_Regular,
		color: COLORS.black,
		left: 5
	},

	moneyContainer: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,

		height: 40,
		width: 40,
		padding: scaleFontSize(2),
		backgroundColor: COLORS.secoundry
	},
	iconStyle: {
		fontSize: responsiveFontSize(16),
		fontFamily: FontFamily.Outfit_Bold,
		color: COLORS.lightBlack
	}
});
