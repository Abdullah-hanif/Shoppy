import firebase from "firebase/compat/app";
import React, { useRef, useState } from "react";
import {
	ActivityIndicator,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from "react-native";
import RBSheet from 'react-native-raw-bottom-sheet';
import { firebaseConfig } from "../../../config";
import ButtonComp from "../../components/ButtonComp";
import HeaderCheck from "../../components/HeaderCheck";
import CustomSwitchButton from "../../components/SwitchButton";
import Wrapper from "../../components/Wrapper";
import { COLORS, FontFamily } from "../../constants/colors";
import { DummyText } from "../../constants/dummyText";
import { responsiveFontSize } from "../../utils/responsiveFontSize";
import { scaleFontSize } from "../../utils/scaleFontSize";
import HeaderLogin from "../languageSelection/components/HeaderLogin";
// import firebase from 'firebase/compat/app';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { Alert } from "react-native";

const Login = ({ navigation }) => {
	const bottomSheetRef = useRef();

	const openBottomSheet = () => {
		bottomSheetRef.current.open();
	};

	const [otp, setOTP] = useState(''); // Initialize with empty strings
	const handleOTPChange = (text) => {
		// Limit the input to 7 digits
		if (text.length <= 7) {
			setOTP(text);
		}
	};



	// for firebase
	const [countryCode, setCountryCode] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [verificationId, setVerificationId] = useState(null);
	const recaptchaVerifier = useRef(null);
	const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false); // New state for validation
	const [isLoading, setIsLoading] = useState(false); // New state for validation
	const [isLoadingOtp, setIsLoadingOtp] = useState(false); // New state for validation

	console.log(countryCode + phoneNumber, 'C+Phone')

	const sendVerification = () => {

		const phoneProvider = new firebase.auth.PhoneAuthProvider();
		const phone = countryCode + phoneNumber;

		phoneProvider
			.verifyPhoneNumber(phone, recaptchaVerifier.current)
			.then((verificationId) => {
				setVerificationId(verificationId);
				setPhoneNumber("");
				setCountryCode("");

				openBottomSheet();
				// Navigate to OtpVerification screen
				//   navigation.navigate("OtpVerification", { verificationId, phoneNumber }); 
			})
			.catch((error) => {

				console.error("Verification Error:", error?.message);
				Alert.alert(
					"Verification Error",
					"Please starts your number with country code (e.g: +91)"
				);
			});
	};




	// firebase
	const confirmCode = async () => {
		setIsLoadingOtp(true)
		const credential = firebase.auth.PhoneAuthProvider.credential(
			verificationId,
			otp
		);

		try {
			// Sign in with the provided OTP credential
			await firebase.auth().signInWithCredential(credential);
			setOTP(""); // Clear the OTP input field
			setIsLoadingOtp(false)
			navigation.navigate('BottomTabNavigator')

		} catch (error) {
			setIsLoadingOtp(false)
			console.error("Error:", error);
			Alert.alert("Error", "An error occurred. Please try again.");
		}
	};


	return (
		<>
			<Wrapper>
				<ScrollView showsVerticalScrollIndicator={false} >
					<View style={styles.container}>
						<FirebaseRecaptchaVerifierModal
							ref={recaptchaVerifier}
							firebaseConfig={firebaseConfig}
						/>
						<HeaderLogin />

						<HeaderCheck
							activeStep={false}
							doneStep={true}
							notVisited={false}
						/>
					</View>

					<View style={styles.secoundContainer}>
						<View style={styles.headerContainer}>
							<Text
								style={[
									styles.heading,
									{ fontFamily: FontFamily.Outfit_Light }
								]}
							>
								{DummyText.Iniciar_sesión}
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
								{DummyText.para_empezar}
							</Text>
						</View>
						<Text
							style={[
								styles.heading,
								{
									color: COLORS.white,
									marginVertical: 10,
									fontFamily: FontFamily.Outfit_Light,
									fontSize: 16
								}
							]}
						>
							{DummyText.Iniciar_sesión_con_número_de_teléfono}
						</Text>
						{/* <TouchableOpacity onPress={openBottomSheet}>
							<Text>Open Bottom Sheet</Text>
						</TouchableOpacity> */}

						<RBSheet
							ref={bottomSheetRef}
							closeOnDragDown={true}
							height={300}
							openDuration={250}
							customStyles={{
								container: {
									borderTopLeftRadius: 10,
									borderTopRightRadius: 10,
									backgroundColor: COLORS.primary,
								},
							}}
						>
							{/* Content of your bottom sheet */}
							<Text style={{ color: '#FFF', alignSelf: 'center', fontSize: 16, paddingTop: '10%' }}>Enter your 7 digit OTP</Text>
							<View style={styles.otpInput}>
								<TextInput
									style={styles.otpDigit}
									onChangeText={handleOTPChange}
									value={otp}
									keyboardType="numeric"
									placeholder="0 0 0 0 0 0 0"
									placeholderTextColor={'#FFFF'}
									maxLength={7}
								/>
							</View>
							<TouchableOpacity disabled={isLoadingOtp} onPress={confirmCode} style={{ backgroundColor: 'white', width: '50%', height: 40, borderRadius: 50, alignItems: 'center', justifyContent: 'center', elevation: 5, alignSelf: 'center', marginTop: '10%' }}>
								<Text>{isLoadingOtp ? <ActivityIndicator size={'small'} color={'black'} /> : DummyText.Continuar}</Text>
							</TouchableOpacity>
							{/* Add any other components you want */}
						</RBSheet>
						<PickerContainer setCountryCode={setCountryCode} setPhoneNumber={setPhoneNumber} />
						<CustomSwitchButton />
						{/* commit for some time */}
						{/* <Text
							style={[
								styles.heading,
								{ fontFamily: FontFamily.Outfit_Light }
							]}
						>
							{DummyText.Iniciar_electrónico}
						</Text> */}
						{/* <TextInputContainer placeholder="samplexyz@gmail.com" placeholderTextColor={COLORS.black} /> */}
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								marginVertical: 50
							}}
						>
							<Text
								style={[
									styles.heading,
									{
										color: COLORS.black,
										fontFamily: FontFamily.Outfit_Medium,
										fontSize: responsiveFontSize(13)
									}
								]}
							>
								{DummyText.Al_continuar_aceptas_los_Shopy}
							</Text>
							<View style={{ flexDirection: "row" }}>
								<Text
									style={[
										styles.heading,
										{
											textDecorationLine: "underline",
											fontFamily: FontFamily.Outfit_Medium,
											fontSize: responsiveFontSize(13)
										}
									]}
								>
									Terms of Use
								</Text>
								<Text
									style={[
										styles.heading,
										{
											color: COLORS.black,
											fontFamily: FontFamily.Outfit_Medium,
											fontSize: responsiveFontSize(13)
										}
									]}
								>
									and
								</Text>
								<Text
									style={[
										styles.heading,
										{
											textDecorationLine: "underline",
											fontFamily: FontFamily.Outfit_Medium,
											fontSize: responsiveFontSize(13)
										}
									]}
								>
									PrivacyPolicy
								</Text>
							</View>
							<View style={{ marginBottom: 150, width: "100%" }}>
								<Text
									style={[
										styles.heading,
										{
											textDecorationLine: "underline",
											fontFamily: FontFamily.Outfit_Medium,
											fontSize: responsiveFontSize(13),
											textAlign: "center"
										}
									]}
								>
									PrivacyPolicy
								</Text>

								<ButtonComp
									// onpress={() => navigation.navigate("LanguageSelection")}
									// onpress={() => openBottomSheet()}
									onpress={sendVerification}
									name={DummyText.Continuar}
								/>

							</View>
						</View>
						{/* <View style={{width:"100%",}}>
						<ButtonComp
						onpress={() => navigation.navigate("LanguageSelection")}
						name={DummyText.Continuar}
					/>
					</View> */}
					</View>

				</ScrollView>

			</Wrapper>
		</>
	);
};

