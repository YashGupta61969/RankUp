import {Dimensions, StyleSheet} from 'react-native';
import {verticalScale} from '../../../constants/dimension';
import {color} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import { sizes } from '../../../constants/fontSize';


const windowWidth = Dimensions.get("window").width

export const childHeaderStyle = StyleSheet.create({
  childHeaderMain: {
    paddingVertical: verticalScale(3),
  },
  childHeaderInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftButtonView: {
    width:'12%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.lightGrey,
    borderRadius: 5,
    paddingVertical:verticalScale(8)
  },
  textView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.p1, 667),
    color: color.blue_brand,
  },
});
