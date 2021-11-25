/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { View, Text } from 'react-native'
import User from './src/User'

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>아래에 컴포넌트가 들어갑니다.</Text>
      <User name={'악당별'} id={'a9603'} />
    </View>
  );
};

export default App