import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View ,Dimensions} from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FontFamily } from "../../constants/colors";
import { DummyText } from "../../constants/dummyText";
import { scaleFontSize } from "../../utils/scaleFontSize";
import Wrapper from "../../components/Wrapper";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonComp from "../../components/ButtonComp";

import { responsiveFontSize } from "../../utils/responsiveFontSize";
import Card from "../../components/Card";

const OrderDetails01 = ({navigation}) => {

	return (
        <Wrapper>
		<View style={styles.container}>
			<MainHeader location={false} listIcon={true} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.sectionOne}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center"
						}}
					>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
						<AntDesign
							name="back"
							size={30}
							color={COLORS.secoundry}
						/>
                        </TouchableOpacity>
						<Text style={styles.txtStyle}>
							{DummyText.Mi_carrito}
						</Text>
					</View>
					<Text style={styles.txt2Style}>{DummyText.ver_más}</Text>
				</View>
                <ProductDetailsCard showcounter={true} showDeleteIcon={true} />
				<Text style={[styles.txtStyle,{fontSize:responsiveFontSize(16)}]}>
							{DummyText.Más_productos_similares}
						</Text>

						<View  >
							{
								<FlatList
									key={Math.random() * 1000}
									data={[1, 2, 3, 4, 5]}
									numColumns={2}
									renderItem={(data) => {
										return <Card onPress={()=>navigation.navigate("ProductDetails")} />;
									}}
								/>
							}
							
						</View>
				{/* <VideoScreen /> */}
				<View style={{marginBottom:Dimensions.get("screen").height*0.16}} >
					
								<ButtonComp
									onpress={() => {
										navigation.navigate("OrderDetails02");
										// refRBSheet.current.close();
									}}
									name={DummyText.añadir_a_la_cesta}
									txtCOLOR={COLORS.black}
									color={COLORS.secoundry}
								/>
					</View>
			</ScrollView>
		</View>
        </Wrapper>
	);
};

export default OrderDetails01;

const styles = StyleSheet.create({
	container: {
		margin: 10
	},
	sectionOne: {
		// backgroundColor:"blue",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 5
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
