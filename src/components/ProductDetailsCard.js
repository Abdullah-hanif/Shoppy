import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { scaleFontSize } from "../utils/scaleFontSize";
import { calculatePercentageDimension } from "../utils/calculatePercentageDimension";
import { COLORS, FontFamily } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { responsiveFontSize } from "../utils/responsiveFontSize";
const ProductDetailsCard = ({showcounter,showDeleteIcon}) => {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginVertical: 15
				}}
			>
				<View style={styles.container}>
					<View style={styles.container1}>
						<Image
							style={styles.imgStyle}
							source={require("../assets/Images/shirt.png")}
						/>
					</View>
					<View style={styles.container2}>
						<View>
							<Text style={styles.txtStyle}>
								Estilo Espectáculo
							</Text>
							<Text
								style={[
									styles.txtStyle,
									{ fontSize: responsiveFontSize(8) }
								]}
							>
								Cuello Redondo Estampado Hombre
							</Text>
						</View>
						<Text
							style={[
								styles.txtStyle,
								{
									fontSize: responsiveFontSize(23),
									fontFamily: FontFamily.Outfit_Bold
								}
							]}
						>
							$ 599.00
						</Text>
					</View>

				{showcounter?	<CounterContainer />:<View />}
				</View>
			{showDeleteIcon?	<TouchableOpacity>
					<AntDesign name="delete" color={COLORS.white} size={22} />
				</TouchableOpacity>:<View />}
			</View>
		</>
	);
};

const CounterContainer = () => {
  const [counter,setCounter]=useState(1)
	return (
		<>
			<View
				style={{
					backgroundColor: COLORS.secoundry,
					padding: 15,
					borderRadius: 30,
					justifyContent: "space-between",
          alignItems:"center"
				}}
			>
        <TouchableOpacity onPress={()=>setCounter(counter +1)}>
				<Text style={styles.counterStyle}>+</Text>
        </TouchableOpacity>
				<Text style={styles.counterStyle}>{counter}</Text>
        <TouchableOpacity onPress={()=>setCounter(counter -1)}>

				<Text style={styles.counterStyle}>-</Text>
        </TouchableOpacity>
			</View>
		</>
	);
};

export default ProductDetailsCard;

const styles = StyleSheet.create({
	container: {
		// borderColor:"white",
		// borderWidth:1,
		flexDirection: "row",
		width: "85%",
		// alignItems:"center",
		justifyContent: "space-between"
	},
	container1: {
		backgroundColor: "white",
		padding: scaleFontSize(45),
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		width: calculatePercentageDimension(15),
		height: calculatePercentageDimension(15)
	},
	container2: {
		// backgroundColor:"red",

		justifyContent: "space-between"
	},
	imgStyle: {
		// resizeMode:"contain",
		width: calculatePercentageDimension(20),
		height: calculatePercentageDimension(20)
	},
	txtStyle: {
		fontSize: scaleFontSize(17),
		fontFamily: FontFamily.Outfit_Medium,
		color: COLORS.white
	},
	counterStyle: {
		fontSize: scaleFontSize(16),
		fontFamily: FontFamily.Outfit_SemiBold,
		color: COLORS.white
	}
});
