import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';
import Button from '../../components/Button';
import styles from './styles'


const Login = ({ navigation }) => {

        const goToHome = () => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Root' }],
            });
        };

    return (
        <KeyboardAvoidingView style={styles.container}>

            <ImageBackground style={styles.imageBackground}
                resizeMode='cover'
                source={require('../../assets/images/background.png')}>
            </ImageBackground>

            <View>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                <View>
                    <View style={styles.input}>

                        <TextInput style={styles.inputText}
                            placeholder="E-mail"
                            placeholderTextColor="#fff"></TextInput>

                        <TextInput style={styles.inputText}
                            placeholder="Senha"
                            placeholderTextColor="#fff"></TextInput>

                    </View>

                    <View>
                        <Text style={styles.senhaText}>Esqueci minha senha</Text>
                    </View>

                    <Button

                        title="ENTRAR"
                        onPress={goToHome} />

                    <Button
                        buttonStyle={{ backgroundColor: '#4268B3', borderWidth: 0, }}
                        title="ENTRAR COM FACEBOOK"
                        onPress={goToHome} />

                    <Button
                        buttonStyle={{ backgroundColor: '#32A854', borderWidth: 0 }}
                        title="ENTRAR COM GOOGLE"
                        onPress={goToHome} />

                    <View>
                        <Text style={styles.senhaText}>Criar uma nova conta</Text>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;

