import {View, Text, TouchableOpacity, TextInput, Platform} from 'react-native';
import {icons} from '../../../constants/icons';
import {customTimeContentStyle} from './customTimeContentStyle';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomTimeContent = ({dismiss, colors}) => {
  const padding = Platform.OS === 'ios' ? 14 : 9;
  const {switchValue} = useSelector(state => state.switch);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Custom Time Modal

  const getTimefromUser = async () => {
    await AsyncStorage.setItem('startTime', startTime);
    await AsyncStorage.setItem('endTime', endTime);
    dismiss();
  };

  return (
    <View
      style={[
        customTimeContentStyle.innerModal,
        {backgroundColor: colors.screenCard, borderColor: colors.cardBorder},
      ]}>
      <View style={customTimeContentStyle.innerModalTop}>
        <Text
          style={[customTimeContentStyle.headingText, {color: colors.text}]}>
          Custom time
        </Text>
        <TouchableOpacity onPress={() => dismiss()}>
          {switchValue === false ? (
            <icons.CrossButton width={35} height={35} />
          ) : (
            <icons.WhiteCrossIcon width={35} height={35} />
          )}
        </TouchableOpacity>
      </View>

      <View style={customTimeContentStyle.innerModalCenter}>
        <View style={customTimeContentStyle.timeView}>
          <Text style={[customTimeContentStyle.timeText, {color: colors.text}]}>
            Start time
          </Text>
          <TextInput
            maxLength={5}
            textAlign="center"
            placeholder="07:00"
            style={[customTimeContentStyle.input, {paddingVertical: padding}]}
            value={startTime}
            onChangeText={val => setStartTime(val)}
          />
        </View>
        <View style={customTimeContentStyle.timeView}>
          <Text style={[customTimeContentStyle.timeText, {color: colors.text}]}>
            End time
          </Text>
          <TextInput
            maxLength={5}
            textAlign="center"
            placeholder="08:00"
            style={[customTimeContentStyle.input, {paddingVertical: padding}]}
            value={endTime}
            onChangeText={val => setEndTime(val)}
          />
        </View>
      </View>

      <View style={customTimeContentStyle.buttonView}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => dismiss()}
          style={[
            customTimeContentStyle.cancelButton,
            {borderColor: colors.border},
          ]}>
          <Text
            style={[
              customTimeContentStyle.cancelButtonText,
              {color: colors.text},
            ]}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={customTimeContentStyle.deleteButton}
          onPress={getTimefromUser}
          activeOpacity={1}>
          <Text style={customTimeContentStyle.deleteButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomTimeContent;
