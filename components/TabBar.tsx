import { GestureResponderEvent, StyleSheet, View } from 'react-native'
import React, { Fragment, useState } from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import TabButton from './TabButton'

const TabBar: React.FC<BottomTabBarProps> = ({ descriptors, insets, navigation, state }) => {
    const { colors } = useTheme();
    return (
        <Fragment>
            <View style={styles.container}>

                {
                    state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        const isFocused = state.index === (index);
                        const icon = options.tabBarIcon ? options.tabBarIcon({ color: isFocused ? "purple" : colors.border, focused: isFocused, size: 24 }) : null

                        const onPress = (e?: GestureResponderEvent) => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name, route.params);
                            }
                        };
                        return (
                            <View key={label.toString()}>
                                <TabButton onPress={onPress} pageButton={styles.pageButton} icon={icon} isFocused={isFocused} label={label} />
                            </View>
                        );
                    })
                }
            </View>
            <View />
        </Fragment>
    );

}

export default TabBar

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: "2%",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: 50,
        borderColor: "#263560",
        elevation: 5,
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    pageButton: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    }
})