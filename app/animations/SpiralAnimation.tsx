import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
const SIZE = 100
const SpiralAnimation = () => {
    const progress = useSharedValue(1)
    const scale = useSharedValue(2)
    const reanimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: scale.value,
            }, {
                rotate: `${progress.value * 2 * Math.PI}rad`
            }],
            borderRadius: (progress.value * SIZE) / 2,
            opacity: progress.value
        }
    }, [])
    const handleAnimation = () => {
        progress.value = 1
        scale.value = 2
        progress.value = withRepeat(withSpring(0.5), 3)
        scale.value = withRepeat(withSpring(1), 3, true)
    }
    useEffect(() => {
        handleAnimation()
    }, [])
    return (
        <View style={styles.container} >
            <Animated.View style={[styles.box, reanimatedStyles]} />
            <Pressable style={styles.buttonStyle} onPress={() => handleAnimation()}>
                <Text style={{ color: "white", fontSize: 24, }}>{"Restart"}</Text>
            </Pressable>
        </View>
    )
}

export default SpiralAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    box: {
        height: SIZE,
        width: SIZE,
        backgroundColor: "blue",
    },
    buttonStyle: {
        position: "absolute",
        bottom: "20%",
        width: SIZE * 3,
        height: SIZE / 2,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZE / 4
    }
})