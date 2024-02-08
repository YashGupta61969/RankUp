import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../constants/dimension';
import {color} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {sizes} from '../../constants/fontSize';

export const eprStyle = StyleSheet.create({
  oprMain: {
    flex: 1,
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(17),
  },
  titleView: {
    paddingVertical: verticalScale(10),
    marginVertical: verticalScale(10),
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: horizontalScale(13),
    backgroundColor: color.lightSkyBlue,
  },
  titleText: {
    fontFamily: fonts.semiBold,
    fontSize: RFValue(sizes.p3, 667),
  },
  input: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    backgroundColor: color.white,
    marginVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(10),
    color: color.black,
    borderColor: color.shadowGrey,
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p6, 667),
  },
  formInstructionText: {
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.p4, 667),
  },

  categoryView: {
    marginTop: verticalScale(12),
  },
  dropdown: {
    marginVertical: verticalScale(10),
    height: 50,
    borderColor: color.grey,
    borderWidth: 0.5,
    paddingHorizontal: horizontalScale(10),
    backgroundColor: color.white,
    borderRadius: moderateScale(5),
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: RFValue(sizes.p4, 667),
    fontFamily: fonts.regular,
    color: color.lightBlack,
  },
  selectedTextStyle: {
    fontSize: RFValue(sizes.p4, 667),
    fontFamily: fonts.regular,
    color: color.lightBlack,
  },
  itemText: {
    fontFamily: fonts.medium,
    color: color.lightBlack,
    fontSize: RFValue(sizes.p5, 667),
    paddingLeft: horizontalScale(10),
  },
  dropdownBox: {
    minHeight: verticalScale(45),
    justifyContent: 'center',
  },

  formMainView: {
    marginVertical: verticalScale(15),
    paddingTop: verticalScale(10),
    paddingHorizontal: horizontalScale(13),
    borderRadius: moderateScale(10),
    borderWidth: 1,
  },
  formMainItems: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
  },
  formMainItemsText: {
    fontFamily: fonts.medium,
    fontSize: RFValue(sizes.p2, 667),
  },
  multilineInput: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    backgroundColor: color.white,
    marginTop: verticalScale(8),
    paddingHorizontal: horizontalScale(10),
    color: color.black,
    borderColor: color.shadowGrey,
    paddingTop: verticalScale(6),
  },
  countText: {
    fontFamily: fonts.regular,
    fontSize: RFValue(sizes.p5, 667),
    textAlign: 'right',
  },
  confirmationBox:{
    backgroundColor:color.red,
    borderRadius:moderateScale(10),
    paddingVertical:verticalScale(15),
    paddingHorizontal:horizontalScale(10),
    flexDirection:"row",
    alignItems:"center",
    marginBottom:verticalScale(25)
  },
  confirmationText:{
   fontFamily:fonts.regular,
   color:color.white,
   marginLeft:horizontalScale(15)
  },
  disableButton:{
   backgroundColor:color.darkGrey,
   paddingVertical:verticalScale(12),
   marginTop:verticalScale(10),
   alignItems:"center",
   borderRadius:moderateScale(10)
  },
  disableButtonText:{
  fontFamily:fonts.medium,
  color:color.white
  },
  
 
});
