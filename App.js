import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.prettyView}>
        <Text style={styles.prettyText}>Hello World!</Text>
        <Picker selectedValue="react">
          <Picker.Item label="Hybrid" value="hybrid" />
          <Picker.Item label="React Native" value="react" />
          <Picker.Item label="Native" value="native" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  prettyText: {
    fontSize: 30, 
    fontWeight: "900", 
    color: "pink", 
    textAlign: "center"
  },
  prettyView: {
    flex: 1, 
    justifyContent: "center"
  }
})