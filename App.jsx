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
        console.log("hello");
      } catch (error) {
        toast({type:"error",text1:"Error while getting the token"})
      }
    };
    checkToken();
  }, [])
  


  // useEffect(() => {
  //   unsubscribe()
  // }, [])
  
  
  // const unsubscribe = NetInfo.addEventListener((state)=>{
  //   if(state.isConnected === false){
  //     Alert.alert("Not internet","Please reconnect to the Internet",[{
  //       text:"Reload App",
  //       onPress:()=>RNRestart.restart()
  //     }])
  //   }else if(state.isConnected === true){
  //     console.log("Connected")
  //   }
  // })
  

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