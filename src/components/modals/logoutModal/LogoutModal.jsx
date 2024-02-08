import {View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {logoutModalStyle} from './logoutModalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authToken} from '../../../data/redux/slice/authSlice';
import {useDispatch} from 'react-redux';
import {CommonActions, useNavigation, useTheme} from '@react-navigation/native';
import {
  setIsEnabled,
  switchResponse,
} from '../../../data/redux/slice/themeSlice';
import Loader from '../../loader/Loader';
import {toast} from '../../../utils/toast';
import {color} from '../../../constants/colors';
import {logout} from '../../../data/services/authApi';

const LogoutModal = ({open, closeModal}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {colors} = useTheme();
  const {navigation} = useNavigation();
  //   handleLogOut

  const handleLogout = async () => {
    try {
      setLoading(true);
      const {data} = await logout();
      console.log('data', data);
      if (data.detail === 'Logout successful') {
        dispatch(authToken(null));
        await AsyncStorage.clear();
      }
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'BottomStack' }],
        })
      );
      // dispatch(switchResponse(false));
      // dispatch(setIsEnabled(false));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      closeModal();
      // toast({type:"error",text1:error.response.data.detail})
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      isVisible={open}
      style={logoutModalStyle.modal}
      onBackdropPress={closeModal}>
      <Loader loading={loading} />
      <View
        style={[
          logoutModalStyle.innerModal,
          {backgroundColor: color.white, borderColor: color.grey},
        ]}>
        <Text style={[logoutModalStyle.mainText, {color: color.lightBlack}]}>
          Do you Want to Logout ?
        </Text>
        <View style={logoutModalStyle.Button}>
          <TouchableOpacity
            onPress={closeModal}
            style={logoutModalStyle.cancelButton}>
            <Text
              style={[logoutModalStyle.buttonText, {color: color.lightBlack}]}>
              No
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            style={logoutModalStyle.confirmButton}>
            <Text
              style={[logoutModalStyle.buttonText, {color: color.lightBlack}]}>
              Yes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
