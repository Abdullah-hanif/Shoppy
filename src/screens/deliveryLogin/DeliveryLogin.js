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

// @ICONS
import { FontAwesome } from "@expo/vector-icons";
import HeaderCheck from "../../components/HeaderCheck";
import Wrapper from "../../components/Wrapper";
import HeaderLogin from "../languageSelection/components/HeaderLogin";
import ButtonComp from "../../components/ButtonComp";
import { COLORS, FontFamily } from "../../constants/colors";
import { DummyText } from "../../constants/dummyText";
import { scaleFontSize } from "../../utils/scaleFontSize";
import { responsiveFontSize } from "../../utils/responsiveFontSize";
import TextInputContainer from "../../components/TextInputContainer";

const DeliveryLogin = ({ navigation }) => {

	const renderFirstComponent = () => {
		return (
			<>
				<View style={styles.container}>
					<View
						style={{
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Image
							style={styles.imgStyle}
							source={require("../../assets/Images/logo.png")}
						/>
						<View style={styles.txtContainer}>
							<Text style={styles.textStyle}>
								Active
								<Text
									style={{
										fontFamily: FontFamily.Outfit_Bold
									}}
								>
									eCommerce
								</Text>
							</Text>
							<Text style={styles.textStyle}>
								<Text
									style={{
										fontFamily: FontFamily.Outfit_Bold
									}}
								>
									Delivery
								</Text>
								App
							</Text>
						</View>
					</View>
				</View>
			</>
		);
	};

	const renderSecoundComponent=()=>{
		return(
			<>
			<View style={styles.secoundContainer}>
					<View style={{ width: "85%" }}>
						<Text style={styles.firstHeading}>
							Inicie sesión
							<Text style={{ color: COLORS.white }}>
								en la aplicación de entrega de Shopy
							</Text>
						</Text>
					</View>
					<View>
						<Text>Email</Text>
						<TextInputContainer placeholder="jhondoe@gmail.com" />
						<Text
							style={{
								textDecorationLine: "underline",
								fontSize: responsiveFontSize(10),
								textAlign: "right",
								color: COLORS.white,
								fontFamily: FontFamily.Outfit_Bold
							}}
						>
							o, Iniciar sesión con un número de teléfono
						</Text>
					</View>
					<View>
						<Text>Password</Text>
						<TextInputContainer 	placeholder="*** **** ***" showEyeICon={true}/>
						<ButtonComp
							onpress={() =>
								navigation.navigate("DrawerNavigatior")
							}
							name={DummyText.Omitir_seleccionar_más_tarde}
						/>
					</View>

					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							padding: scaleFontSize(20)
						}}
					>
						<Text
							style={{
								fontSize: responsiveFontSize(12),
								color: COLORS.black,
								fontFamily: FontFamily.Outfit_Regular
							}}
						>
							Si tiene algún problema al iniciar sesión
						</Text>

						<Text
							style={{
								fontSize: responsiveFontSize(12),
								color: COLORS.black,
								fontFamily: FontFamily.Outfit_Regular
							}}
						>
							por favor póngase en contacto a continuación
						</Text>
						<FontAwesome
							name="envelope-o"
							size={25}
							color={COLORS.white}
						/>
						<Text
							style={{
								textDecorationLine: "underline",
								fontSize: responsiveFontSize(12),
								color: COLORS.white,
								fontFamily: FontFamily.Outfit_Bold
							}}
						>
							help.deliveryapp@shopy.com
						</Text>
					</View>
				</View>
			</>
		)
	}
	return (
		<>
			<Wrapper>
				{renderFirstComponent()}
				{renderSecoundComponent()}
			</Wrapper>
		</>
	);
};

export default DeliveryLogin;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	secoundContainer: {
		flex: 2.5,
		backgroundColor: COLORS.secoundry,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		padding: scaleFontSize(20)
		// paddingVertical: 50,
	},
	imgStyle: {
		height: scaleFontSize(100),
		width: scaleFontSize(150),
		alignSelf: "center",
		justifyContent: "center",
		resizeMode: "contain"
	},
	txtContainer: {
		justifyContent: "center",
		alignItems: "center"
	},
	textStyle: {
		color: COLORS.white,
		fontFamily: FontFamily.Outfit_Regular,
		fontSize: responsiveFontSize(16)
	},
	firstHeading: {
		fontFamily: FontFamily.Outfit_Regular,
		fontSize: responsiveFontSize(20)
	}
});
