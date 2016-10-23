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
          <View style={styles.methods}>
            <Text style={styles.text}>{item}</Text>
          </View>
        </Button>
      )
    })
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <Image style={styles.image} source={require('./imgs/nick.png')} />
        </View>
        <View style={styles.container2}>
          <Text style={styles.name}> Nick Davidson </Text>
          <Text style={styles.handle}> Software Engineer </Text>
          {mappedNav}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'whitesmoke'
  },
  container: {
    flex: .8,
    backgroundColor: '#fe8453'
  },
  container2: {
    // height: 400,
    // paddingTop: 25,
    // backgroundColor: '#fe8453',
    // paddingBottom: 10,
    flex: 3,
    flexDirection: 'column',
    // justifyContent: 'center'
    // alignItems: 'center',
    alignSelf: 'center'
  },
  name: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 5,
    color: '#7c7a79'
  },
  handle: {
    marginBottom: 40,
    alignSelf: 'center',
    fontSize: 20,
    color: '#7c7a79'
  },
  image: {
    height: 200,
    width: 200,
    borderWidth: 10,
    borderColor: '#fe8453',
    borderRadius: 100,
    marginTop: 40,
    alignSelf: 'center'
  },
  buttons: {
    backgroundColor: '#fe8453',
    width: 300,
    borderWidth: 0
  },
  methods: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
});

AppRegistry.registerComponent('SmileMobile', () => SmileMobile);
