import {
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Dimensions,
    Image
} from "react-native";
import React from "react";
import MainHeader from "../../components/MainHeader";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { COLORS, FontFamily } from "../../constants/colors";
import { DummyText } from "../../constants/dummyText";
import { scaleFontSize } from "../../utils/scaleFontSize";
import Wrapper from "../../components/Wrapper";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import ButtonComp from "../../components/ButtonComp";

import { responsiveFontSize } from "../../utils/responsiveFontSize";
import Card from "../../components/Card";
import HeaderCheck from "../../components/HeaderCheck";
import DetailsCard from "../../components/DetailsCard";

const OrderDetails03 = ({ navigation }) => {
	return (
		<Wrapper>
			<View style={styles.container}>
				<MainHeader location={false} listIcon={true} />
				<ScrollView showsVerticalScrollIndicator={false}>
					<HeaderCheck
						activeStep={false}
						doneStep={true}
						notVisited={false}
					/>

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
								{DummyText.Mi_carrito}
							</Text>
						</View>
					</View>
					<ProductDetailsCard
						showcounter={false}
						showDeleteIcon={false}
					/>
					<View style={styles.titleConainer}>
						<Text
							style={[
								styles.txtStyle,
								{ fontSize: responsiveFontSize(16) }
							]}
						>
							{DummyText.Entregar_a}
						</Text>

						{/* <Text>{DummyText.Entregar_a}</Text> */}
					</View>

					<View>
						<DetailsCard orange={false} />
					</View>
					<View>
						<Text
							style={[
								styles.txtStyle,
								{ fontSize: responsiveFontSize(16) }
							]}
						>
							Entregar por
						</Text>
                        <View style={styles.freeDeliveryStyle}>
                            <Text style={{fontSize:scaleFontSize(16),fontFamily:FontFamily.Outfit_SemiBold,color:COLORS.white}}>Tue Jun 27</Text>
                            <Text style={{fontSize:scaleFontSize(16),fontFamily:FontFamily.Outfit_SemiBold,color:COLORS.white}}>|</Text>
                           <Image resizeMode="contain" style={{height:80,width:80,bottom:30}} source={require("../../assets/Images/FreeDelivery.png")}/>
                        </View>
					</View>
                    <View>

                        <Text style={styles.totalStyle}>Cantidad total:</Text>
                        <View style={styles.priceCOntainer}>
                            <Text style={styles.priceStyle}>599.00</Text>
                            <Text style={styles.moneySymbol}>$</Text>
                        </View>
                    </View>
					{/* <VideoScreen /> */}
					<View
						style={{
							marginBottom:
								Dimensions.get("screen").height * 0.16,
							bottom: 0
						}}
					>
						<ButtonComp
							onpress={() => {
								navigation.navigate("OrderDetails04");
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

export default OrderDetails03;

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
	
	
	titleConainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},

	freeDeliveryStyle:{
        flexDirection:"row",
        // alignItems:"center",
        justifyContent:"space-between",
        // backgroundColor:"red",
        width:Dimensions.get("screen").width/2
    },
    totalStyle:{
        marginTop:10,  
        fontFamily:FontFamily.Outfit_Regular,
        color:COLORS.gray,
        fontSize:responsiveFontSize(16)
    },
    priceCOntainer:{
flexDirection:"row",

    },
    priceStyle:{
       
        fontFamily:FontFamily.Outfit_Bold,
        color:COLORS.white,
        fontSize:responsiveFontSize(55)
    },
    moneySymbol:{
        fontFamily:FontFamily.Outfit_Bold,
        color:COLORS.white,
        fontSize:responsiveFontSize(30)
    }
    
});
