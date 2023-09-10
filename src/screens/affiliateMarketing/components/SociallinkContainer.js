import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FontFamily } from "../../../constants/colors";
import { scaleFontSize } from "../../../utils/scaleFontSize";
import { responsiveFontSize } from "../../../utils/responsiveFontSize";
import { SocialIcons } from "../../../constants/dummyText";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const SociallinkContainer = () => {
	return (
		<>
			<View
				style={{
					padding: scaleFontSize(10),
					backgroundColor: COLORS.lightBlack,
					borderWidth: .5,
					borderRadius: 10,
					borderColor: COLORS.gray,
					marginVertical: 20
				}}
			>
				<Text
					style={{
						fontFamily: FontFamily.Outfit_Regular,
						fontSize: responsiveFontSize(16),
						color: COLORS.white
					}}
				>
					Tu enlace personalizado, puedes compartir{"\n"} con amigos
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginVertical: 20,
						alignItems: "center"
					}}
				>
					<View style={{ flexDirection: "row" }}>
						{SocialIcons.map((data, index) => {
							return (
								<>
									<TouchableOpacity>
										<Image
											style={{
												height: 30,
												width: 30,
												margin: 5,
												resizeMode: "contain"
											}}
											source={data.iconUri}
										/>
									</TouchableOpacity>
								</>
							);
						})}
					</View>

					<TouchableOpacity>
						<Entypo
							name="dots-three-horizontal"
							color={COLORS.white}
							size={scaleFontSize(25)}
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						padding: scaleFontSize(7),
						backgroundColor: COLORS.white,
						borderWidth: 1,
						borderRadius: 30,
						borderColor: COLORS.gray,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							fontSize: responsiveFontSize(16),
							color: COLORS.black,
							textDecorationLine: "underline"
						}}
					>
						bit.lyecommercedelapp
					</Text>
					<TouchableOpacity>
						{/* <MaterialCommunityIcons
							name="content-copy"
							color={COLORS.black}
							size={scaleFontSize(25)}
						/> */}
						<Image
							style={{
								height: 30,
								width: 30,
								margin: 5,
								resizeMode: "contain"
							}}
							source={require("../../../assets/icons/copy.png")}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default SociallinkContainer;

const styles = StyleSheet.create({});
