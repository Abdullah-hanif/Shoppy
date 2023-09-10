import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";
import MainHeader from "../../components/MainHeader";
import TextInputComp from "./components/TextInputComp";
import AdvertiseSection from "./components/AdvertiseSection";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import CategoryContainer from "./components/CategoryContainer";
import { CategroiesIconn, DummyText } from "../../constants/dummyText";
import { scaleFontSize } from "../../utils/scaleFontSize";
import { COLORS, FontFamily } from "../../constants/colors";
import Card from "../../components/Card";

const HomeStore = ({ navigation }) => {
	const renderHeaderComponent = () => {
		return (
			<>
				<MainHeader location={true} />
				<TextInputComp />
				<ScrollView>
					<AdvertiseSection />
					<ScrollView horizontal>
						{CategroiesIconn.map((data, index) => {
							return (
								<>
									<CategoryContainer
								
										index={index}
										iconUri={data.iconUri}
										title={data?.title}
										id={data?.id}
									/>
								</>
							);
						})}
					</ScrollView>
					<View style={styles.sectionOne}>
						<Text style={styles.txtStyle}>
							{DummyText.Mejor_vendedora}
						</Text>
						<Text style={styles.txt2Style}>
							{DummyText.ver_más}
						</Text>
					</View>
				</ScrollView>
			</>
		);
	};

	const renderFooterComponent = () => {
		return (
			<>
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
			</>
		);
	};
	return (
		<>
			<Wrapper>
				<FlatList
					style={{ margin: 10 }}
					showsVerticalScrollIndicator={false}
					ListHeaderComponent={renderHeaderComponent()}
					ListFooterComponent={renderFooterComponent()}
				/>
			</Wrapper>
		</>
	);
};

export default HomeStore;

const styles = StyleSheet.create({
	container: {
		margin: 10
	},
	sectionOne: {
		// backgroundColor:"blue",
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10
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
