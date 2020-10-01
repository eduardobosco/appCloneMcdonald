import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({buttonStyle, title, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderColor:'#fff',
    borderWidth:1,
    marginHorizontal: 70,
    marginTop: 20,
    padding: 15,
    borderRadius: 50,
    marginBottom:10,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#FFF',
  },
});

export default Button;

//marginTop: 20, marginBottom: 10