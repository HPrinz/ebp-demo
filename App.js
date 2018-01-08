import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.prettyView}>
        <Text style={styles.prettyText}>Hello World!</Text>
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