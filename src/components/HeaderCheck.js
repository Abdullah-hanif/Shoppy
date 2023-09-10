

import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { COLORS, FontFamily } from '../constants/colors';
import {Entypo} from "@expo/vector-icons"
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { width } = Dimensions.get('window');
const stepWidth = width / 3; // Assuming there are 3 steps

const HeaderCheck = ({activeStep, doneStep, notVisited}) => {
    const [check,setCheck]=useState(true)
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <View style={[styles.circle,{backgroundColor:COLORS.secoundry,    borderColor:activeStep?COLORS.secoundry:COLORS.gray,}]}>
          {!check?
            <Text style={styles.label}>1</Text>:<Entypo name='check' color={COLORS.white}/>
            }
        </View>
        <Text style={styles.name}>Idioma</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.stepContainer}>
        <View style={[styles.circle,{    borderColor:activeStep?COLORS.secoundry:COLORS.gray,}]}>
          <Text style={[styles.label,{color:activeStep? COLORS.secoundry:COLORS.gray}]}>2</Text>
        </View>
        <Text style={[styles.name,{color:activeStep? COLORS.secoundry:COLORS.gray}]}>Accesso</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.stepContainer}>
        <View style={[styles.circle,{    borderColor:activeStep?COLORS.secoundry:COLORS.gray,}]}>
          <Text style={[styles.label,{color:activeStep? COLORS.secoundry:COLORS.gray}]}>3</Text>
        </View>
        <Text style={[styles.name,{color:activeStep? COLORS.secoundry:COLORS.gray}]}>Bienvenida</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:15
    // paddingHorizontal: stepWidth / 4,
  },
  stepContainer: {
    alignItems: 'center',
    // paddingHorizontal: stepWidth / 8,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 20,
    // backgroundColor: 'gray',

    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    
    fontWeight: 'bold',
  },
  name: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
    color:COLORS.secoundry,
    fontFamily:FontFamily.Outfit_Medium,
    
  },
  line: {
    // flex: 1,
    backgroundColor:COLORS.gray,
    bottom:7,
    width:Dimensions.get("screen").width/4,
    height: 1,


  },
});

export default HeaderCheck;

