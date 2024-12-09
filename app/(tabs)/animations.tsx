import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Animations from "@/app/animations"
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function AnimationScreens() {
    const pages: Array<any> = Object.keys(Animations)
    return (
        <SafeAreaView>
            <View style={{
                backgroundColor: Colors.light.background,
                width: "100%",
                height: "100%",
                paddingTop: 40,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <FlatList data={pages}
                    numColumns={2}
                    contentContainerStyle={{
                        justifyContent: "center",
                        alignItems: 'center',
                    }}
                    renderItem={({ item }) => {
                        return (
                            <Link style={{ marginHorizontal: 10 }} href={{
                                pathname: `/animations/${item}`
                            }}>
                                <View style={styles.linkContainer}>
                                    <Text style={styles.linkText} key={item}>{item}</Text>
                                </View>
                            </Link>
                        )
                    }} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    linkContainer: {
        height: 180,
        width: 180,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        borderRadius: 20,
        shadowColor: '#888', // Grey shadow color
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        // Shadow for Android
        elevation: 5, // Simulates shadow
    },
    linkText: {
        color: "white",
        fontSize: 20
    }
});
