import React from 'react'
import { View, Text } from 'react-native'

import { StackNavigator, TabNavigator } from 'react-navigation'

import ProfileScreen from './ProfileScreen'
import TeamScreen from './Team/TeamScreen'
import ChatListScreen from './Chat/ChatListScreen'
import NewProfileScreen from './NewProfileScreen'

const MainTab = TabNavigator({
    Profile: {
        screen: ProfileScreen
    },
    Team: {
        screen: TeamScreen
    },
    ChatList: {
        screen: ChatListScreen
    },
}, {
    tabBarPosition: 'bottom',
})

const RootNavigator = StackNavigator({
    MainTab: {
        screen: MainTab,
        navigationOptions: {
            header: null
        }
    },
    NewProfile: {
        screen: NewProfileScreen
    }
}, {
    initialRouteName: "MainTab"
})

export default RootNavigator