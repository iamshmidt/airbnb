import React from 'react';
import {View, Text} from 'react-native';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import {Ionicons, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

const Layout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: Colors.primary, tabBarLabelStyle:{fontFamily:'mon-sb'}}}>
      <Tabs.Screen name="index" options={{tabBarLabel:'Explore', tabBarIcon:({color, size}) =><Ionicons name='search' color={color} size={size}></Ionicons> }}></Tabs.Screen>
      <Tabs.Screen name="wishlists" options={{tabBarLabel:'Wishlists', tabBarIcon:({color, size}) =><Ionicons name='heart-outline' color={color} size={size}></Ionicons> }}></Tabs.Screen>
      <Tabs.Screen name="trips" options={{tabBarLabel:'Trips', tabBarIcon:({color, size}) =><FontAwesome5 name='airbnb' color={color} size={size}></FontAwesome5> }}></Tabs.Screen>
      <Tabs.Screen name="inbox" options={{tabBarLabel:'Inbox', tabBarIcon:({color, size}) =><MaterialCommunityIcons name='message-outline' color={color} size={size}></MaterialCommunityIcons> }}></Tabs.Screen>
      <Tabs.Screen name="profile" options={{tabBarLabel:'Inbox', tabBarIcon:({color, size}) =><Ionicons name='person-circle-outline' color={color} size={size}></Ionicons> }}></Tabs.Screen>
    </Tabs>
  );
}
export default Layout;
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Link, Tabs } from 'expo-router';
// import { Pressable } from 'react-native';

// import Colors from '@/constants/Colors';
// import { useColorScheme } from '@/components/useColorScheme';
// import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         // Disable the static render of the header on web
//         // to prevent a hydration error in React Navigation v6.
//         headerShown: useClientOnlyValue(false, true),
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={Colors[colorScheme ?? 'light'].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="two"
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }

