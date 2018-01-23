import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'native-base'

class ProfileScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>ProfileScreen</Text>
                <Button onPress={() => this.props.screenProps._logout()}>
                  <Text>로그아웃</Text>
                </Button>
            </View>
        )
    }
}

export default ProfileScreen