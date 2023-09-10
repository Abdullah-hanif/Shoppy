import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import MainHeader from "../../components/MainHeader";
import { scaleFontSize } from "../../utils/scaleFontSize";
import { COLORS, FontFamily } from "../../constants/colors";
import { DummyText } from "../../constants/dummyText";
import CateContainer from "./components/CateContainer";
import { FlatList } from "react-native-gesture-handler";
import Card from "../../components/Card";
import { useNavigation } from "@react-navigation/native";

const HomeCateDetails = () => {
	const navigation = useNavigation();
	return (
		<>
			<Wrapper>
				<View style={styles.container}>
					<MainHeader location={false} listIcon={true} />
					<FlatList
						data={[1, 2, 3, 4, 5]}
						horizontal
						showsHorizontalScrollIndicator={false}
						renderItem={() => {
							return <>{<CateContainer />}</>;
						}}
					/>
					<ScrollView>
						<View style={styles.sectionOne}>
							<Text style={styles.txtStyle}>
								{DummyText.Ventas_calientes}
							</Text>
							<Text style={styles.txt2Style}>
								{DummyText.ver_más}
							</Text>
						</View>

						{/* //List OF Product */}
						<View style={{ marginBottom: 200 }}>
							{
								<FlatList
									key={Math.random() * 1000}
									data={[1, 2, 3, 4, 5]}
									numColumns={2}
									renderItem={(data) => {
										return (
											<Card
												onPress={() =>
													navigation.navigate(
														"ProductDetails"
													)
												}
											/>
										);
									}}
								/>
							}
						</View>
					</ScrollView>
				</View>
			</Wrapper>
		</>
	);
};

export default HomeCateDetails;

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
		color: COLORS.secoundry
	},
	txt2Style: {
		fontFamily: FontFamily.Outfit_Regular,
		fontSize: scaleFontSize(13),
		color: COLORS.white
	}
});
