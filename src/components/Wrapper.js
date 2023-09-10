import React from 'react';
import {Dimensions, StyleSheet, ImageBackground, View, StatusBar} from 'react-native';
import { COLORS } from '../constants/colors';

const WidthDimension = Dimensions.get('window').width;
const HeightDimension = Dimensions.get('window').height;

const Wrapper = props => {
  return (
    <>
    <StatusBar barStyle={"light-content"} backgroundColor={COLORS.primary}/>
    <View style={style.container}>{props.children}</View>
    </>
  );
};

export default Wrapper;

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: WidthDimension,
    backgroundColor: COLORS.primary,
  },
});
