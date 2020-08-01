import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
          style={styles.dingButton}
          onPress={() => alert('You tapped the button!')}
          underlayColor='#fff'>
          <Text style={styles.dingText}>Ding</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dingButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    padding: 20,
    backgroundColor:'#33FF99',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  dingText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      fontSize: 50,
  }
});
