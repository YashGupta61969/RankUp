import * as React from 'react';
import CheckBox from '@react-native-community/checkbox';
import { color } from '../../../constants/colors';
import { horizontalScale, moderateScale, verticalScale } from '../../../constants/dimension';
import { useTheme } from '@react-navigation/native';

const CustomCheckBox = ({onChange,selectedBullets,index}) => {
  const [checked, setChecked] = React.useState(false);


  const {colors} = useTheme()

  const handleValueChange = () => {
    setChecked(!checked);
    onChange && onChange(!checked);
  };



  return (
    <CheckBox
        boxType='square'   
        style={{width:20,height:20}}
        onCheckColor={color.black}
        onFillColor={color.white}
        value={checked}
        onValueChange={handleValueChange}
        tintColors={{ true: color.black, false: color.black }}
         
      />
  );
};

export default CustomCheckBox;