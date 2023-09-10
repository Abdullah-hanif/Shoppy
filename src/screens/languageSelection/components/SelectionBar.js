import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FontFamily } from '../../../constants/colors'
import {AntDesign} from "@expo/vector-icons"

const SelectionBar = () => {
	return (
		<View
			style={{
				padding: 10,
				backgroundColor: COLORS.white,
				borderRadius: 30,
alignItems:"center",
				flexDirection: "row",
				justifyContent: "space-between"
			}}
		>
			<Text
				style={{ fontFamily: FontFamily.Outfit_Medium,  }}
			>
				Spanish
			</Text>
			<AntDesign name='checksquare' color={COLORS.black} size={25}/>
		</View>
	);
};

export default SelectionBar

const styles = StyleSheet.create({})