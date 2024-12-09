
import { Colors } from '@/constants/Colors';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{
      backgroundColor: Colors.light.background,
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Text>{"Hi My name is Nishchay. I am a App Dev"}</Text>
    </View>
  );
}
