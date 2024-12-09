import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/commonjs/src/types'
import { useTheme } from '@react-navigation/native'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated'

type TabBarButtonProps = {
    onPress: ((event: GestureResponderEvent) => void) | undefined,
    pageButton: StyleProp<ViewStyle>
    icon: React.ReactNode,
    isFocused: boolean
    label: string | ((props: {
        focused: boolean;
        color: string;
        position: LabelPosition;
        children: string;
    }) => React.ReactNode)
}
const TabButton: React.FC<TabBarButtonProps> = ({ onPress, pageButton, icon, isFocused, label }) => {
    const { colors } = useTheme();
    const scale = useSharedValue(0.8)
    const size = useSharedValue(0)
    const [height, setHeight] = useState<number>(0)

    useEffect(() => {
        if (isFocused) {
            scale.value = withSpring(1.2)
            size.value = withSpring(height)
        } else {
            scale.value = withSpring(0.8)
            size.value = withSpring(0)
        }
    }, [isFocused])
    const scaleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }]
        }
    })
    const sizeStyle = useAnimatedStyle(() => {
        return {
            width: size.value,
            height: size.value,
            borderRadius: size.value,
            backgroundColor: "#d8bfd8",
            // position: "absolute",
            // bottom: 0,
            zIndex: -1,
            alignSelf: "center"
        }
    })
    return (
        <Pressable
            onPress={onPress} onLayout={(e) => {
                setHeight(e.nativeEvent.layout.height)
            }}>
            <Animated.View
                style={[scaleStyle, pageButton]}
            >
                {icon}
                <Text style={{ color: isFocused ? "purple" : colors.border, textAlign: "center", fontSize: 10 }}>
                    {label.toString()}
                </Text>
            </Animated.View>
            <Animated.View style={sizeStyle} />
        </Pressable>
    )
}

export default TabButton

