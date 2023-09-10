import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/colors'
import { FontFamily } from '../constants/colors'
import { scaleFontSize } from '../utils/scaleFontSize'


const TextInputContainer = ({showEyeICon,placeholder,extracstyle,placeholderTextColor,eyeColor}) => {
const [showPassword,setShowPassword]=useState(false)
  return (
		<>
			<View style={styles.container}>
				<TextInput
       
					secureTextEntry={showPassword}
					style={[styles.txtInputStyle,
            extracstyle
          ]}
					placeholder={placeholder}
					placeholderTextColor={placeholderTextColor?placeholderTextColor:COLORS.lightGry}
				/>
				{showEyeICon ? (
          <>
          <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
					<Image
						style={[styles.eyeIconStyle,{tintColor:eyeColor&&eyeColor}]}
						source={require("../assets/icons/eye.png")}
					/>
          </TouchableOpacity>
          </>
				) : null}
			</View>
		</>
  );
}

export default TextInputContainer

const styles = StyleSheet.create({
    container:{
       marginVertical:scaleFontSize(10),
        backgroundColor:COLORS.white,
        padding:scaleFontSize(10),
        borderRadius:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
       
    },
    txtInputStyle:{
      width:"90%",
      fontFamily:FontFamily.Outfit_Medium,
    },
    eyeIconStyle:{
      height:scaleFontSize(20),
      width:scaleFontSize(20),
      resizeMode:"contain"

    }
})