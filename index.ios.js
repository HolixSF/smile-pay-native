import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from 'apsl-react-native-button'

export default class SmileMobile extends Component {
  render() {
    const nav = [
      'Manage Payments',
      'Recent Transactions',
      'Meal Tracker',
      'Share',
      'Settings'
    ]
    const mappedNav = nav.map((item, index) => {
      return (
        <Button key={index} style={styles.buttons}>
          <View style={styles.text}>
            <Text >{item}</Text>
          </View>
        </Button>
      )
    })
    return (
      <View>
        <View style={styles.container}>
          <Image style={styles.image} source={require('./imgs/mills.png')} />
          <Text style={styles.name}> Millie Chan </Text>
          <Text style={styles.handle}> @mireechan </Text>
        </View>
        <View style={styles.container2}>
          {mappedNav}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  container2: {
    marginTop: 30,
    // backgroundColor: '#48BBEC',
    // paddingBottom: 10,
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center'
    // alignItems: 'center',
    alignSelf: 'center'
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 225,
    width: 225,
    borderRadius: 112.5,
    marginTop: 50,
    alignSelf: 'center'
  },
  buttons: {
    backgroundColor: 'red',
    width: 300
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('SmileMobile', () => SmileMobile);
