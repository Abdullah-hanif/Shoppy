import {
	Alert,
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import React, { useState } from "react";
import { COLORS, FontFamily } from "../../../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { DummyText } from "../../../constants/dummyText";
import { scaleFontSize } from "../../../utils/scaleFontSize"; 

const CategoryContainer = ({iconUri,index,title,id}) => {
	const [active, setActive] = useState(false);
	const [check, setCheck] = useState(1);

	const checkClicked = (id) => {
		if (check == id) {
			setCheck(id);
		} else {
			setCheck(id)
		}
	};
	return (
		<>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<TouchableOpacity
				onPress={() => checkClicked(id)}
					style={[
						styles.container,
						{ 
						 backgroundColor:check != id ? COLORS.white:COLORS.secoundry
							// backgroundColor: index==0
							// 	? COLORS.secoundry
							// 	: COLORS.white
						}
					]}
				>
					<Image source={iconUri} style={[styles.imgStyle,{tintColor:check != id ? COLORS.black:COLORS.white}]} />

					{/* <AntDesign
						name="creditcard"
						color={active ? COLORS.white : COLORS.gray}
						size={30}
					/> */}
				</TouchableOpacity>
				<View
					style={{
						width: Dimensions.get("screen").width - 300,
						margin: 5
					}}
				>
					<Text style={styles.txtStyle}>
						{title}
					</Text>
				</View>
			</View>
		</>
	);
};

export default CategoryContainer;

const styles = StyleSheet.create({
	container: {
		// height:Dimensions.get("screen").height *0.10,
		// width:Dimensions.get("screen").width *0.22,
		height: 70,
		width: 70,
		margin: 10,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center"
	},
	txtStyle: {
		color: COLORS.white,
		textAlign:"center",
		fontSize:scaleFontSize(11),
		fontFamily: FontFamily.Outfit_Medium
	},
	imgStyle:{
		height:30,width:30,
		resizeMode:"contain"
	}
});
