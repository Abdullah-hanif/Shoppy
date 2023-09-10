import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FontFamily } from '../constants/colors';
import {AntDesign} from "@expo/vector-icons"

const SmallBox = ({name}) => {
	return (
		<>
			<View
				style={{
					backgroundColor: "white",
					width: "45%",
					padding: 10,
					margin: 1,
					borderRadius: 30,
                
					justifyContent: "space-between",
					flexDirection: "row"
				}}
			>
				<Text style={{fontFamily: FontFamily.Outfit_Medium}}>{name}</Text>
				<AntDesign name='plussquare' color={COLORS.green} size={20}/>
			</View>
		</>
	);
};


export default SmallBox

const styles = StyleSheet.create({})