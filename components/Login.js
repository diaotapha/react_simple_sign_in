import React from 'react'
import { StyleSheet , Text, View, Image, TouchableWithoutFeedback, StatusBar ,TextInput , SafeAreaView , Keyboard , TouchableOpacity , KeyboardAvoidingView } from 'react-native'

export default class Login extends React.Component{
    render(){
        return(

            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />

                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image 
                                    style={styles.logo} 
                                    source={require('../assets/MamBa.png')}
                                /> 
                            </View>

                            <View style={styles.infosContainer}>
                                <TextInput 
                                    style={styles.input}
                                    placeholder = "Enter Username / Email"
                                    placeholderTextColor = 'rgba(255 ,255 ,255 ,0.8)'
                                    keyboardType = 'email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={ ()=> this.refs.txtPassword.focus() }
                                />

                                <TextInput 
                                    style={styles.input}
                                    placeholder = "Password"
                                    placeholderTextColor = 'rgba(255 ,255 ,255 ,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />

                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.textButton}> SIGN IN</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>

              
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        // flex: 1
    },
    infosContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 10,
        // backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255 , 255, 255, 0.2)',
        color: '#F6E8B1',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    buttonContainer:{
        backgroundColor: '#F6E8B1',
        paddingVertical: 15
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#570906'
    }
})