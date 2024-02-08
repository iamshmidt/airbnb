import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{
        header: () => <ExploreHeader></ExploreHeader>
      }} />
      <Listings />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
