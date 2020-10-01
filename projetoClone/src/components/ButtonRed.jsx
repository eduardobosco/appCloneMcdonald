import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonRed = ({ image, buttonStyle, title, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <Image style={styles.buttonLogo} source={image}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#C70007',
    height: 150,
    borderBottomWidth: 1,
    borderColor: '#fff',
    marginTop: 0,
    padding: 0,

  },
  buttonText: {
    marginLeft: 120,
    alignSelf: 'center',
    fontSize: 20,
    color: '#FFF',
  },
  buttonLogo: {
    position: 'absolute',
    resizeMode:'contain',
    marginLeft: 40,
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
});

export default ButtonRed;

//marginTop: 20, marginBottom: 10