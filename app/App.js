import React from 'react'
import { Platform, StatusBar } from 'react-native'
import { Container } from 'native-base'
import { isIphoneX } from 'react-native-iphone-x-helper'

import LoginContainer from './Containers/LoginContainer'

class App extends React.Component {
  render() {
    const iosStyle = {}
    
    if (Platform.OS === 'ios') {
      if (isIphoneX()) {
        iosStyle.paddingTop = 48
      } else {
        iosStyle.paddingTop = 22
      }
    }
    
    return (
      <Container style={iosStyle}> 
        <LoginContainer/>
      </Container>
    )
  }
}

export default App