import React from 'react';
import { createDrawerNavigator, DrawerItem, Image} from '@react-navigation/drawer';
import Home from '../screens/Home/home'
import Cupons from '../screens/Cupons/cupons'


const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
return(
    <Drawer.Navigator 
    drawerStyle={{backgroundColor: '#111', width: 280}}
    overlayColor="transparent"
    drawerContentOptions={
        {
        activeTintColor:'#FFC525', activeBackgroundColor:'#111',
        labelStyle:{fontSize:20}, inactiveTintColor:'#fff'
        }}>
        <Drawer.Screen name="Início" component={Home} />
        <Drawer.Screen name="Cupons" component={Cupons} />
    </Drawer.Navigator>
)
}
export default DrawerNavigator;