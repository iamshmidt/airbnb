import { useLocalSearchParams } from 'expo-router';
import {  Text, View  } from 'react-native';


export default function Page() {
    const {id} = useLocalSearchParams<{id: string}>();
  return (
    <View >
      <Text>Page</Text>
    </View>
  );
}