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
import React, { useRef } from "react";
import Wrapper from "../../components/Wrapper";
import MainHeader from "../../components/MainHeader";
import CateContainer from "../homeCateDetails/components/CateContainer";
import { scaleFontSize } from "../../utils/scaleFontSize";
import { COLORS, FontFamily } from "../../constants/colors";
import { DummyText } from "../../constants/dummyText";
import ProductImage from "./components/ProductImage";
import ColorComp from "./components/ColorComp";
import SizeComp from "./components/SizeComp";
import { AntDesign } from "@expo/vector-icons";
import ButtonComp from "../../components/ButtonComp";
import RBSheet from "react-native-raw-bottom-sheet";
import ReasonComp from "./components/ReasonComp";

const ProductDetails = ({ navigation }) => {
	const refRBSheet = useRef();

	const renderHeaderComponent = () => {
		return (
			<>
				<View>
					<MainHeader location={false} listIcon={true} />
					<FlatList
						data={[1, 2, 3, 4, 5]}
						horizontal
						showsHorizontalScrollIndicator={false}
						renderItem={() => {
							return <>{<CateContainer />}</>;
						}}
					/>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View
							style={[
								styles.sectionOne,
								{ alignItems: "center" }
							]}
						>
							<View style={styles.sectionOne}>
								<TouchableOpacity
									onPress={() => navigation.goBack()}
								>
									<Image
										style={{
											height: 30,
											width: 30,
											resizeMode: "contain"
										}}
										source={require("../../assets/icons/back.png")}
									/>
								</TouchableOpacity>
								<Text style={styles.txtStyle}>
									{DummyText.Camisetas_de_hombre}
								</Text>
							</View>
							<Text style={styles.txt2Style}>
								{DummyText.ver_más}
							</Text>
						</View>

						<Text style={styles.productName}>
							Estilo Espectáculo
						</Text>
						<ProductImage />

						<View style={styles.colorSizeStyle}>
							<ColorComp />
							<SizeComp />
						</View>
						<TouchableOpacity style={styles.detailsContainer}>
							<Text
								style={[
									styles.txt2Style,
									{
										fontSize: scaleFontSize(16),
										textDecorationLine: "underline"
									}
								]}
							>
								Más detalles
							</Text>
							<AntDesign
								style={{ left: 10 }}
								name="right"
								color={COLORS.white}
								size={25}
							/>
						</TouchableOpacity>
						{/* <View style={{ marginBottom: 170 }}>
							<ButtonComp
								onpress={() => refRBSheet.current.open()}
								name={DummyText.añadir_a_la_cesta}
								txtCOLOR={COLORS.black}
								color={COLORS.secoundry}
							/>
							<ButtonComp
							
							onpress={()=>navigation.navigate("OrderDetails01")}
								name={DummyText.Comprar_ahora}
								txtCOLOR={COLORS.black}
								color={COLORS.lightYellow}
							/>
						</View> */}
					</ScrollView>
				</View>
			</>
		);
	};

	const renderFooterComponent = () => {
		return (
			<>
				<View>
					<ButtonComp
						onpress={() => refRBSheet.current.open()}
						name={DummyText.añadir_a_la_cesta}
						txtCOLOR={COLORS.black}
						color={COLORS.secoundry}
					/>
					<ButtonComp
						onpress={() => navigation.navigate("OrderDetails01")}
						name={DummyText.Comprar_ahora}
						txtCOLOR={COLORS.black}
						color={COLORS.lightYellow}
					/>
				</View>
				<RBSheet
					ref={refRBSheet}
					closeOnDragDown={true}
					closeOnPressMask={false}
					height={Dimensions.get("screen").height / 1.5}
					customStyles={{
						container: {
							backgroundColor: COLORS.lightBlack,
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							padding: 10
						},
						wrapper: {
							backgroundColor: "transparent"
						},
						draggableIcon: {
							backgroundColor: COLORS.white,
							top: 5,
							width: 80,
							height: 4
						}
					}}
				>
					<ScrollView
						nestedScrollEnabled={true}
						showsVerticalScrollIndicator={false}
					>
						<TouchableOpacity activeOpacity={1}>
							<View style={styles.colorSizeStyle}>
								<ColorComp />
								<SizeComp />
							</View>
							<View style={{ marginVertical: 30 }}>
								<Text
									style={[
										styles.txtStyle,
										{
											color: COLORS.white,
											fontSize: scaleFontSize(16),
											fontFamily:
												FontFamily.Outfit_SemiBold
										}
									]}
								>
									{DummyText.Descripción}
								</Text>
								<Text
									style={[
										styles.txtStyle,
										{
											color: COLORS.white,
											fontSize: scaleFontSize(12),
											fontFamily:
												FontFamily.Outfit_Regular
										}
									]}
								>
									{DummyText.loreIpsum}
								</Text>
							</View>
							<Text
								style={[
									styles.txtStyle,
									{
										color: COLORS.white,
										fontSize: scaleFontSize(16),
										fontFamily: FontFamily.Outfit_SemiBold
									}
								]}
							>
								{DummyText.Reseñas}
							</Text>
							<View>
								<ReasonComp />
								<ReasonComp />
							</View>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-evenly",
									width: "100%"
								}}
							>
								<ButtonComp
									onpress={() => {
										navigation.navigate("ProductVideo");
										refRBSheet.current.close();
									}}
									name={DummyText.añadir_a_la_cesta}
									txtCOLOR={COLORS.black}
									color={COLORS.secoundry}
								/>

								<ButtonComp
									onpress={() => {
										navigation.navigate("OrderDetails01");
										refRBSheet.current.close();
									}}
									name={DummyText.Comprar_ahora}
									txtCOLOR={COLORS.black}
									color={COLORS.lightYellow}
								/>
							</View>
						</TouchableOpacity>
					</ScrollView>
				</RBSheet>
			</>
		);
	};
	return (
		<>
			<Wrapper>
				<View style={styles.container}>
					<FlatList
						ListHeaderComponent={renderHeaderComponent()}
						ListFooterComponent={renderFooterComponent()}
					/>
				</View>
			</Wrapper>
		</>
	);
};

export default ProductDetails;

const styles = StyleSheet.create({
	container: {
		margin: 10
	},
	sectionOne: {
		// backgroundColor:"blue",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 15
	},
	txtStyle: {
		fontFamily: FontFamily.Outfit_Medium,
		fontSize: scaleFontSize(20),
		color: COLORS.secoundry,
		left: 5
	},
	txt2Style: {
		fontFamily: FontFamily.Outfit_Regular,
		fontSize: scaleFontSize(13),
		color: COLORS.white
	},
	productName: {
		fontFamily: FontFamily.Outfit_Regular,
		fontSize: scaleFontSize(25),
		color: COLORS.white
	},
	colorSizeStyle: {
		marginVertical: 15,
		// backgroundColor: "blue",
		flexDirection: "row",

		// flexWrap:"wrap",

		justifyContent: "space-between"
	},
	detailsContainer: {
		marginVertical: 20,
		flexDirection: "row",
		alignItems: "center"
	},
	btnContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		marginBottom: 20,
		marginHorizontal: 20
	}
});
