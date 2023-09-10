import {
	Dimensions,
	FlatList,
	Image,
	ScrollView,
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

const DeliveryDetails = ({ navigation }) => {
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
	const renderFooterComponent = () => {
		return (
			<>
				<Text style={styles.title}>
					Detalles
					<Text
						style={{
							color: COLORS.white
						}}
					>
						del pedido
					</Text>
				</Text>

				{/* //Section 2 */}
				{/* <View
										style={{
											flexDirection: "row",
											alignItems: "center",
											justifyContent: "space-between"
										}}
									> */}

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: "100%"
					}}
				>
					<YellowBox
						imagUri={require("../../assets/icons/tuckedOrder.png")}
						name="Orden "
						name1="Metido"
					/>
					<YellowBox
						imagUri={require("../../assets/icons/thumbup.png")}
						name="Orden"
						name1="Confirmado"
					/>
					<YellowBox
						imagUri={require("../../assets/icons/loader.png")}
						name="En "
						name1="Entrega"
					/>
					<YellowBox
						imagUri={require("../../assets/icons/doubleTick.png")}
						name="Orden "
						name1="Entregado"
					/>
				</View>

				{/* </View> */}
				<DetailContainer />

				{/* //indicator Line  */}
				<Text
					style={{
						fontFamily: FontFamily.Outfit_Medium,
						fontSize: scaleFontSize(16),
						color: COLORS.white
					}}
				>
					Productos pedidos{" "}
					<Text style={{ color: COLORS.secoundry }}> (02)</Text>
				</Text>
				<SingleContainer
					title={"Corte Slim Azul Marino Niño"}
					size={"1x - Red-L"}
					price={"4.00"}
				/>
				<SingleContainer
					title={"Body rojo sangre para niñass"}
					size={"2x - Yellow-L"}
					price={"7.00"}
				/>
				<Box3
					onPress={() => navigation.navigate("DrawerNavigatior",{screen:"DeliveryCollection"}) }
				/>
			</>
		);
	};
	return (
		<>
			<Wrapper>
				<View style={{ margin: 10 }}>
					<FlatList
						showsVerticalScrollIndicator={false}
						ListFooterComponentStyle={{ marginBottom: 100 }}
						ListFooterComponent={renderFooterComponent()}
						ListHeaderComponent={renderHeaderComponent()}
					/>
				</View>
				{/* </ScrollView> */}
				{/* </View> */}
			</Wrapper>
		</>
	);
};

const YellowBox = ({ name, imagUri, name1 }) => {
	return (
		<>
			<View style={{ alignItems: "center" }}>
				<View
					style={{
						padding: scaleFontSize(2),
						margin: 10,
						backgroundColor: COLORS.secoundry,
						borderRadius: 10,
						height: scaleFontSize(50),
						width: scaleFontSize(50),
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Image
						style={{
							height: scaleFontSize(25),
							width: scaleFontSize(25),
							resizeMode: "contain"
						}}
						source={imagUri}
					/>
				</View>
				<Text
					style={{
						fontFamily: FontFamily.Outfit_SemiBold,
						color: COLORS.gray,
						fontSize: responsiveFontSize(12)
					}}
				>
					{name}
				</Text>
				<Text
					style={{
						fontFamily: FontFamily.Outfit_SemiBold,
						color: COLORS.gray,
						fontSize: responsiveFontSize(12)
					}}
				>
					{name1}
				</Text>
			</View>
		</>
	);
};

const SingleContainer = ({ title, size, price }) => {
	return (
		<>
			<View
				style={{
					backgroundColor: COLORS.darkBlackColor,
					marginVertical: 10,
					borderRadius: 10,
					borderWidth: 1,
					borderColor: COLORS.white,

					justifyContent: "space-between",
					padding: 10
				}}
			>
				<Text
					style={{
						fontFamily: FontFamily.Outfit_SemiBold,
						color: COLORS.graycolor,
						fontSize: responsiveFontSize(15)
					}}
				>
					{title}
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between"
					}}
				>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Bold,
							color: COLORS.secoundry,
							fontSize: responsiveFontSize(16)
						}}
					>
						{size}
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Bold,
							color: COLORS.white,
							fontSize: responsiveFontSize(20)
						}}
					>
						{price}
					</Text>
				</View>
			</View>
		</>
	);
};

