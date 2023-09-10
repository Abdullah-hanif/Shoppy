import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DummyText } from "../constants/dummyText";
import { COLORS, FontFamily } from "../constants/colors";

const ButtonComp = ({ name, onpress ,color,txtCOLOR}) => {
	return (
		<>
			<TouchableOpacity
				onPress={onpress}
				style={{
					padding: 15,
					backgroundColor:color?color: COLORS.black,
					borderRadius: 30,
					marginVertical:10
					// flexDirection: "row",
					// justifyContent: "space-between",
				}}
			>
				<Text
					style={{
						color:txtCOLOR?txtCOLOR: COLORS.white,
						textAlign: "right",
						fontFamily:FontFamily.Outfit_SemiBold,
						textDecorationLine: "underline"
					}}
				>
					{name}
				</Text>
			</TouchableOpacity>
		</>
	);
};

export default ButtonComp;

const styles = StyleSheet.create({});
