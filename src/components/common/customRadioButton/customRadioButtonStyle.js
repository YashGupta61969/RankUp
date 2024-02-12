import {StyleSheet} from 'react-native';
import { horizontalScale } from '../../../constants/dimension';


export const customRadioButtonStyle = StyleSheet.create({
  outerRadioButton: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: horizontalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerRadioButton: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
