import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS, FontFamily } from "../../../constants/colors";
import { AntDesign,FontAwesome } from "@expo/vector-icons";
const TextInputComp = () => {
	return (
		<View style={styles.container}>
			<View style={styles.secoundContainer}>
				<AntDesign name="search1" color={COLORS.secoundry} size={20} />
				<TextInput placeholder="Buscar" placeholderTextColor={COLORS.black} style={styles.txtInput} />
			</View>
			<View style={styles.secoundItem}>
				<FontAwesome name="qrcode" color={COLORS.white} size={25} />
			</View>
		</View>
	);
};

export default TextInputComp;

const styles = StyleSheet.create({
	container: {
		
		flexDirection: "row",
		justifyContent: "space-between",
        alignItems:"center",
        marginVertical:5
	},
	imgStyle: {
		height: 100,
		width: 100
	},
	secoundContainer: {
		backgroundColor: COLORS.white,
        padding:10,
        borderRadius:30,
		width: "85%",
		flexDirection: "row",
		alignItems: "center"
	},
	txtStyle: {
		fontFamily: FontFamily.Outfit_Medium,
		color: COLORS.white
	},
	txtInput: {
		fontFamily: FontFamily.Outfit_Medium,
		color: COLORS.black,
        
	},
	secoundItem: {
		backgroundColor: COLORS.secoundry,
		// padding: 5,
        justifyContent:"center",
        alignItems:"center",
        height:40,width:40,
        left:5,
		borderRadius: 30
	}
});
