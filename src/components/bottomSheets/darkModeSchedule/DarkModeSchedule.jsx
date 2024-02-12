import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {darkModeScheduleStyle} from './darkModeScheduleStyle';
import {icons} from '../../../constants/icons';
import Modal from 'react-native-modal';
import {showModal} from '@whitespectre/rn-modal-presenter';
import CustomTimeContent from '../../modals/customTimeContent/CustomTimeContent';
import {useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   setIsEnabled,
//   switchResponse,
// } from '../../../data/redux/slice/themeSlice';
import {useDispatch} from 'react-redux';
import { color } from '../../../constants/colors';

const DarkModeSchedule = ({open, closeModal, dismiss}) => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const timerRef = useRef(null);

  const customTimeModal = () => {
    closeModal();
    showModal(CustomTimeContent, {colors});
  };

  const padZero = number => {
    return number < 10 ? `0${number}` : `${number}`;
  };

  // const setSunriseToSunset = async () => {
  //   const enableDarkTheme = async () => {
  //     await AsyncStorage.setItem('DarkTheme', JSON.stringify(true));
  //     dispatch(switchResponse(true));
  //     dispatch(setIsEnabled(true));
  //   };

  //   const disableDarkTheme = async () => {
  //     await AsyncStorage.setItem('DarkTheme', JSON.stringify(false));
  //     dispatch(switchResponse(false));
  //     dispatch(setIsEnabled(false));
  //   };

    // const checkTimeAndSetTheme = () => {
    //   const currentDate = new Date();
    //   const hours = padZero(currentDate.getHours());
    //   const minutes = padZero(currentDate.getMinutes());
    //   const currentTime = `${hours}:${minutes}`;

    //   if (currentTime >= '07:00') {
    //     enableDarkTheme();
    //   } else if (currentTime >= '18:30') {
    //     disableDarkTheme();
    //   }
    // };

    // Clear any existing timer
    // if (timerRef.current) {
    //   clearInterval(timerRef.current);
    // }

    // // Check time at every minute
  //   timerRef.current = setInterval(checkTimeAndSetTheme, 60000);
  //   closeModal();
  // };

  // console.log(timerRef);

  // useEffect(() => {
  //   return () => {
  //     if (timerRef.current) {
  //       clearInterval(timerRef.current);
  //     }
  //   };
  // }, []);

  // Custom Time

  return (
    <View style={{flex: 1}}>
      <Modal
        transparent={true}
        animationType="none"
        isVisible={open}
        onBackdropPress={closeModal}
        style={darkModeScheduleStyle.modal}>
        <View
          style={[
            darkModeScheduleStyle.innerModal,
            {
              backgroundColor: color.white,
              borderColor: colors.cardBorder,
            },
          ]}>
          <View style={darkModeScheduleStyle.topRectangleLine}>
            <icons.BottomSheetRectangle />
          </View>
          <Text style={[darkModeScheduleStyle.mainText, {color: colors.text}]}>
            Dark mode schedule
          </Text>
          <View style={darkModeScheduleStyle.timeScheduleOptions}>
            <TouchableOpacity
              onPress={closeModal}
              style={darkModeScheduleStyle.timeOptionItem}>
              <Text
                style={[
                  darkModeScheduleStyle.timeOptionItemText,
                  {color: colors.text},
                ]}>
                None
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={customTimeModal}
              style={darkModeScheduleStyle.timeOptionItem}>
              <Text
                style={[
                  darkModeScheduleStyle.timeOptionItemText,
                  {color: colors.text},
                ]}>
                Turns on at custom time
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={setSunriseToSunset}
              style={darkModeScheduleStyle.timeOptionItem}>
              <Text
                style={[
                  darkModeScheduleStyle.timeOptionItemText,
                  {color: colors.text},
                ]}>
                Turns on from sunrise to sunset
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DarkModeSchedule;
