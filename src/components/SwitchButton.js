import React, { useState } from "react";
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Animated,
	Dimensions
} from "react-native";
import { COLORS } from "../constants/colors";

const CustomSwitchButton = () => {
	const [isOn, setIsOn] = useState(false);
	const toggleAnim = new Animated.Value(isOn ? 1 : 0);
	const Width = Dimensions.get("screen").width;

	const toggleSwitch = () => {
		setIsOn(!isOn);
		Animated.timing(toggleAnim, {
			toValue: isOn ? 0 : 1,
			duration: 300,
			useNativeDriver: false
		}).start();
	};

	const circleTranslateX = toggleAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, -65]
	});

	return (
		<TouchableOpacity style={{ marginVertical: 20 }} onPress={toggleSwitch}>
			<View
				style={[
					styles.switchButton,
					{ backgroundColor: isOn ? "black" : "#ccc" }
				]}
			>
				<Animated.View
					style={[
						styles.circle,
						{
							backgroundColor: isOn
								? COLORS.secoundry
								: COLORS.white,
							transform: [{ translateX: circleTranslateX }]
						}
					]}
				>
					<View
						style={{
							height: 15,
							width: 15,
							backgroundColor: COLORS.black,
							borderRadius: 30
						}}
					/>
				</Animated.View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	switchButton: {
		width: 100,
		height: 40,
		borderRadius: 30,
		justifyContent: "center"
	},
	circle: {
		// borderWidth:5,
		borderColor: "black",
		justifyContent: "center",
		alignItems: "center",

		width: 26,
		height: 26,
		borderRadius: 13,
		alignSelf: "flex-end",
		margin: 2
	}
});

export default CustomSwitchButton;
