import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants/dimension';
import {color} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {sizes} from '../../constants/fontSize';
import {RFValue} from 'react-native-responsive-fontsize';

export const generatedNarrativeStyle = StyleSheet.create({
  generatedBulletMain: {
    flex: 1,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(17),
    backgroundColor: color.white,
  },

  bulletTitleDescription: {
    fontFamily: fonts.regular,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p4, 667),
  },
  bulletOptionsView: {
    backgroundColor: color.lightGrey,
    marginVertical: verticalScale(13),
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(12),
    borderWidth: 1,
    borderColor: color.grey,
    paddingTop: verticalScale(10),
  },
  bulletsText: {
    fontFamily: fonts.semiBold,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p2, 667),
    marginBottom: verticalScale(3),
  },
  bulletsTextDescription: {
    fontFamily: fonts.medium,
    color: color.blue_brand,
    fontSize: RFValue(sizes.p5, 667),
  },
  bulletOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    borderRadius: moderateScale(8),
    borderBottomWidth: 1,
  },
  bulletOptionInner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingLeft: horizontalScale(10),
    width: '100%',
    borderRadius: moderateScale(10),
  },
  dotView: {
    width: 4,
    height: 4,
    // backgroundColor: color.black,
    borderRadius: 10,
    marginTop: verticalScale(5),
  },
  bulletOptionsText: {
    fontFamily: fonts.medium,
    fontSize: RFValue(10.5, 667),
    marginLeft: horizontalScale(10),
    marginRight: horizontalScale(3),
    width: '84%',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    borderRadius: 5,
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
  },
  buttonText: {
    fontFamily: fonts.regular,
    color: color.white,
    fontSize: RFValue(sizes.p2, 667),
  },
});
