import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import MainHeader from "../../components/MainHeader";
import { DummyText } from "../../constants/dummyText";
import { COLORS, FontFamily } from "../../constants/colors";
import { scaleFontSize } from "../../utils/scaleFontSize";
import { AntDesign } from "@expo/vector-icons";
import VideoScreen from "./components/VideoScreen";

const ProductVideo = ({ navigation }) => {
	return (
		<>
			<Wrapper>
				<View style={styles.container}>
					<MainHeader
						location={false}
						listIcon={true}
						onpress={() => navigation.goBack()}
					/>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View style={styles.sectionOne}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center"
								}}
							>
								<TouchableOpacity
									onPress={() => navigation.goBack()}
								>
									<AntDesign
										name="back"
										size={30}
										color={COLORS.secoundry}
									/>
								</TouchableOpacity>
								<Text style={styles.txtStyle}>
									{DummyText.Productos_vivos}
								</Text>
							</View>
							<Text style={styles.txt2Style}>
								{DummyText.ver_más}
							</Text>
						</View>

						{/* <VideoScreen /> */}
					</ScrollView>
				</View>
				{/* <ScrollView> */}
				<VideoScreen goBack={() => navigation.goBack()} />

				{/* </ScrollView> */}
			</Wrapper>
		</>
	);
};

export default ProductVideo;

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
		fontSize: scaleFontSize(14),
		color: COLORS.white
	},
	txt2Style: {
		fontFamily: FontFamily.Outfit_Regular,
		fontSize: scaleFontSize(13),
		color: COLORS.secoundry
	},
	productName: {
		fontFamily: FontFamily.Outfit_Regular,
		fontSize: scaleFontSize(25),
		color: COLORS.white
	}
});
