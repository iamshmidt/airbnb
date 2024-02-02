import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import { Button, Text, View  } from 'react-native';


export default function Page() {
  const {signOut, isSignedIn} = useAuth();
  return (
    <View >
      <Button title='Log out' onPress={()=> signOut()}></Button>
      {!isSignedIn && <Link href={'/(modals)/login'}><Text>Log in or sign up</Text></Link>}
    </View>
  );
}