import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createDrawerNavigator, DrawerItem, Image } from '@react-navigation/drawer';
import Home from '../screens/Home/home'
import Cupons from '../screens/Cupons/cupons'


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerStyle={{ backgroundColor: '#111', width: 280 }}
            overlayColor="transparent"
            drawerContentOptions={
                {
                    activeTintColor: '#FFC525', activeBackgroundColor: '#111',
                    labelStyle: { fontSize: 20 }, inactiveTintColor: '#fff'
                }}>
            <Drawer.Screen name="Início" component={Home}
                options={{
                    drawerLabel: 'Início',
                    drawerIcon: (({ focused }) => <Icon name="home-outline" size={40} color="#FFf" />),
                    size: 30, name: 'rocket'
                }} />

            <Drawer.Screen name="Cupons" component={Cupons}
                options={{
                    drawerLabel: 'Cupons',
                    drawerIcon: (({ focused }) => <Icon name="ticket-confirmation-outline" size={40} color="#FFf" />),
                    size: 30, name: 'rocket'
                }} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;

