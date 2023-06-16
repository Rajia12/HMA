import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function Payment() {

  const packages = [
    {
      name: 'Two days packages',
      price: '130'
    },
    {
      name: 'One days packages',
      price: '90'
    },
    {
      name: 'Four days packages',
      price: '300'
    }
  ]
  return(
    <View style={styles.container}>
      <View style={styles.container2}>
        {
          packages.map((i) => {
            return(
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <View style={styles.container3}>
                <Text style={styles.buttonText}>{i.name}</Text>
                <Text style={styles.buttonText}>{i.price}/-</Text>
              </View>
            </TouchableOpacity>
            )
          })
        }
        </View>
      <View style={{height: 40}} />
      <Text style={styles.buttonText2}>Two days packages selected</Text>
      <View style={styles.container4}>
        <TouchableOpacity style={styles.RoundedButton} onPress={() => {}}>
            <Text style={styles.roundedButtonText}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000000',
    padding: 8,
  },
  container3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  container4: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 5,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#ffffff',
    margin: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText2: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'medium',
    textAlign: 'center',
    margin: 12
  },
  RoundedButton: {
    backgroundColor: '#000000',
    width: 120,
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 60,
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: 'green',
  },
  roundedButtonText: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});