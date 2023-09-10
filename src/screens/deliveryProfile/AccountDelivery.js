import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import { scaleFontSize } from "../../utils/scaleFontSize";
import { COLORS, FontFamily } from "../../constants/colors";
import { responsiveFontSize } from "../../utils/responsiveFontSize";
import ImgCircle from "./components/ImgCircle";
import TextInputContainer from "../../components/TextInputContainer";
import ButtonComp from "../../components/ButtonComp";
import {MaterialIcons} from "@expo/vector-icons"

const AccountDelivery = ({ navigation }) => {

	const renderFooterComponent = () => {
		return (
			<>
				<Text style={styles.title}>
					Account
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Light,
							color: COLORS.white
						}}
					>
						Information
					</Text>
				</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center"
					}}
				>
					<ImgCircle />
					<View>
						<View
							style={{
								flexDirection: "row",
								left: 10,
								alignItems: "center",
								marginVertical: 5
							}}
						>
							<View
								style={{
									backgroundColor: COLORS.secoundry,
									borderRadius: 30,
									height: 30,
									width: 30,
									justifyContent: "center",
									alignItems: "center"
								}}
							>
								<MaterialIcons
									name="loop"
									color={COLORS.white}
									size={20}
								/>
								{/* <Image
														resizeMode="contain"
														style={{
															height: 40,
															width: 40
														}}
														source={require("../../assets/Images/Delivery.png")}
													/> */}
							</View>
							<Text
								style={{
									color: COLORS.white,
									left: 5
								}}
							>
								Actualizar imagen
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								left: 10,
								alignItems: "center"
							}}
						>
							<View
								style={{
									backgroundColor: COLORS.secoundry,
									borderRadius: 30,
									height: 30,
									width: 30,
									justifyContent: "center",
									alignItems: "center"
								}}
							>
								<Image
									resizeMode="contain"
									style={{
										height: 20,
										width: 20
									}}
									source={require("../../assets/icons/delete.png")}
								/>
							</View>
							<Text
								style={{
									color: COLORS.white,
									left: 5
								}}
							>
								Borrar Image
							</Text>
						</View>
					</View>
				</View>

				{/* //Section 3 */}
				<View style={{ marginVertical: 20 }}>
					<Text style={styles.placeholderTitle}>Email ID</Text>
					<TextInputContainer
						placeholderTextColor={COLORS.black}
						extracstyle={{ color: COLORS.black }}
						placeholder="jhondoe@gmail.com"
				
					/>
					<Text style={styles.placeholderTitle}>Password</Text>
					<TextInputContainer
						placeholderTextColor={COLORS.black}
						extracstyle={{ color: COLORS.black }}
						showEyeICon={true}
						placeholder={"********"}
						eyeColor={COLORS.secoundry}
					/>
					<Text style={styles.placeholderTitle}>
						Re-type Password
					</Text>
					<TextInputContainer
						placeholderTextColor={COLORS.black}
						extracstyle={{ color: COLORS.black }}
						showEyeICon={true}
						
						eyeColor={COLORS.secoundry}
						placeholder={"*********"}
					/>
				</View>
				<ButtonComp
					color={COLORS.secoundry}
					txtCOLOR={COLORS.black}
					name={"Actualización del perfil"}
				/>
			</>
		);
	};


	const renderHeaderComponent = () => {
		return (
			<>
				<View style={styles.container}>
					<View style={styles.headerContainer}>
						<TouchableOpacity
							onPress={() => navigation.openDrawer()}
						>
							<Image
								style={[
									styles.imgStyle,
									{
										height: scaleFontSize(30),
										width: scaleFontSize(30)
									}
								]}
								source={require("../../assets/Images/Dashboard.png")}
							/>
						</TouchableOpacity>
						<Image
							style={styles.imgStyle}
							source={require("../../assets/Images/logo.png")}
						/>
						<View />
					</View>
				</View>
			</>
		);
	};
	return (
		<>
			<Wrapper>
				<Image
					style={styles.bgImgStyle}
					source={require("../../assets/Images/profileBg.png")}
				/>
				<View style={{ margin: 10 }}>
					<FlatList
					showsVerticalScrollIndicator={false}
						ListFooterComponentStyle={{ marginBottom: 100 }}
						ListHeaderComponent={renderHeaderComponent()}
						ListFooterComponent={renderFooterComponent()}
					/>
				</View>
				{/* </ScrollView> */}
				{/* </View> */}
			</Wrapper>
		</>
	);
};

export default AccountDelivery;

const styles = StyleSheet.create({
	container: {
		// margin: 10
	},
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	imgStyle: {
		// height: scaleFontSize(200),
		width: scaleFontSize(150),

		resizeMode: "contain"
	},
	title: {
		fontSize: responsiveFontSize(30),
		fontFamily: FontFamily.Outfit_Bold,
		color: COLORS.secoundry
	},
	bgImgStyle: {
		resizeMode: "contain",
		position: "absolute",
		bottom: 0,
		height: Dimensions.get("screen").height / 3,
		width: Dimensions.get("screen").width
	},
	placeholderTitle:{
		fontSize: responsiveFontSize(15),
		fontFamily: FontFamily.Outfit_SemiBold,
		color: COLORS.lightGry
	}
});