const PickerContainer = ({ setCountryCode, setPhoneNumber }) => {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between"
				}}
			>
				<View
					style={{
						backgroundColor: COLORS.white,
						padding: 15,
						flexDirection: "row",
						width: "25%", // Adjust the width to your preference
						alignItems: "center",
						justifyContent: "center",
						borderRadius: 30
					}}
				>
					<TextInput
						placeholder="+000"
						maxLength={5}
						onChangeText={(e) => setCountryCode(e)}
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							fontSize: scaleFontSize(13),
							flex: 1
						}}
						keyboardType="phone-pad" // Set the keyboard type to phone-pad for numeric input
					/>
				</View>
				<View
					style={{
						backgroundColor: COLORS.white,
						padding: 15,
						flexDirection: "row",
						width: "70%", // Adjust the width to your preference
						borderRadius: 30
					}}
				>
					<TextInput
						placeholder="Enter your number"
						maxLength={18}
						onChangeText={(e) => setPhoneNumber(e)}
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							fontSize: scaleFontSize(13),
							flex: 1
						}}
						keyboardType="phone-pad" // Set the keyboard type to phone-pad for numeric input
					/>
				</View>
			</View>

		</>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	secoundContainer: {
		height: Dimensions.get("screen").height * 0.8,

		backgroundColor: COLORS.secoundry,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		padding: 20,
		// marginTop: 30,
		// paddingVertical: 50
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
		marginVertical: 30
	},
	btnContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		marginBottom: 20,
		marginHorizontal: 20,

	},

	otpInput: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'grey',
		width: '80%',
		borderRadius: 10,
		marginTop: '10%',
		alignSelf: 'center',
		borderWidth: 1,
		borderColor: '#FFF'
	},
	otpDigit: {
		width: '90%', // Adjust width as needed
		height: 40, // Adjust height as needed
		fontSize: 14, // Adjust font size as needed
		borderColor: 'black', // Border color
		textAlign: 'center', // Center align the text
		color: '#ffff',
	},
});
