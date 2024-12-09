import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const profile = () => {
    return (
        <View style={styles.container}>
            <Text>profile</Text>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.background,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})