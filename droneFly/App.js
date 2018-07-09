import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import StackNav from './components/StackNav'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StackNav />
    );
  }
}
