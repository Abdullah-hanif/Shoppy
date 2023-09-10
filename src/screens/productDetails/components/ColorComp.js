import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import React from "react";
import { COLORS, FontFamily } from "../../../constants/colors";
import { scaleFontSize } from "../../../utils/scaleFontSize";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const ColorComp = () => {
	const [check, setCheck] = useState(1);

	const checkClicked = (id) => {
		if (check != id) {
			setCheck(id);
		} else {
			Alert.alert("already check");
		}
	};
	const Colors = [
		{
			id: 1,
			color: COLORS.white,
			name: "wlataf"
		},
		{
			id: 2,
			color: COLORS.yellow
		},
		{
			id: 3,
			color: COLORS.green
		},
		{
			id: 4,
			color: COLORS.red
		},
		{
			id: 5,
			color: COLORS.white
		},
		{
			id: 6,
			color: COLORS.graycolor
		},
		{
			id: 7,
			color: COLORS.pink
		},
		{
			id: 8,
			color: COLORS.blue
		}
	];
	return (
		<View>
			<Text style={styles.txtStyle}>Colores:</Text>
			<FlatList
				data={Colors}
				key={Math.random() * 1000}
				numColumns={4}
				renderItem={(data) => {
					return (
						<>
							<TouchableOpacity
								onPress={() => checkClicked(data.item.id)}
								style={[
									styles.container,
									{
										// backgroundColor: data.item.color,
										backgroundColor:
											check != data.item.id
												? data.item.color
												: data.item.color,
										borderWidth:
											check != data.item.id ? null : 5,
										borderColor:
											check != data.item.id
												? null
												: COLORS.darkOrange
									}
								]}
							>
								{check == data.item.id && (
									<AntDesign
										name="check"
										color={COLORS.black}
									/>
								)}
							</TouchableOpacity>
						</>
					);
				}}
			/>
		</View>
	);
};

export default ColorComp;

const styles = StyleSheet.create({
	container: {
		// padding:10,
		borderRadius: 5,
		height: 30,
		margin: 5,
		justifyContent: "center",
		alignItems: "center",
		// margin:5,
		width: 30
	},
	txtStyle: {
		fontSize: scaleFontSize(16),
		fontFamily: FontFamily.Outfit_SemiBold,
		color: COLORS.white
	}
});
