import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	FlatList
} from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import { scaleFontSize } from "../../utils/scaleFontSize";
import { responsiveFontSize } from "../../utils/responsiveFontSize";
import { COLORS, FontFamily } from "../../constants/colors";
import Box from "../deliveryDashboard/components/Box";
// import { FlatList } from "react-native-gesture-handler";
import { AffiliateMarketingData, SocialIcons } from "../../constants/dummyText";

import SociallinkContainer from "./components/SociallinkContainer";
import CalenderComp from "./components/CalenderComp";

const AffiliateMarketing = ({ navigation }) => {
	const renderFooterComponent = () => {
		return (
			<>
				<Text style={styles.title}>La comercialización</Text>
				<Text style={styles.subtitle}>del afiliado</Text>
				<SociallinkContainer />

				<FlatList
					data={AffiliateMarketingData}
					keyExtractor={(item) => item.key}
					numColumns={2}
					renderItem={(data, index) => {
						console.log(data.item, "FLAYLIST");
						return (
							<>
								<Box
									data={data}
									index={data.index}
									imageUri={data.item?.imageUri}
									backgroundCOLOR={data.item?.bgColor}
									txtColor={data.item?.txtColor}
									title={data.item?.title1}
									title2={data.item?.title2}
									price={data.item?.price}
								/>
							</>
						);
					}}
				/>
				<View>
					<CalenderComp />
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
						{/* <Image
							style={styles.imgStyle}
							source={require("../../assets/Images/logo.png")}
						/> */}
						<View />
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

export default AffiliateMarketing;

const styles = StyleSheet.create({
	container: {
		margin: 10,
		marginVertical: 10
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
		fontSize: responsiveFontSize(25),
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
