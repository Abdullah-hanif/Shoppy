import {
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
import { responsiveFontSize } from "../../utils/responsiveFontSize";
import { COLORS, FontFamily } from "../../constants/colors";
import Box from "./components/Box";
import { FlatList } from "react-native-gesture-handler";
import { CarDate } from "../../constants/dummyText";
import DashboardContainer from "./components/DashboardContainer";

const Dashboard = ({ navigation }) => {

	const renderFooterComponent = () => {
		return (
			<>
				<Text style={styles.title}>Dashboard</Text>
				<Text style={styles.subtitle}>
					Puedes navegar desde aquí...
				</Text>
				<FlatList
				key={Math.random()*1000}
					data={CarDate}
					keyExtractor={(item) => item.key}
					numColumns={2}
					renderItem={(data, index) => {
						console.log(data.item, "FLAYLIST");
						return (
							<>
								<Box
								key={Math.random()*1000}
								data={data}
								index={data.index}
								imageUri={data.item?.imageUri}
								backgroundCOLOR={data.item.bgColor}
								title={data.item?.title1}
								title2={data.item?.title2}
								price={data.item?.price}
								margintop={data?.item?.marginTop}
								/>
							</>
						);
					}}
				/>
				<View
					style={{
						borderRadius: 10,
						marginTop: scaleFontSize(20)
					}}
				>
					<BotomContainer />
				</View>
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
				<FlatList
			showsVerticalScrollIndicator={false}
					ListFooterComponentStyle={{ marginBottom: 100, margin: 10 }}
					ListHeaderComponent={renderHeaderComponent()}
					ListFooterComponent={renderFooterComponent()}
				/>

				{/* </ScrollView> */}
				{/* </View> */}
			</Wrapper>
		</>
	);
};

export const BotomContainer = () => {
	return (
		<>
			<View style={{ backgroundColor: COLORS.white, borderRadius: 10 }}>
				<View
					style={{
						backgroundColor: COLORS.secoundry,
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						padding: 10,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Image
							style={styles.arrowImg}
							source={require("../../assets/Images/arrow.png")}
						/>
						<Text style={styles.calendertxt}>
							Cancelado{"\n"} Entrega
						</Text>
					</View>
					<Text style={styles.calenderTitle}>20</Text>
				</View>
				<View
					style={{
						backgroundColor: COLORS.white,
						flexDirection: "row",
						justifyContent: "space-evenly",
						padding: 10,
						borderBottomLeftRadius: 10,
						borderBottomRightRadius: 10
					}}
				>
					<DashboardContainer imgUri={require("../../assets/Images/ecomerce.png")} text1={"En camino "} txt2={"(16)"}/>
					<DashboardContainer imgUri={require("../../assets/Images/truck.png")} text1={"Escogido  "} txt2={"(16)"}/>
					<DashboardContainer imgUri={require("../../assets/Images/darazmsg.png")} text1={"Asignado "} txt2={"(16)"}/>


			
				</View>
			</View>
		</>
	);
};

export default Dashboard;

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
	},
	subtitle: {
		fontSize: responsiveFontSize(15),
		fontFamily: FontFamily.Outfit_Regular,
		color: COLORS.white
	},
	calenderTitle: {
		fontSize: responsiveFontSize(35),
		fontFamily: FontFamily.Outfit_Bold,
		color: COLORS.black
	},
	calendertxt: {
		fontSize: responsiveFontSize(16),
		fontFamily: FontFamily.Outfit_Regular,
		color: COLORS.black
	},
	arrowImg: {
		height: 30,
		width: 30,
		resizeMode: "contain"
	}
});
