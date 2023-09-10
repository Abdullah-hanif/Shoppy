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
import Wrapper from "../../../components/Wrapper";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FontFamily } from "../../../constants/colors";
import { scaleFontSize } from "../../../utils/scaleFontSize";
import { DrawerIcon } from "../../../constants/dummyText";
import { useState } from "react";

const DrawerContent = ({ props, navigation }) => {
	const renderHeaderComponent = () => {
		return (
			<>
				<View>
          <TouchableOpacity onPress={()=>props.navigation.closeDrawer()}>
					<AntDesign
						style={{ alignSelf: "flex-end", margin: 10 }}
						name="closecircle"
						color={COLORS.white}
						size={30}
					/>
          </TouchableOpacity>
					<ProfileContnainner />
					<ScrollView showsVerticalScrollIndicator={false} key={Math.random() * 1000}>
						{DrawerIcon.map((data, index) => {
							return (
								<>
									<ContentItems
										id={data?.id}
										imgUri={data?.iconUri}
										name={data?.title}
										number={data?.number}
									/>
								</>
							);
						})}
					</ScrollView>

          <View style={{marginTop:scaleFontSize(50)}}>
          <Text
						style={{
							left: 20,
							fontFamily:
								
								FontFamily.Outfit_Regular,
							color:COLORS.white,
							fontSize: scaleFontSize(10)
						}}
					>
						Shopy Delivery App - Version - v1.00
					</Text>
          </View>
          <View style={{justifyContent:"center",alignItems:"center"}}>
          <Image style={{opacity:0.2,justifyContent:"center",alignItems:"center"}} source={require("../../../assets/Images/logo.png")}/>
          </View>
				</View>
			</>
		);
	};
	return (
		<>
			<Wrapper>
				<FlatList showsVerticalScrollIndicator={false} ListHeaderComponent={renderHeaderComponent}
        />
			</Wrapper>
		</>
	);
};

const ProfileContnainner = () => {
	return (
		<>
			<View
				style={{
					// backgroundColor: "red",
					padding: 20,
					flexDirection: "row",
					borderBottomWidth: 0.5,
					borderColor: COLORS.gray
				}}
			>
				<View
					style={{
						backgroundColor: COLORS.secoundry,
						padding: 1,
						borderRadius: 10
					}}
				>
					<Image
						style={{
							height: Dimensions.get("screen").height * 0.1,
							borderRadius: 10,
							width: Dimensions.get("screen").width * 0.2,
							resizeMode: "cover"
						}}
						source={require("../../../assets/Images/profilePhoto.webp")}
					/>
				</View>
				<View style={{ left: 5,margin:5 }}>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Bold,
							color: COLORS.white,
            
							fontSize: scaleFontSize(15)
						}}
					>
						Delivery Boy XYZ
					</Text>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.white
						}}
					>
						boyname.setve@gmail.com
					</Text>
				</View>
			</View>
		</>
	);
};

const ContentItems = (props) => {
	return (
		<>
			<TouchableOpacity
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					margin: 10
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<View
						style={{
							height: 35,
							width: 35,
							backgroundColor:
								props.id == 1 ? COLORS.secoundry : COLORS.gray,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 30
						}}
					>
						<Image
							style={{ height: 20, width: 20 }}
							resizeMode="contain"
							source={props.imgUri}
						/>
					</View>
					<Text
						style={{
							left: 20,
							fontFamily:
								props.id == 1
									? FontFamily.Outfit_Bold
									: FontFamily.Outfit_Regular,
							color:
								props.id == 1 ? COLORS.secoundry : COLORS.white,
							fontSize: scaleFontSize(10)
						}}
					>
						{props?.name}
					</Text>
				</View>
				{props?.number && (
					<View
						style={{
							height: 30,
							width: 30,
							backgroundColor: COLORS.secoundry,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 30
						}}
					>
						<Text
							style={{
								fontFamily: FontFamily.Outfit_Bold,
								color: COLORS.white
							}}
						>
							{props?.number}
						</Text>
					</View>
				)}
			</TouchableOpacity>
		</>
	);
};

export default DrawerContent;

const styles = StyleSheet.create({});
