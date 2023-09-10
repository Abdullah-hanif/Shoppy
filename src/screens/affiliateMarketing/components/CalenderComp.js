import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import { scaleFontSize } from '../../../utils/scaleFontSize';
  import { COLORS, FontFamily } from '../../../constants/colors';
  import { responsiveFontSize } from '../../../utils/responsiveFontSize';
  import { LineChart } from 'react-native-chart-kit';
  import {AntDesign} from "@expo/vector-icons"
  
  const CalenderComp = () => {
    const data = {
		labels: ["1 May", "2 May", "3 May", "4 May", "5 May"],
		datasets: [
			{
				data: [20, 45, 28,],
				color: (opacity = 1) => {
					return `rgba(247, 101, 218,1)`;
				}, // Red line
				strokeWidth: 2
			},
			{
				data: [35, 60, 30,],
				color: (opacity = 1) => {
					return `rgba(45, 20, 93,1)`;
				}, // Green line
				strokeWidth: 2
			},
			{
				data: [5, 99, 10,],
				color: (opacity = 1) => {
					return `rgba(161, 39, 251,1)`;
				}, // Blue line
				strokeWidth: 2
			}
		]
	};
  
    const renderDot = ({ x, y, index, color }) => {
        console.log(x, y, index, color,"DDDDDDDDDD")
      return (
        <View
          key={index}
          style={{
            position: 'absolute',
            top: y - 6,
            left: x - 6,
            width: 12,
            height: 12,
            borderRadius: 6,
            borderWidth: 3,
            borderColor: color, // Border color same as line color
            backgroundColor: 'white',
          }}
        />
      );
    };
  
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: FontFamily.Outfit_Bold,
            color: COLORS.secoundry,
          }}
        >
          Gráfico de
          <Text
            style={{
              fontFamily: FontFamily.Outfit_Regular,
              color: COLORS.white,
            }}
          >
            tendencia
          </Text>
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* ... Rest of the code ... */}
          <View>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.lightGry,
							fontSize: responsiveFontSize(13)
						}}
					>
						Seleccionar fechas
					</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: COLORS.white,
							padding: scaleFontSize(10),
							borderRadius: 20,
							width: Dimensions.get("screen").width / 1.7
						}}
					>
						<Text
							style={{
								fontFamily: FontFamily.Outfit_Regular,
								color: COLORS.black,
								fontSize: responsiveFontSize(13)
							}}
						>
							01/05/2023 to 30/05/2023
						</Text>
						<TouchableOpacity>
							<Image
								style={{ height: 20, width: 20 }}
								resizeMode="contain"
								source={require("../../../assets/icons/calender.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<Text
						style={{
							fontFamily: FontFamily.Outfit_Regular,
							color: COLORS.lightGry,
							fontSize: responsiveFontSize(13)
						}}
					>
						Filtrar por mes
					</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							backgroundColor: COLORS.white,
							alignItems: "center",
							padding: scaleFontSize(10),
							borderRadius: 20
						}}
					>
						<Text
							style={{
								fontFamily: FontFamily.Outfit_Regular,
								color: COLORS.black,
								fontSize: responsiveFontSize(13)
							}}
						>
							Puede
						</Text>
						<AntDesign name="down" size={20} color={COLORS.black}/>
					</View>
				</View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
        >
          <LineChart
          
            data={data}
            width={Dimensions.get('window').width * 0.9}
            height={220}
            chartConfig={{
              backgroundGradientFrom: COLORS.lightBlack,
              backgroundGradientTo: COLORS.lightBlack,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgb(255, 255, 255)`,
              style: {
                borderRadius: 16,
              },
            }}
            renderDotContent={({ x, y, index }) =>
            renderDot({ x, y, index, color: data?.datasets[index]?.color() })
          }
          withHorizontalLines={false} // Remove horizontal lines (Y-axis)
          withVerticalLines={false}
            withDots // Show dots on the lines
            withShadow={false}
            withInnerLines={false}
            // bezier // Smooth lines between data points
          />

          <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,margin:10}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <CircelContainer bgColor="rgba(161, 39, 251, 1)" txt="Visitantes"/>
                <Text style={{color:COLORS.white}}>Visitantes</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <CircelContainer bgColor="rgba(45, 20, 93, 1)" txt="Visitantes"/>
                <Text style={{color:COLORS.white}}>Compras</Text>
            </View> 
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <CircelContainer bgColor="rgba(247, 101, 218, 1)" txt="Visitantes"/>
                <Text style={{color:COLORS.white}}>Dirige</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const CircelContainer=({bgColor,txt})=>{
    return(
        <>
        <View style={{ width: 12,
            height: 12,
            borderRadius: 10,
            borderWidth: 5,
            margin:10,
            padding:4,
            borderColor: bgColor, // Border color same as line color
            backgroundColor: 'white',}}>

<View style={{backgroundColor:COLORS.white}}/>

        </View>
        </>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: scaleFontSize(10),
      backgroundColor: COLORS.lightBlack,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: COLORS.gray,
      marginVertical: 20,
    },
  });
  
  export default CalenderComp;
  