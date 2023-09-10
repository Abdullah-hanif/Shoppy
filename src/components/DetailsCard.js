import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FontFamily } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { responsiveFontSize } from "../utils/responsiveFontSize";

const DetailsCard = ({orange}) => {
	return (
		<View style={styles.container}>
			<View style={styles.firstLine}>
				<View style={styles.nestedContaine1}>
					<Text style={styles.name}>Manish Sharma</Text>
					<View style={styles.hogarStyle}>
						<Text style={styles.nestedContainerTxt}>H O G A R</Text>
					</View>
				</View>
				<Text>Switch</Text>
			</View>
			<View>
				<Text style={styles.addressStyle}>
					Acw - 103, New York City, Indore, Indore 452020. India
				</Text>
			</View>
			<View style={styles.phoneContainer}>
				{/* <AntDesign name="phone" size={20} color={COLORS.darkOrange} /> */}
                <Image style={{height:20,width:20}} resizeMode="contain" source={orange? require("../assets/Images/orangePhone.png"):require("../assets/Images/yellowPhone.png")}/>
				<Text  style={styles.addressStyle}>9131398955</Text>
			</View>
		</View>
	);
};

export default DetailsCard;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		backgroundColor: COLORS.white,
		padding: 10,
		borderRadius: 10
	},
	firstLine: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	nestedContaine1: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10
	},
	hogarStyle: {
		left: 10,
		backgroundColor: COLORS.lightGry,
		padding: 5,
		borderRadius: 30
	},
	phoneContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 10,
        // backgroundColor:"red",
        justifyContent:"space-between"
        ,width:Dimensions.get("screen").width/3.5,
        flexWrap:"wrap"
	},
    name:{
        fontFamily:FontFamily.Outfit_Bold,
        fontSize:responsiveFontSize(16),
        color:COLORS.black
    },
    nestedContainerTxt:{
        fontFamily:FontFamily.Outfit_SemiBold,
        fontSize:responsiveFontSize(16),
        color:COLORS.gray
    },
    addressStyle:{
        fontFamily:FontFamily.Outfit_Regular,
        fontSize:responsiveFontSize(16),
        color:COLORS.black
    }
});
