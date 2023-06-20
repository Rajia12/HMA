import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';
import Constants from 'expo-constants';

export function Attendance() {
  return(
    <View style={styles.container}>
      <View style={styles.box} onPress={() => {}}></View>
      <Text style={styles.roundedButtonText}>Scan the QR code from Admin desk</Text>
      <Text style={styles.Text2}>{moment().format('DD MMM, YYYY')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'center',
    padding: 20,
    // alignContent: 'center',
    backgroundColor: '#000',
    // padding: 8,
  },
  box: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'green',
    borderRadius: 10,
    width: 100,
    height: 100,
    marginHorizontal: 'auto',
    marginVertical: 20
  },
  roundedButtonText: {
    color: 'green',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Text2: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  }
});