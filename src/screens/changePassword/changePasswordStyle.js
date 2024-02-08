import {StyleSheet} from 'react-native';
import {color} from '../../constants/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants/dimension';
import {fonts} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {sizes} from '../../constants/fontSize';

export const changePasswordStyle = StyleSheet.create({
  changePasswordMain: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(5),
    paddingHorizontal: horizontalScale(17),
  },

  informationView: {
    marginTop: verticalScale(20),
  },
  informationDetailWrapper: {
    marginVertical: verticalScale(5),
  },
  informationTextHeading: {
    fontFamily: fonts.medium,
    color: color.lightBlack,
    fontSize: RFValue(sizes.p3, 667),
  },
  inputbox: {
    borderWidth: 1.5,
    borderRadius: moderateScale(10),
    marginVertical: verticalScale(10),
    borderColor: color.grey,
    paddingHorizontal: horizontalScale(10),
    backgroundColor: color.grey,
  },
  buttonMainView: {
    // height:"18%",
    justifyContent: 'flex-end',
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
  errorText: {
    color: 'red',
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p5, 667),
  },
});
