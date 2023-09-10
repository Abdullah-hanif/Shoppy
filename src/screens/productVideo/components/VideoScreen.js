import React from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	Text,
	Dimensions,
	TouchableOpacity,
	Image
} from "react-native";
import { Video } from "expo-av";
import { COLORS, FontFamily } from "../../../constants/colors";
import { scaleFontSize } from "../../../utils/scaleFontSize";
import ButtonComp from "../../../components/ButtonComp";
import { DummyText } from "../../../constants/dummyText";
import { AntDesign } from "@expo/vector-icons";

const videoUri =
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const UserComments = () => {
	const comments = [
		{ comment: "vinirae", icon: "❤️" },
		{ comment: "nia", icon: "😘" }

		// Add more comments as needed
	];

	return (
		<ScrollView>
			{comments.map((comment, index) => (
				<TouchableOpacity key={index} style={styles.commentItem}>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Image
							resizeMode="contain"
							style={{ height: 40, width: 40, borderRadius: 30 }}
							source={require("../../../assets/Images/shirt.png")}
						/>
						<View>
							<Text style={styles.commentText}>
								{comment.comment}
							</Text>
							<Text>{comment.icon}</Text>
						</View>
					</View>
				</TouchableOpacity>
			))}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					width: "100%"
				}}
			>
				<ButtonComp
					// onpress={() => {
					// 	navigation.navigate("ProductVideo");
					// }}
					name={DummyText.añadir_a_la_cesta}
					txtCOLOR={COLORS.black}
					color={COLORS.secoundry}
				/>

				<ButtonComp
					name={DummyText.Comprar_ahora}
					txtCOLOR={COLORS.black}
					color={COLORS.lightYellow}
				/>
			</View>
		</ScrollView>
	);
};

const VideoScreen = ({goBack}) => {
	return (
		<View style={styles.container}>
			<Video
				source={{ uri: videoUri }}
				style={styles.video}
				resizeMode="cover"
				shouldPlay
				isLooping
			/>
			<View style={styles.productName}>
				<Text
					style={{
						color: COLORS.white,
						fontSize: scaleFontSize(20),
						fontFamily: FontFamily.Outfit_Medium
					}}
				>
					Estilo Espectáculo
				</Text>
				<Text
					style={{
						color: COLORS.white,
						fontSize: scaleFontSize(12),
						fontFamily: FontFamily.Outfit_Regular
					}}
				>
					Cuello Redondo Estampado Hombre
				</Text>

				<Text
					style={{
						color: COLORS.white,
						fontSize: scaleFontSize(25),
						fontFamily: FontFamily.Outfit_Bold
					}}
				>
					$ 599.00
				</Text>
			</View>

			<View style={styles.liveTag}>
				<View
					style={{
						padding: scaleFontSize(5),
						margin: 5,
						backgroundColor: COLORS.yellow,
						// paddingHorizontal: 10,
						borderRadius: 5
					}}
				>
					<Text style={styles.liveTagText}>LIVE</Text>
				</View>
				<View
					style={{
						padding: 5,
						margin: 5,
						backgroundColor: COLORS.gray,
						paddingHorizontal: 10,
						borderRadius: 5,
						flexDirection:"row",
						alignItems:"center"
						,justifyContent:"space-between"
					}}
				>
					<Image resizeMode="contain" style={{height:15,width:15,tintColor:COLORS.white}} source={require("../../../assets/icons/eye.png")}/>
					<Text style={styles.liveTagText}>10k</Text>
				</View>
				<TouchableOpacity onPress={goBack}>
					<AntDesign name="close" color={COLORS.white} size={30} />
				</TouchableOpacity>
			</View>
			<View
				style={{
					position: "absolute",
					// bottom: 0,
					padding: 20,
					marginTop: "15%",
					width: "100%",

					flexDirection: "row",
					justifyContent: "flex-end",
					alignItems: "center",
					paddingVertical: 10
				}}
			>
				<Text
					style={{
						right: 10,
						color: COLORS.yellow,
						fontFamily: FontFamily.Outfit_Medium,
						fontSize: scaleFontSize(16)
					}}
				>
					Like
				</Text>
				<AntDesign
					size={25}
					color={COLORS.yellow}
					style={{ alignSelf: "flex-end" }}
					name="heart"
				/>
			</View>
			<View style={styles.footer}>
				<UserComments />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	video: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height
	},
	footer: {
		position: "absolute",
		bottom: 0,
		padding: 20,
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		paddingVertical: 10
	},
	commentsContainer: {
		paddingHorizontal: 20,
		height: 100
	},
	commentItem: {
		marginBottom: 10
	},
	commentText: {
		color: "white",
		fontSize: 16
	},
	productName: {
		position: "absolute",
		top: 10,
		left: 10,
		color: "white",
		fontSize: 18,
		fontWeight: "bold"
		// backgroundColor:"red"
	},
	liveTag: {
		position: "absolute",
		top: 10,
		flexDirection: "row",
		padding: 20,
		right: 10,

		// backgroundColor: 'red',
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5
	},
	liveTagText: {
		color: "white",
		fontWeight: "bold"
	}
});

export default VideoScreen;
