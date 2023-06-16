import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Constants from 'expo-constants';

export default function Attendance() {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={() => {}}>
      </TouchableOpacity>
      <Text style={styles.roundedButtonText}>Scan the QR code from Admin desk</Text>
      <Text style={styles.Text2}>{moment().format('DD MMM, YYYY')}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
  },
  box: {
    padding: 40,
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