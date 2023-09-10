import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FontFamily } from "../../../constants/colors";
import { responsiveFontSize } from "../../../utils/responsiveFontSize";

export const DashboardContainer = ({text1,txt2,imgUri}) => {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.container1}>
					<Image
						style={styles.imgStyle}
						source={imgUri}
					/>
				</View>
				<View>
				<Text style={styles.txtStyle}>
					{text1}
					<Text style={{color:COLORS.secoundry,fontFamily:FontFamily.Outfit_Bold}}>{txt2}</Text>
				</Text>
				</View>
			</View>
		</>
	);
};

export default DashboardContainer;

const styles = StyleSheet.create({
	container: {
		// justifyContent: "center",
		// alignItems: "center",
		// padding: 10,
paddingVertical:20,
justifyContent:"center",

alignItems:"center",


		borderRadius: 10
	},
	container1: {
		backgroundColor: COLORS.secoundry,
		height: responsiveFontSize(60),
		width: responsiveFontSize(60),
		// padding: responsiveFontSize(20),
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10
	},
	imgStyle: {
		height: responsiveFontSize(25),
		width: responsiveFontSize(25),
		resizeMode: "contain"
	},
    txtStyle:{
		marginVertical:10,
        fontSize:responsiveFontSize(12),
        fontFamily:FontFamily.Outfit_Regular,
        color:COLORS.gray
    }
});
