import { useLocalSearchParams } from 'expo-router';
import {  Text, View, StyleSheet  } from 'react-native';
import listingsData from '../../assets/data/airbnb-listings.json';


export default function Page() {
    const {id} = useLocalSearchParams<{id: string}>();
    const listing = (listingsData as any[]).find((item) => item.id === id);
  return (
    <View style={styles.container}>
      <Text>Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
