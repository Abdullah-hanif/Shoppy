import {
	Alert,
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import React from "react";
import { scaleFontSize } from "../../../utils/scaleFontSize";
import { COLORS, FontFamily } from "../../../constants/colors";
import { useState } from "react";

const SizeComp = () => {
	const [check, setCheck] = useState(1);

	const checkClicked = (id) => {
		if (check != id) {
			setCheck(id);
		} else {
			Alert.alert("already check");
		}
	};
	const Sizes = [
		{
			id: 1,

			size: "sm"
		},
		{
			id: 2,

			size: "md"
		},
		{
			id: 3,

			size: "lg"
		},
		{
			id: 4,

			size: "xl"
		},
		{
			id: 5,

			size: "xxl"
		}
	];
	return (
		<View>
			<Text style={styles.txtStyle}>Tallas</Text>
			<FlatList
				data={Sizes}
				key={Math.random() * 1000}
				horizontal
				renderItem={(data) => {
					return (
						<>
							<TouchableOpacity
								onPress={() => checkClicked(data.item.id)}
								style={[
									styles.container,
									{
										backgroundColor:
											check != data.item.id
												? null
												: COLORS.white,
										borderWidth:
											check != data.item.id ? 1 : 5
                                        ,
                                        borderColor:
											check != data.item.id ? COLORS.white : COLORS.lightGry
									}
								]}
							>
								<Text
									style={[
										styles.txtStyle,
										{
											fontFamily:
												FontFamily.Outfit_Regular,
											fontSize: scaleFontSize(13),
                                            color:check != data.item.id ? COLORS.white : COLORS.black
										}
									]}
								>
									{data.item.size}
								</Text>
							</TouchableOpacity>
						</>
					);
				}}
			/>
		</View>
	);
};

export default SizeComp;

const styles = StyleSheet.create({
	container: {
		// padding:10,
		borderRadius: 5,
		borderColor: COLORS.white,
		justifyContent: "center",
		alignItems: "center",

		borderWidth: 1,
		margin: 5,
		// margin:5,
		height: 35,
		width: 35
	},
	txtStyle: {
		fontSize: scaleFontSize(16),
		fontFamily: FontFamily.Outfit_SemiBold,
		color: COLORS.white
	}
});
