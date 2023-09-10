import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {AntDesign,MaterialIcons} from "@expo/vector-icons"
import { COLORS, FontFamily } from '../constants/colors';
import { scaleFontSize } from '../utils/scaleFontSize';

const Card = ({ image, productName,onPress,iconUri }) => {
  return (
    <TouchableOpacity onPress={()=>onPress()} style={styles.card}>
      <Image source={require("../assets/Images/laptop.png")} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.productName}>Hasta $10,000 apagada</Text>
        <Text style={[styles.productName,{fontFamily:FontFamily.Outfit_Regular}]}>Hasta $10,000 apagada</Text>

       
      </View>
      <View style={styles.attachedView}>
        <MaterialIcons name='online-prediction' size={20} color={COLORS.gray}/>
      <Text style={{color:COLORS.gray,fontFamily:FontFamily.Outfit_Medium,fontSize:scaleFontSize(10)}}>Live Product Video</Text>
      </View>
      <View style={styles.heartContainer}>
        <HeartIcon />
      </View>
    </TouchableOpacity>
  );
};

const HeartIcon = () => {
  // Render your heart icon component here
  // Replace with your own heart icon component
  return (
    <>
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <View style={{height:30,width:30,backgroundColor:COLORS.secoundry,alignItems:"center",justifyContent:"center",borderRadius:30}}>
        <AntDesign size={15} name='heart' color={COLORS.white}/>
       
    </View>
    <Text style={{fontFamily:FontFamily.Outfit_Bold,color:COLORS.secoundry}}>25% off</Text>
    </View>
    </>
  )
};

const { width } = Dimensions.get('window');
const cardWidth = width * 0.45; // Adjust the card width as per your requirement

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor:COLORS.white,
    borderRadius: 8,
    height:cardWidth+50,
    justifyContent:"center",
    alignItems:"center",
    overflow: 'hidden',
    margin:5,
  },
  image: {
    width: '70%',
    height:"70%",
    // height: cardWidth +10, // Adjust the image height as per your requirement
    resizeMode: "contain",
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.lightGry,
  },
  productName: {
    color:COLORS.black,
    fontSize: scaleFontSize(10),
    fontFamily:FontFamily.Outfit_Bold
 
  },
  attachedView: {
    position: 'absolute',
    bottom: 55,
   width:"50%",
    left: 0,
   
    // backgroundColor: 'red',
    padding: 4,
  },
  attachedText: {
    color: 'white',
    fontSize: 12,
  },
  heartContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'transparent',
  },
  heartIcon: {
    fontSize: 24,
    color: 'red',
  },
});

export default Card;
