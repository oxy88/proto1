import React from 'react'
import { Image, View } from 'react-native'
import { Content, Button, Text, Container } from 'native-base'

import logo from '../assets/logo.png'

class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={logo} style={{flex: 4, width: 300, height: 300}} />
                <View style={{flex: 1, width: "100%", paddingBottom: 50 }}>
                <Button block rounded style={{ backgroundColor: "#DD4B39", margin: 10}}
                  onPress={() => this.props._login('googletoken') }>
                    <Text>구글 로그인</Text>
                </Button>
                <Button block rounded style={{ backgroundColor: "#3b5998", margin: 10}}
                  onPress={() => this.props._login('facebooktoken') }>
                    <Text>페이스북 로그인</Text>
                </Button>
                </View>
            </View>
        )
    }
}

export default LoginScreen