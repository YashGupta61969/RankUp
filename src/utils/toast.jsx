import Toast from 'react-native-toast-message';
import { fonts } from '../constants/fonts';
import { color } from '../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../constants/fontSize';

export const toast = ({type, text1}) => {

  Toast.show({
    type: type,
    position: 'bottom',
    text1: text1,
    visibilityTime: 2500,
    text1Style:{
      fontFamily:fonts.regular,
      color:color.black,
      fontSize:RFValue(sizes.p6,667)
    }
    
    
    // bottomOffset: 50,
    
  });
};
