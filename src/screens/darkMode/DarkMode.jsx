import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {darkModeStyle} from './darkModeStyle';
import {icons} from '../../constants/icons';
// import DarkModeSchedule from '../../components/bottomSheets/darkModeSchedule/DarkModeSchedule';
import CustomRadioButton from '../../components/common/customRadioButton/CustomRadioButton';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color} from '../../constants/colors';
import DarkModeSchedule from '../../components/bottomSheets/darkModeSchedule/DarkModeSchedule';
// import {setIsEnabled, switchResponse} from '../../data/redux/slice/themeSlice';

const DarkMode = () => {
  const [open, setOpen] = useState(false);
  const {colors} = useTheme();
  // const {switchValue} = useSelector(state => state.switch);
  // const [theme, setTheme] = useState(switchValue);

  const dispatch = useDispatch();

  // Dark Theme

  // AsyncStorage.getItem('DarkTheme').then(res => setTheme(res));

  // Custom Array


  const handleDarkModeOpen = () => {
    setOpen(true);
  };

  const handleDarkModeClose = () => {
    setOpen(false);
  };

  // handel light theme

  const handleLightTheme = async () => {
    await AsyncStorage.setItem('DarkTheme', JSON.stringify(false));
    dispatch(switchResponse(false));
    dispatch(setIsEnabled(false));
  };

  // Dark Theme

  const handleDarkTheme = async () => {
    await AsyncStorage.setItem('DarkTheme', JSON.stringify(true));
    dispatch(switchResponse(true));
    dispatch(setIsEnabled(true));
  };

  return (
    <View
      style={[
        darkModeStyle.darkModeMain,
        {backgroundColor: color.white},
      ]}>
      <ChildStackHeader text={accountRoutes.DarkMode} textColor={colors.text} />
      <View style={darkModeStyle.darkModeTopText}>
        <DarkModeSchedule open={open} closeModal={handleDarkModeClose} />
        <Text style={[darkModeStyle.darkModeTextOne, {color: colors.text}]}>
          This dark theme mode uses a dark background to help keep your battery
          alive for longer.
        </Text>
        <Text style={[darkModeStyle.darkModeTextOne, {color: colors.text}]}>
          With dark mode schedule, you can turn it on and off automatically.
        </Text>
      </View>

      <View
        style={[
          darkModeStyle.darkModeOption,
          {backgroundColor: color.lightGrey, borderColor: color.grey},
        ]}>
        <View
          style={[
            darkModeStyle.darkModeOptionItem,
            {borderColor: color.grey},
          ]}>
          <Text
            style={[
              darkModeStyle.darkModeOptionItemText,
              {color: colors.text},
            ]}>
            Light Theme
          </Text>
          <TouchableOpacity 
          // onPress={handleLightTheme}
          >
            <View
              style={[
                darkModeStyle.outerRadioButton,
                {borderColor: color.black},
              ]}>
              {/* {theme === 'false' || theme === null ? ( */}
                <View
                  style={[
                    darkModeStyle.innerRadioButton,
                    {backgroundColor: color.black},
                  ]}></View>
              {/* // ) : null} */}
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={[
            darkModeStyle.darkModeOptionItem,
            {borderColor: color.grey},
          ]}>
          <Text
            style={[
              darkModeStyle.darkModeOptionItemText,
              {color: color.lightBlack},
            ]}>
            Dark Theme
          </Text>
          <TouchableOpacity 
          // onPress={handleDarkTheme}
          >
            <View
              style={[
                darkModeStyle.outerRadioButton,
                {borderColor: color.black},
              ]}>
              {/* {theme === 'true' ? ( */}
                <View
                  style={[
                    darkModeStyle.innerRadioButton,
                    {backgroundColor: "transparent"},
                  ]}></View>
              {/* // ) : null} */}
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={1} 
        onPress={handleDarkModeOpen}
        >
          <View
            style={[
              darkModeStyle.darkModeScheduleOption,
              {borderBottomWidth: 0},
            ]}>
            <Text
              style={[
                darkModeStyle.darkModeOptionItemText,
                {color: colors.text},
              ]}>
              Schedule
            </Text>
            {/* {switchValue === false ? (
              <icons.RightArrow width={20} height={20} />
            ) : (
              <icons.RightArrowLight width={20} height={20} />
            )} */}
            <icons.RightArrow/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DarkMode;
