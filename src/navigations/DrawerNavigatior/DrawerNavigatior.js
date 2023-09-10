import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from "@react-navigation/drawer"
import { DeliveryAppBottomTab } from '../BottomTabNavigator/BottomTabNavigator'
import DrawerContent from './DrawerContent/DrawerContent'
import Pending from '../../screens/deliveryPending/Pending'
import DeliveryDetails from '../../screens/deliveryDetails/DeliveryDetails'
import DeliveryCollection from '../../screens/deliveryCollection/DeliveryCollection'

const DrawerNavigatior = (props) => {
  const Drawer=createDrawerNavigator()
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown:false,
     drawerStyle:{
      width:"100%"
     }
    }}
    drawerPosition="left"

    initialRouteName="Homee"
    overlayColor="rgba(15, 109, 58, 0.6)"
    activeTintColor="green"
    drawerContent={prop => <DrawerContent {...prop} props={prop} />}
    // //   drawerContent={Home}
  >

      <Drawer.Screen name='DeliveryAppBottomTab' component={DeliveryAppBottomTab}/>
      {/* new Screens */}
      <Drawer.Screen name="Pending" component={Pending}/>
		<Drawer.Screen name="DeliveryDetails" component={DeliveryDetails}/>
		<Drawer.Screen name="DeliveryCollection" component={DeliveryCollection}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigatior

const styles = StyleSheet.create({})