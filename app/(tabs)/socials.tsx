import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const socials = () => {
    return (
        <View style={styles.container}>
            <Text>{"Socials"}</Text>
        </View>
    )
}

export default socials

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.background,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})