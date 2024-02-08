import { View, Text, AppState, BackHandler } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AppStack from './src/navigation/primaryStack/AppStack'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import { authToken } from './src/data/redux/slice/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { toast } from './src/utils/toast'
import { ModalPresenterParent } from '@whitespectre/rn-modal-presenter'
import { authenticate } from './src/utils/biometric'

const App = () => {
  


// CheckToken

const dispatch = useDispatch()
useEffect(() => {
  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      dispatch(authToken(token));
    } catch (error) {
      toast({type:"error",text1:"Error while getting the token"})
    }
  };
  checkToken();
}, [])












  return (
    <ModalPresenterParent>
      <AppStack/>
      <Toast />
      </ModalPresenterParent>
  )
}

export default App