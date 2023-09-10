import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
	EvilIcons,
	Entypo,
	AntDesign,
	MaterialCommunityIcons,
	Feather,
	SimpleLineIcons
} from "@expo/vector-icons";
import { COLORS, FontFamily } from "../constants/colors";
import { scaleFontSize } from "../utils/scaleFontSize";
import { responsiveFontSize } from "../utils/responsiveFontSize";

const MainHeader = ({ location, listIcon }) => {
	return (
		<View style={styles.container}>
			<Image
				resizeMode="contain"
				style={styles.imgStyle}
				source={require("../assets/Images/logo.png")}
			/>

			{location ? (
				<View style={styles.secoundContainer}>
					<EvilIcons
						name="location"
						color={COLORS.secoundry}
						size={25}
					/>
					<Text style={styles.txtStyle}>Sevilla, Spn</Text>
					<Entypo
						name="chevron-small-down"
						color={COLORS.gray}
						size={30}
					/>
				</View>
			) : (
				<View />
			)}
			{!listIcon ? (
				<MaterialCommunityIcons
					name="filter-outline"
					color={COLORS.secoundry}
					size={30}
				/>
			) : (
				<View style={styles.listIcon}>
					<Feather name="camera" color={COLORS.secoundry} size={25} />
					<SimpleLineIcons
						name="microphone"
						color={COLORS.secoundry}
						size={25}
					/>
					<AntDesign
						name="search1"
						color={COLORS.secoundry}
						size={25}
					/>
					<View>
<View style={{height:15,width:15,position:"absolute",alignSelf:"flex-end",bottom:15,left:15, backgroundColor:"white",justifyContent:"center",alignItems:"center",borderRadius:30}}>
	<Text style={{fontFamily:FontFamily.Outfit_Bold,fontSize:responsiveFontSize(10),color:COLORS.black}}>5</Text>
	</View>
					<SimpleLineIcons
						name="handbag"
						color={COLORS.secoundry}
						size={25}
					/>
					</View>
				</View>
			)}
		</View>
	);
};

export default MainHeader;

const styles = StyleSheet.create({
	container: {
		padding: 1,

		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 5
	},
	imgStyle: {
		height: 100,
		width: 100
	},
	secoundContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	txtStyle: {
		fontFamily: FontFamily.Outfit_Medium,
		color: COLORS.lightWhite
	},
	listIcon: {
		justifyContent:"space-between",
		width:"50%",
		flexDirection: "row",
		padding: 10
	}
});
