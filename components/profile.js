import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
export function Profile() {
  return(
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
})