import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import { Link, Stack } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import listingsData from '../../assets/data/airbnb-listings.json';
// assets\data\airbnb-listings.json


export default function Page() {
  const [category, setCategory] = useState('Tiny homes')
  const items = useMemo(()=> listingsData as any, [])
  const onDataChanged = (category: string) => {
    setCategory(category)
  }
  return (
    <View style={{ flex: 1, marginTop:130}}>
      <Stack.Screen options={{
        header: () => <ExploreHeader onCategoryChanged={onDataChanged}></ExploreHeader>
      }} />
      <Listings listings={items} category={category}/>
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
