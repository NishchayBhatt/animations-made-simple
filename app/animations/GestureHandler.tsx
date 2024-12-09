import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GestureHandler = () => {
    return (
        <View style={styles.container}>
            <Text>GestureHandler</Text>
        </View>
    )
}

export default GestureHandler

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})