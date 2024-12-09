import { Stack } from 'expo-router';
import * as Animations from "./index"
export default function AnimationsLayout() {
    const pages = Object.keys(Animations)
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {
                pages.map((page) => {
                    return (
                        <Stack.Screen name={page} key={page} />
                    )
                })
            }
        </Stack>
    );
}
