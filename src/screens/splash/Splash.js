import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Wrapper from "../../components/Wrapper";

const Splash = ({navigation}) => {
	setTimeout(() => {
		navigation.navigate("Login")
	}, 2000);
	return (
		<>
			<Wrapper>
				<View style={styles.container}>
					<Image source={require("../../assets/Images/logo.png")} />
                   
				</View>
			</Wrapper>
		</>
	);
};

export default Splash;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});
