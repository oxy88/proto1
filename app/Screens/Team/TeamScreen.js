import React from 'react'
import { View, Text } from 'react-native'
import I18n from '../../i18n/i18n'

class TeamScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>TeamScreen</Text>
                <Text>{I18n.t('greeting')}</Text>
            </View>
        )
    }
}

export default TeamScreen