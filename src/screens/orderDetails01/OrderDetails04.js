import {
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Dimensions,
	Image
} from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { COLORS, FontFamily } from "../../constants/colors";
import { DummyText } from "../../constants/dummyText";
import { scaleFontSize } from "../../utils/scaleFontSize";
import Wrapper from "../../components/Wrapper";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonComp from "../../components/ButtonComp";

import { responsiveFontSize } from "../../utils/responsiveFontSize";
import Card from "../../components/Card";
import HeaderCheck from "../../components/HeaderCheck";
import DetailsCard from "../../components/DetailsCard";
import PaymentOptions from "./components/PaymentOptions";

const OrderDetails04 = ({ navigation }) => {
	return (
		<Wrapper>
			<View style={styles.container}>
				<MainHeader location={false} listIcon={true} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<HeaderCheck
						activeStep={false}
						doneStep={true}
						notVisited={false}
					/>

					<View style={styles.sectionOne}>
						<Text style={styles.txtStyle}>
							{DummyText.All_Other_Payment_Options}
						</Text>
					</View>
					<View>
						<View style={styles.paymentOptionContainer}>
							<PaymentOptions showIcon={true} title="UPI" />
							<PaymentOptions
								showIcon={true}
								title="Monedero / Pospago"
								subtitle=""
							/>
							<PaymentOptions
								showIcon={false}
								title="Tarjeta de crédito/débito/cajero
automático"
								subtitle="Agregue y asegure su tarjeta según las pautas de RBI"
							/>
							<PaymentOptions
								showIcon={false}
								title="Banca Neta"
								subtitle="Este instrumento tiene poco éxito, use UPI o Tarjetas para una mejor experiencia"
							/>
							<PaymentOptions
								showIcon={true}
								title="Contra Reembolso (COD)"
								subtitle=""
							/>

							<Text style={styles.bottomText}>
								Pagos 100% seguros y protegidos
							</Text>
						</View>
					</View>

					<View>
						<Text style={styles.totalStyle}>Cantidad total:</Text>
						<View style={styles.priceCOntainer}>
							<Text style={styles.priceStyle}>599.00</Text>
							<Text style={styles.moneySymbol}>$</Text>
						</View>
					</View>

					{/* <VideoScreen /> */}
					<View
						style={{
							marginBottom:
								Dimensions.get("screen").height * 0.16,
							bottom: 0
						}}
					>
						<ButtonComp
							onpress={() => {
								// navigation.navigate("ProductVideo");
								// refRBSheet.current.close();
							}}
							name={DummyText.añadir_a_la_cesta}
							txtCOLOR={COLORS.black}
							color={COLORS.secoundry}
						/>
					</View>
				</ScrollView>
			</View>
		</Wrapper>
	);
};

export default OrderDetails04;

const styles = StyleSheet.create({
	container: {
		margin: 10
	},
	sectionOne: {
		// backgroundColor:"blue",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 5
	},
	txtStyle: {
		fontFamily: FontFamily.Outfit_Medium,
		fontSize: scaleFontSize(14),
		color: COLORS.white
	},

	titleConainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},

	freeDeliveryStyle: {
		flexDirection: "row",
		// alignItems:"center",
		justifyContent: "space-between",
		// backgroundColor:"red",
		width: Dimensions.get("screen").width / 2
	},
	totalStyle: {
		marginTop: 10,
		fontFamily: FontFamily.Outfit_Regular,
		color: COLORS.gray,
		fontSize: responsiveFontSize(16)
	},
	priceCOntainer: {
		flexDirection: "row"
	},
	priceStyle: {
		fontFamily: FontFamily.Outfit_Bold,
		color: COLORS.white,
		fontSize: responsiveFontSize(55)
	},
	moneySymbol: {
		fontFamily: FontFamily.Outfit_Bold,
		color: COLORS.green,
		fontSize: responsiveFontSize(30)
	},
	paymentOptionContainer: {
		backgroundColor: COLORS.secoundry,
		borderRadius: 10
		// justifyContent:"center",
		// alignItems:"center"
	},
	bottomText: {
		textAlign: "center",
		paddingVertical: 10,
		fontFamily: FontFamily.Outfit_Bold,
		color: COLORS.white,
		fontSize: responsiveFontSize(13)
	}
});
