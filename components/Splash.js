import React from 'react'
import { StyleSheet , Text , View } from 'react-native'

export default class Splash extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <Text style={styles.title}> Baby how are going </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#33cabb',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})