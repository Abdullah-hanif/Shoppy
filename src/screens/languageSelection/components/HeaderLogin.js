import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FontFamily } from '../../../constants/colors';
import { scaleFontSize } from '../../../utils/scaleFontSize';

const HeaderLogin = () => {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center"
				}}
			>
				<View />
				<Image
					resizeMode="contain"
					style={{ height: 150, width: 150 }}
					source={require("../../../assets/Images/logo.png")}
				/>
				<TouchableOpacity>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.white,
							textDecorationLine: "underline",
						
							fontSize: scaleFontSize(15),
							right: 10
						}}
					>
						Salter
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default HeaderLogin

const styles = StyleSheet.create({})