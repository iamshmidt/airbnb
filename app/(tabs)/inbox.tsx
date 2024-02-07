import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Text } from "react-native";
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import * as WebBrowser from 'expo-web-browser';
interface Country {
  name: string;
}

export default function Page() {
  // useWarmUpBrowser();
  //This line is called when the component mounts. warmUpAsync is  a method that initializes the web browser and makes it ready to be displayed faster. 
  // useEffect(() => {
  //   void WebBrowser.warmUpAsync();
  //   return () => {
  //     void WebBrowser.coolDownAsync();
  //   };
  // }, []);



  const number = 20;
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const [countries, setCountries] = useState<Country[]>([]);
  const [allData, setAllData] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [totalCountries, setTotalCountries] = useState<number | null>(null);
  const isMounted = useRef(true);
  //new
  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
}, []);


  const fetchData = async () => {
    // if(allData || loading) return;
    if(loading || (totalCountries!==null && countries.length >= totalCountries)) return;
    setIsLoading(true);
    try {
      const response = await fetch(`${url}?limit=${number}&offset=${offset}`);
      const data = await response.json();
      setTotalCountries(data.count);
      setCountries(prevCountries => [...prevCountries, ...data.results]);
      setOffset(prevOffset => prevOffset + number);
     
    } catch (error) {
      console.log('error', error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    //it will run only once when the component is mounted
      fetchData();
  }, []);

  const handleLoadMore = () => {
   if(!loading && (totalCountries === null || countries.length < totalCountries)) {
      fetchData();
   }
  };


  return (
    <View style={styles.container}>
      {/* The FlatList component is particularly optimized for long lists of items */}
      <FlatList data={countries}  keyExtractor={(item, index) => `country-${index}`}
      // Takes an item from data and renders it into the list. Typical usage:
        renderItem={({ item }) => <View style={styles.listItem}><Text>{item.name}</Text></View>}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2} 
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    height: "100%",
  },
  listItem: {
    width: "100%",
    height: "40px",
    padding: "8px",
    alignItems: "flexStart",
  },
});