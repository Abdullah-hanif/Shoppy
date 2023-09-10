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
import TextInputContainer from "../../components/TextInputContainer";
import ButtonComp from "../../components/ButtonComp";

import { Entypo, AntDesign, Foundation } from "@expo/vector-icons";

const MyDeleveries = ({ navigation }) => {
	const rendetFooterComponent = () => {
		return (
			<>
				<Text style={styles.title}>
					Entrega
					<Text
						style={{
							color: COLORS.white
						}}
					>
						  Completada
					</Text>
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between"
					}}
				>
					
					<DropdownContainer />
					
					<DropdownContainer />
					
				</View>

				<CardConntainner
					onpress={() =>{ navigation.navigate("DrawerNavigatior",{screen:"Pending"}),{draweOpen:navigation}}}
				/>
				<CardConntainner />
				<CardConntainner />

				{/* //Section 3 */}

				<ButtonComp
					color={COLORS.secoundry}
					txtCOLOR={COLORS.black}
					name={"Actualización del perfil"}
				/>
			</>
		);
	};

	const rendetHeaderComponent = () => {
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
				<View style={{ margin: 10 }}>
					<FlatList
						ListFooterComponentStyle={{ marginBottom: 100 }}
						ListFooterComponent={rendetFooterComponent()}
						ListHeaderComponent={rendetHeaderComponent()}
					/>
				</View>
				{/* </ScrollView> */}
				{/* </View> */}
			</Wrapper>
		</>
	);
};

const DropdownContainer = () => {
	return (
		<>
		<View style={{	width: "45%",justifyContent:"center"}}>
		<Text style={{fontSize: responsiveFontSize(15),
		fontFamily: FontFamily.Outfit_Regular,
		color: COLORS.lightGry,marginVertical:5}}>Nombre del filtro</Text>
			<TouchableOpacity
				style={{
					backgroundColor: COLORS.white,
					padding: 15,
					// width: "45%",
				
					borderRadius: 20,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems:"center"
				}}
			>
				<Text>Todo</Text>
			<AntDesign name="down" size={20}/>
			</TouchableOpacity>
			</View>
		</>
	);
};

export const CardConntainner = ({
	onpress,
	showPayment,
	showLeftBottomDetail
}) => {
	return (
		<>
			<TouchableOpacity
				onPress={onpress}
				style={{
					backgroundColor: COLORS.darkBlackColor,
					marginVertical: 10,
					borderRadius: 10,
					borderWidth: 1,
					borderColor: COLORS.white
				}}
			>
				<View
					style={{
						margin: 10,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<View>
						<Text
							style={{
								fontSize: responsiveFontSize(13),
								color: COLORS.lightGry,
								fontFamily: FontFamily.Outfit_Bold
							}}
						>
							Código de orden
						</Text>
						<Text
							style={{
								fontSize: responsiveFontSize(17),
								color: COLORS.white,
								fontFamily: FontFamily.Outfit_Bold
							}}
						>
							2020155-08093919
						</Text>
						<Text
							style={{
								fontSize: responsiveFontSize(13),
								color: COLORS.lightGry,
								fontFamily: FontFamily.Outfit_Bold
							}}
						>
							Estado de pago
						</Text>
					</View>
					<View>
						<Text
							style={{
								fontSize: responsiveFontSize(35),
								color: COLORS.white,
								fontFamily: FontFamily.Outfit_Bold
							}}
						>
							3450.00
						</Text>
					</View>
				</View>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<View
						style={{
							backgroundColor: COLORS.purple,
							flexDirection: "row",
							alignItems: "center",
							padding: 10,
							borderRadius: 20,
							paddingHorizontal: 20
						}}
					>
						<Foundation
							name="paypal"
							size={20}
							color={COLORS.white}
						/>

						<Text
							style={{
								fontSize: responsiveFontSize(13),
								color: COLORS.white,
								fontFamily: FontFamily.Outfit_Regular
							}}
						>
							Paypal
						</Text>
					</View>
					<Entypo name="cross" size={25} color={COLORS.secoundry} />
				</View>
				<View
					style={{
						marginTop: scaleFontSize(20),
						backgroundColor: COLORS.secoundry,
						flexDirection: "row",
						justifyContent: "space-between",
						padding: scaleFontSize(10),
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10
					}}
				>
					<Text
						style={{
							fontSize: responsiveFontSize(13),
							color: COLORS.white,
							fontFamily: FontFamily.Outfit_Light
						}}
					>
						07/05/2023
					</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center"
						}}
					>
						<Text
							style={{
								fontSize: responsiveFontSize(13),
								color: COLORS.white,
								fontFamily: FontFamily.Outfit_Regular
							}}
						>
							Ver detalles{" "}
						</Text>
						<Text
							style={{
								fontSize: responsiveFontSize(13),
								color: COLORS.white,
								fontFamily: FontFamily.Outfit_Regular
							}}
						>
							{" "}
							|{" "}
						</Text>
						<Text
							style={{
								fontSize: responsiveFontSize(13),
								color: COLORS.white,
								fontFamily: FontFamily.Outfit_Regular
							}}
						>
							Entregado{" "}
						</Text>
						<AntDesign
							name="checkcircle"
							size={20}
							color={COLORS.white}
						/>
					</View>
				</View>
			</TouchableOpacity>
		</>
	);
};

export default MyDeleveries;

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
	
});
