import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { twoFaOptionModalStyle } from './twoFaOptionModalStyle'
import { useTheme } from '@react-navigation/native'
import Modal from "react-native-modal"
import TwoFaAuthentication from '../twoFaAuthentication/TwoFaAuthentication'
import { showModal } from '@whitespectre/rn-modal-presenter'
import { login } from '../../../data/services/api/authApi'
import Loader from '../../loader/Loader'
import { toast } from '../../../utils/toast'
import { icons } from '../../../constants/icons'
import { userLogin } from '../../../data/services/authApi'

const TwoFaOptionModal = ({open,closeModal,userData,data,dismiss}) => {
const [loading, setLoading] = useState(false)
    const  {colors} = useTheme()


// open Modal

const handleOpenModal =async(val)=>{
  try {
    const requiredData = {
      email: userData.email,
      password: userData.password,
      verification_type: val,
    };
    setLoading(true)
    await userLogin(requiredData);
    dismiss()
    showModal(TwoFaAuthentication,{userData:requiredData,})
    setLoading(false)
  } catch (error) {
    setLoading(false)
    toast({type:"error",text1:error.response.data.detail})
  }
}

  return (
      <View
        style={[
          twoFaOptionModalStyle.innerModal,
        ]}>
          <Loader loading={loading}/>
          <TouchableOpacity onPress={()=>dismiss()} style={twoFaOptionModalStyle.crossView}>
          <icons.crossIcon/>
          </TouchableOpacity>
          <Text style={twoFaOptionModalStyle.mainText}>Choose the Option of Authentication</Text>
         <TouchableOpacity onPress={()=>handleOpenModal("phone")} style={twoFaOptionModalStyle.optionButtonMain}>
            <Text style={twoFaOptionModalStyle.optionButtonText}>If you prefer to receive a login code via SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleOpenModal("email")} style={twoFaOptionModalStyle.optionButtonMain} >
            <Text style={twoFaOptionModalStyle.optionButtonText}>If you prefer to receive a login code via EMAIL</Text>
            </TouchableOpacity>   
      </View>
  )
}

export default TwoFaOptionModal