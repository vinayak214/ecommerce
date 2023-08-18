import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigator from './navigation/StackNavigator'
import { Provider } from 'react-redux'
import store from './store'
import { ModalPortal } from "react-native-modals";
import { UserContext } from './context/UserContext'


const App = () => {
  return (
    <>
      <Provider store={store}>
        <UserContext>
          <StackNavigator />
          <ModalPortal />
        </UserContext>
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})