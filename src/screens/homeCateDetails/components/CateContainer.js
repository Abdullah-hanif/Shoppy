import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DummyText } from "../../../constants/dummyText";
import { Entypo } from "@expo/vector-icons";
import { COLORS, FontFamily } from "../../../constants/colors";
import { scaleFontSize } from "../../../utils/scaleFontSize";

const CateContainer = () => {
	return (
		<>
			<TouchableOpacity style={styles.container}>
				<Text style={styles.txtStyle}>{DummyText.Ordenar_por}</Text>
				<Entypo
					name="chevron-small-down"
					color={COLORS.white}
					size={30}
				/>
			</TouchableOpacity>
		</>
	);
};

export default CateContainer;

const styles = StyleSheet.create({
	container: {
		borderColor: COLORS.secoundry,
		borderWidth: 1,
		padding: 5,
		margin: 5,
		borderRadius: 30,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row"
	},
	txtStyle: {
		color: COLORS.white,
        fontFamily:FontFamily.Outfit_Medium
	}
});
