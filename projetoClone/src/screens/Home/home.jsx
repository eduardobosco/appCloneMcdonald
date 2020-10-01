import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, View, Header, SafeAreaView } from 'react-native';
import ButtonRed from '../../components/ButtonRed';

const Home = ({ navigation }) => {
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#C70007' }} >
      <View style={styles.header}>

        <Image source={require('../../assets/images/icon_menu.png')}
          style={{ width: 30, height: 30 }}
          resizeMode='contain' />

        <Image source={require('../../assets/images/logo.png')}
          style={{ width: 30, height: 30 }}
          resizeMode='contain' />

        <Image source={require('../../assets/images/icon_cupom.png')}
          style={{ width: 30, height: 30 }}
          resizeMode='contain' />

      </View>

      <View>
        <Image source={require('../../assets/images/banner1.jpg')}
          style={styles.banner} />
      </View>

      <View style={styles.container}>
        <View>
          <ButtonRed
            buttonStyle={styles.button}
            image={require('../../assets/images/icon_cupom_amarelo.png')}
            title="Cupons"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View>
          <ButtonRed
            buttonStyle={styles.button}
            image={require('../../assets/images/icon_position_amarelo.png')}
            title="Restaurantes"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View>
          <ButtonRed
            buttonStyle={styles.button}
            image={require('../../assets/images/icon_menu_amarelo.png')}
            title="Menu"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#C70007',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C70007',
    padding: 10
  },
  container: {
    display: "flex",
    flexDirection: 'column',
    backgroundColor: '#C70007',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  banner: {
    resizeMode:'cover',
    width: 400,
    height:200,
    marginTop: 10,
    marginBottom:10,

  },
});

export default Home;