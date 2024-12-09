import React, { useEffect } from "react"
import { FontAwesome6 } from "@expo/vector-icons"
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"
type Icons = {
    size: number, color: string
}
export const ProjectIcon: React.FC<Icons> = ({ color, size }) => {
    const selected = useSharedValue(0)
    const rotationStyles = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${selected.value * 2 * Math.PI}rad` }]
        }
    })
    useEffect(() => {
        if (selected.value === 0) {
            selected.value = withSpring(2)
        } else {
            selected.value = withSpring(0)
        }
    }, [color])
    return (
        <Animated.View style={rotationStyles}>
            <FontAwesome6 name="react" size={size} color={color} />
        </Animated.View>
    )
}

export const ProfileIcon: React.FC<Icons> = ({ color, size }) => {
    const animatedColor = useSharedValue(color)
    useEffect(() => {
        animatedColor.value = withTiming(color, { duration: 2000 })
    }, [color])
    const animatedStyle = useAnimatedStyle(() => ({
        color: animatedColor.value,
    }));
    return (
        <Animated.View>
            <FontAwesome name="user-circle" size={size} color={color} style={animatedStyle} />
        </Animated.View>
    )
} 