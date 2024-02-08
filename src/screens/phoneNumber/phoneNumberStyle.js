import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants/dimension';
import {fonts} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {sizes} from '../../constants/fontSize';
import {color} from '../../constants/colors';

export const phoneNumberStyle = StyleSheet.create({
  phoneNumberMain: {
    flex: 1,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(18),
  },
  phoneNumberTopView: {
    marginVertical: verticalScale(30),
    height: '72%',
  },
  phoneNumberTopText: {
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p5, 667),
    width: '93%',
  },
  inputView: {
    marginVertical: verticalScale(12),
  },
  inputHeading: {
    color: color.black,
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.p3, 667),
  },
  input: {
    borderWidth: 1,
    borderColor: color.grey,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
    color: color.blue_brand,
    paddingHorizontal: horizontalScale(10),
    fontFamily: fonts.medium,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    borderRadius: 10,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(2),
  },
  buttonText: {
    fontFamily: fonts.medium,
    color: color.white,
    fontSize: RFValue(sizes.p2, 667),
  },
});
