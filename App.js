import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default class App extends Component {
  state={
    startConfetti:false
  }

  renderResults=() =>{
    this.setState({
      startConfetti:!this.state.startConfetti //toggles the visibilty of the text
    });
  } 
  render() {
    return (
      <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
          style={styles.dingButton}
          onPress={this.renderResults}
          underlayColor='#fff'>
          <Text style={styles.dingText}>Ding</Text>
      </TouchableOpacity>
      {this.state.startConfetti?<ConfettiCannon count={200} origin={{x: -10, y: 0}} />:null}
      </View>
    );
  }
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
