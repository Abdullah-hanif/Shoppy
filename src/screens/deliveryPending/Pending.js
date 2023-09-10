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

import DashboardContainer from "../deliveryDashboard/components/DashboardContainer";
import { CardConntainner } from "../myDeleveries/MyDeleveries";
import { useNavigation } from "@react-navigation/native";

const Pending = ({ navigation }) => {
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

	const renderFooterComponet = () => {
		return (
			<>
				<Text style={styles.title}>
					Entrega
					<Text
						style={{
							color: COLORS.white
						}}
					>
						pendiente
					</Text>
				</Text>

				{/* //Section 2 */}
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<DashboardContainer
						imgUri={require("../../assets/Images/ecomerce.png")}
					/>
					<View style={{ bottom: 10, left: 10 }}>
						<Text
							style={{
								fontFamily: FontFamily.Outfit_Medium,
								fontSize: scaleFontSize(16),
								color: COLORS.white
							}}
						>
							En camino
						</Text>
						<Text
							style={{
								fontFamily: FontFamily.Outfit_Bold,
								fontSize: scaleFontSize(16),
								color: COLORS.secoundry
							}}
						>
							(16)
						</Text>
					</View>
				</View>

				{/* //indicator Line  */}
				<Text
					style={{
						fontFamily: FontFamily.Outfit_Medium,
						fontSize: scaleFontSize(16),
						color: COLORS.white
					}}
				>
					Indicator Line
				</Text>

				<CardConntainner
					onpress={() => navigation.navigate("DrawerNavigatior",{screen:"DeliveryDetails"}) }
				/>
				{/* <CardConntainner onpress={()=>navigation.nnavigate("DeliveryDetails")} />
                                    <CardConntainner onpress={()=>navigation.nnavigate("DeliveryDetails")} /> */}
			</>
		);
	};
	return (
		<>
			<Wrapper>
				<View style={{ margin: 10 }}>
					<FlatList
						ListFooterComponentStyle={{ marginBottom: 100 }}
						ListHeaderComponent={renderHeaderComponent()}
						ListFooterComponent={renderFooterComponet()}
					/>
				</View>
				{/* </ScrollView> */}
				{/* </View> */}
			</Wrapper>
		</>
	);
};

export default Pending;

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
