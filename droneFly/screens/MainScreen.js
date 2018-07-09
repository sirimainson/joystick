import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { Button, Header } from 'react-native-elements'

import styles from '../static/css/styles'

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'Drone Fly', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          statusBarProps={{ translucent: true }}
        />
        <View >
          <View style={styles.content}>
            <Text style={styles.welcome}>IP: </Text>
            <TextInput 
              placeholder='127.0.0.1'
              // underlineColorAndroid='transparent'
              style={styles.textinputIp}
            />
          </View>
          <View style={styles.content}>
            <TouchableOpacity 
              style={styles.btnConnect}
              onPress={() => {this.props.navigation.navigate('SteamScreen')}}
            >
              <Text style={styles.btnText}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnReset}>
              <Text style={styles.btnText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>    
      </View>
    );
  }
}
