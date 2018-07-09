import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import MainScreen from '../screens/MainScreen'
import SteamScreen from '../screens/SteamScreen'

const StackNav = StackNavigator(
    {
        MainScreen: { screen: MainScreen },
        SteamScreen: { screen: SteamScreen }
    },
    {
        headerMode: 'none',
    }
)

export default StackNav