const DetailContainer = () => {
	return (
		<>
			<View
				style={{
					backgroundColor: COLORS.darkBlackColor,
					marginVertical: 10,
					borderRadius: 10,
					borderWidth: 1,
					borderColor: COLORS.white,
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 10
				}}
			>
				<View>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						Código de orden
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.secoundry,
							fontSize: responsiveFontSize(17)
						}}
					>
						2020155-08093919
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						Fecha de orden
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						11-06-2023
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						Estado de pago
					</Text>
					<View style={{ flexDirection: "row" }}>
						<AntDesign
							name="checkcircle"
							size={20}
							color={COLORS.secoundry}
						/>
						<Text
							style={{
								fontFamily: FontFamily.Outfit_SemiBold,
								color: COLORS.secoundry,
								fontSize: responsiveFontSize(14),
								left: 5
							}}
						>
							PAGADA
						</Text>
					</View>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						Dirección de envío
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						Nombre: Jesús
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						Email: jusulander@gmail.com
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						DIRECCIÓN:Nula
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						Ciudad: Nula
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						País: Nula
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						Teléfono: Nula
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14)
						}}
					>
						Nula Código Postal: Nula
					</Text>
				</View>
				<View>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14),
							textAlign: "right"
						}}
					>
						Estado de pago
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14),
							textAlign: "right"
						}}
					>
						hello
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14),
							textAlign: "right"
						}}
					>
						Estado de pago
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.white,
							fontSize: responsiveFontSize(14),
							textAlign: "right"
						}}
					>
						Dinero
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14),
							textAlign: "right"
						}}
					>
						Estado de entrega
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.white,
							fontSize: responsiveFontSize(14),
							textAlign: "right"
						}}
					>
						En camino
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.graycolor,
							fontSize: responsiveFontSize(14),
							textAlign: "right"
						}}
					>
						Estado de entrega
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.secoundry,
							fontSize: responsiveFontSize(50),
							textAlign: "right"
						}}
					>
						54.50
					</Text>
				</View>
			</View>
		</>
	);
};

const Box3 = ({ onPress }) => {
	return (
		<>
			<View
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
						justifyContent: "space-between",
						padding: scaleFontSize(10)
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between"
						}}
					>
						<View>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Bold,
									color: COLORS.white,
									fontSize: responsiveFontSize(13)
								}}
							>
								Subtotal
							</Text>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Regular,
									color: COLORS.white,
									fontSize: responsiveFontSize(16),
									marginVertical: 10
								}}
							>
								$ 11.00
							</Text>
						</View>
						<View>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Bold,
									color: COLORS.white,
									fontSize: responsiveFontSize(13)
								}}
							>
								Costo de envío
							</Text>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Regular,
									color: COLORS.white,
									fontSize: responsiveFontSize(16),
									marginVertical: 10
								}}
							>
								$ 0.00
							</Text>
						</View>
					</View>
					{/* =======================================> */}
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between"
						}}
					>
						<View>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Bold,
									color: COLORS.white,
									fontSize: responsiveFontSize(13)
								}}
							>
								Impuesto
							</Text>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Regular,
									color: COLORS.white,
									fontSize: responsiveFontSize(16),
									marginVertical: 10
								}}
							>
								$ 0.22
							</Text>
						</View>
						<View>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Bold,
									color: COLORS.white,
									fontSize: responsiveFontSize(13)
								}}
							>
								Descuento
							</Text>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Regular,
									color: COLORS.white,
									fontSize: responsiveFontSize(16),
									marginVertical: 10
								}}
							>
								$ 0.00
							</Text>
						</View>
					</View>

					{/* =======================================> */}
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between"
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.secoundry,
								padding: scaleFontSize(12),
								borderRadius: 20,
								justifyContent: "center",
								alignItems: "center",
								marginVertical: 10
							}}
						>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_SemiBold,
									color: COLORS.white,
									textDecorationLine: "underline",
									fontSize: responsiveFontSize(16)
								}}
							>
								Marcar como entregado
							</Text>
						</TouchableOpacity>
						<View>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Bold,
									color: COLORS.white,
									fontSize: responsiveFontSize(13)
								}}
							>
								Cantidad a cobrar
							</Text>
							<Text
								style={{
									fontFamily: FontFamily.Outfit_Bold,
									color: COLORS.secoundry,
									fontSize: responsiveFontSize(35),
									textAlign: "right"
								}}
							>
								11.22
							</Text>
						</View>
					</View>
				</View>
				<TouchableOpacity
					onPress={onPress}
					style={{
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: COLORS.secoundry,
						marginVertical: 5,
						padding: scaleFontSize(5)
					}}
				>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.white,

							fontSize: responsiveFontSize(13)
						}}
					>
						Cancelar orden
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default DeliveryDetails;

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
	}
});
