import React from 'react'
import { AsyncStorage } from 'react-native'

import { TOKEN } from '../config/constants'

import Loading from '../Screens/Loading'
import LoginScreen from '../Screens/LoginScreen'
import RootNavigator from '../Screens/RootNavigator'

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedSignedIn: false,
            isSignedIn: false
        }
    }

    async componentWillMount() {
        const token = await AsyncStorage.getItem(TOKEN)
        if (token) {
            this.setState({ isSignedIn: true})
        }
        this.setState({ checkedSignedIn: true })
    }

    async _login(token) {
        await AsyncStorage.setItem(TOKEN, token)
        this.setState({ isSignedIn: true })
    }

    async _logout() {
        await AsyncStorage.removeItem(TOKEN)
        this.setState({ isSignedIn: false })
    }

    render() {
        const { checkedSignedIn, isSignedIn } = this.state

        if (!checkedSignedIn) {
            return <Loading />
        }

        if (!isSignedIn) {
            return (
                <LoginScreen
                  _login={ this._login.bind(this) }
                />
            )
        }

        if (isSignedIn) {
            return (
                <RootNavigator
                  screenProps={{
                      _logout: this._logout.bind(this)
                  }}
                />
            )
        }
    }
}

export default LoginContainer