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

const DeliveryCollection = ({ navigation }) => {
	const renderFooterComponent = () => {
		return (
			<>
				<View style={{ margin: 10 }}>
					<Text style={styles.title}>
						Recogida
						<Text
							style={{
								color: COLORS.white
							}}
						>
							de pedidos
						</Text>
					</Text>
				</View>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{
						borderBottomWidth: 3,
						borderBottomColor: COLORS.darkBlackColor
					}}
				>
					<DateContainer id={1}/>
					<DateContainer id={2}/>
					<DateContainer id={3}/>
					<DateContainer id={4}/>
					<DateContainer id={5}/>

					<DateContainer id={6}/>
				</ScrollView>
				<YellowBox />

				<CollectionCardConntainner />
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
				<View>
					<FlatList
						showsVerticalScrollIndicator={false}
						ListFooterComponentStyle={{ marginBottom: 100 }}
						ListHeaderComponent={renderHeaderComponent()}
						ListFooterComponent={renderFooterComponent()}
					/>
				</View>
			</Wrapper>
		</>
	);
};

const YellowBox = ({ name, imagUri, name1 }) => {
	return (
		<>
			<View style={{ flexDirection: "row", alignItems: "center" }}>
				<View
					style={{
						// padding: scaleFontSize(2),
						margin: 10,
						backgroundColor: COLORS.secoundry,
						borderRadius: 10,
						height: scaleFontSize(60),
						width: scaleFontSize(60),
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Bold,
							color: COLORS.white,
							fontSize: responsiveFontSize(15)
						}}
					>
						32.89
					</Text>
				</View>
				<View>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.white,
							fontSize: responsiveFontSize(16)
						}}
					>
						Total de la orden
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Bold,
							color: COLORS.secoundry,
							fontSize: responsiveFontSize(16)
						}}
					>
						(2)
					</Text>
				</View>
			</View>
		</>
	);
};

const DateContainer = ({id}) => {
	return (
		<>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<View
					style={{
						padding: scaleFontSize(0.5),
						paddingVertical: scaleFontSize(15),
						margin: 10,
						backgroundColor:id ==1? COLORS.secoundry:COLORS.lightYellow,
						borderRadius: 10,

						// height: scaleFontSize(50),
						// 	width: scaleFontSize(50),
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_SemiBold,
							color: COLORS.white,
							fontSize: responsiveFontSize(14)
						}}
					>
						Hoy
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.white,
							fontSize: responsiveFontSize(12)
						}}
					>
						07/05/2023
					</Text>
				</View>
				{id ==1?<Image
					style={{
						height: 20,
						width: 20,
						resizeMode: "contain",
						bottom: 18
					}}
					source={require("../../assets/icons/Polygon.png")}
				/>:<View style={{height: 20, width: 20,}} />}
			</View>
		</>
	);
};

const CollectionCardConntainner = ({
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
								color: COLORS.secoundry,
								fontFamily: FontFamily.Outfit_Bold
							}}
						>
							2020155-08093919
						</Text>
					</View>
					<View>
						<Text
							style={{
								fontSize: responsiveFontSize(35),
								color: COLORS.secoundry,
								fontFamily: FontFamily.Outfit_Bold
							}}
						>
							22.89
						</Text>
					</View>
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
						{" "}
						HOY: 07/05/2023
					</Text>
				</View>
			</TouchableOpacity>
		</>
	);
};

export default DeliveryCollection;

const styles = StyleSheet.create({
	container: {
		margin: 10
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
