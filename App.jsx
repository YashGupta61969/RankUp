import { View, Text, AppState, BackHandler,Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AppStack from './src/navigation/primaryStack/AppStack'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import { authToken } from './src/data/redux/slice/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { toast } from './src/utils/toast'
import { ModalPresenterParent } from '@whitespectre/rn-modal-presenter'
import { authenticate } from './src/utils/biometric'
import SplashScreen from 'react-native-splash-screen'
import NetInfo from "@react-native-community/netinfo";
import InternetScreen from './src/screens/InternetScreen/InternetScreen'
const App = () => {

  
  
const [isConnected, setIsConnected] = useState(true);

  const dispatch = useDispatch()
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('Token');
        dispatch(authToken(token));
        setTimeout(() => {
          SplashScreen.hide()
        }, 50);
      } catch (error) {
        toast({type:"error",text1:"Error while getting the token"})
      }
    };
    checkToken();

    // setTimeout(() => {
    //   const trialFunction = async()=>{
    //     try {
    //       await AsyncStorage.setItem("Token","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyOTg3NTI0LCJpYXQiOjE3MDI5MDExMjQsImp0aSI6ImY1MmM0ODhmZmFmMjRjMzFhN2JhNmRmZGQzNzY0ZmM0IiwidXNlcl9pZCI6MjI5fQ.8jsYUakwCqikiaTHEb2CPwBSWavtCrmzKzLHhLm7Tog")
    //       dispatch(authToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyOTg3NTI0LCJpYXQiOjE3MDI5MDExMjQsImp0aSI6ImY1MmM0ODhmZmFmMjRjMzFhN2JhNmRmZGQzNzY0ZmM0IiwidXNlcl9pZCI6MjI5fQ.8jsYUakwCqikiaTHEb2CPwBSWavtCrmzKzLHhLm7Tog"))
    //     } catch (error) {
    //       console.log("error",error)
    //     }
    //   }
    //   trialFunction()
    // }, 15000);
  }, [])
  


  


  
  

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, [])






  return (
    <ModalPresenterParent>
     {isConnected ? (
        <AppStack />
      ) : (
        <InternetScreen />
      )}
      <Toast />
      </ModalPresenterParent>
  )
}

export default App