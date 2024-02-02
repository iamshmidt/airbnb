import { Link } from 'expo-router';
import { StyleSheet, Text, View  } from 'react-native';


export default function Page() {
  return (
    <View >
      <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>Booking</Link>
      <Link href={'/listing/1337'}>Listing details</Link>
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
