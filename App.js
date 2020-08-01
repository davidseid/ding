import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Audio } from 'expo-av';

const soundObject = new Audio.Sound();


export default class App extends Component {
  constructor(props) {
    super(props);
    this.explosion;

    this.loadSounds();
  }

  loadSounds = async () => {
    try {
      await soundObject.loadAsync(require('./assets/sounds/ding-sound-effect_2.mp3'));
    } catch (error) {
      // An error occurred!
    }
  }

  // state={
  //   exploded:false
  // }


  renderResults= async () =>{

    try {
      await soundObject.replayAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }

    this.explosion && this.explosion.start();

    // this.setState({
    //   exploded:!this.state.exploded //toggles the visibilty of the text
    // });

  } 
  render() {
    return (
      <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
          style={styles.dingButton}
          onPress={this.renderResults}
          underlayColor='#fff'>
          <Text style={styles.dingText}>Ding!</Text>
      </TouchableOpacity>
      <ConfettiCannon 
        count={70} 
        origin={{x: -10, y: 0}}
        explosionSpeed={400}
        fallSpeed={3000}
        autoStart={false} 
        fadeOut={true} 
        ref={ref => (this.explosion = ref)}
      />
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
