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
import { FontFamily, COLORS } from "../../constants/colors";
import { scaleFontSize } from "../../utils/scaleFontSize";
import { DummyText } from "../../constants/dummyText";
import { responsiveFontSize } from "../../utils/responsiveFontSize";
import ButtonComp from "../../components/ButtonComp";
import HeaderLogin from "./components/HeaderLogin";
import SelectionBar from "./components/SelectionBar";
import SmallBox from "../../components/SmallBox";

// @ICONS 
import {AntDesign} from "@expo/vector-icons"
import HeaderCheck from "../../components/HeaderCheck";

const LanguageSelection = ({navigation}) => {
	return (
		<>
			<Wrapper>
				<ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
				<View style={styles.container}>
					<HeaderLogin />
					<HeaderCheck activeStep={false} doneStep={true} notVisited={false}/>
				</View>
				<View style={styles.secoundContainer}>
					<View style={styles.headerContainer}>
						<Text style={[styles.heading,{fontFamily:FontFamily.Outfit_Light,}]}>
							{DummyText.Selección_de}
						</Text>
						<Text
							style={[
								styles.heading,
								{
									color: COLORS.black,
									fontWeight: "400",
								
									fontSize: 24
								}
							]}
						>
							{DummyText.idioma}
						</Text>
					</View>
					<Text
						style={[
							styles.heading,
							{
								color: COLORS.black,
								marginVertical: 10,
								fontFamily:FontFamily.Outfit_Bold,
								fontSize: 16
							}
						]}
					>
						{DummyText.Seleccionado_por_defecto}
					</Text>
					<SelectionBar />
					<View style={{ marginTop: 20, flexDirection: "row",alignItems:"center" }}>
						<Text style={[styles.heading,{fontSize: responsiveFontSize(13),fontFamily:FontFamily.Outfit_Regular}]}>
							{DummyText.En_qué_idioma_quieres_ver}
						</Text>
						<Text
							style={[
								styles.heading,
								{
									color: COLORS.black,
									fontWeight: "400",
									fontFamily:FontFamily.Outfit_Bold,
									fontSize: responsiveFontSize(15)
								}
							]}
						>
							{DummyText.Shopy}
						</Text>
					</View>

					<View style={styles.smallBoxContainer}>
						<SmallBox name={"English"} />
						<SmallBox name={"Francesa"}/>
					</View>
					<SmallBox name={"Alemana"}/>

					{/* <ButtonComp onpress={()=>navigation.navigate("BottomTabNavigator")} name={DummyText.Omitir_seleccionar_más_tarde} /> */}

				</View>
				<View style={styles.btnContainer}>
					<ButtonComp onpress={()=>navigation.navigate("BottomTabNavigator")} name={DummyText.Omitir_seleccionar_más_tarde} />
				</View>
				</ScrollView>
			</Wrapper>
		</>
	);
};

export default LanguageSelection;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	secoundContainer: {
		// flex: 2,
		height:Dimensions.get("screen").height/1.5,
		backgroundColor: COLORS.secoundry,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		padding: scaleFontSize(20),
		// paddingVertical: 50,
		
	},
	heading: {
		fontSize: responsiveFontSize(16),
		color: COLORS.white,
		fontFamily: FontFamily.Outfit_Bold,
		fontWeight: 600
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	smallBoxContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: scaleFontSize(25)
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
