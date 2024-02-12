import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {color} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {sizes} from '../../../constants/fontSize';

export const onBoardingScreenStyle = StyleSheet.create({
  onBoardingMain: {
    paddingVertical: verticalScale(10),
    
  },
  onBoardingHeading: {
    color: color.white,
    fontFamily: fonts.bold,
    textAlign: 'center',
    fontSize: RFValue(sizes.h7, 667),
    marginTop: verticalScale(30),
    marginBottom: verticalScale(10),
  },
  subHeading: {
    fontFamily: fonts.medium,
    color: color.white,
    textAlign: 'center',
    fontSize: RFValue(sizes.p6, 667),
    lineHeight: verticalScale(12),
  },
  imageWrapperMain:{
     borderColor:color.black,
     width:"100%",
     alignItems:"center",
     borderTopLeftRadius:horizontalScale(100),
     borderBottomEndRadius:horizontalScale(100),
     borderWidth:1,
     overflow:"hidden",
    transformOrigin:"top",
 transform:[{translateX:10}]
    //  transform:[{skewX:"10deg"}]
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: 'white',
    height: verticalScale(340),
    width: '100%',
  
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    // marginTop:verticalScale(20)
  },
  nextButton: {
    borderWidth: 1.5,
    borderRadius: moderateScale(10),
    width: '30%',
    paddingVertical: verticalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1C28AA',
  },
  buttonText: {
    fontFamily: fonts.medium,
    color: '#1C28AA',
  },
  skipButton: {
    borderRadius: moderateScale(10),
    width: '30%',
    paddingVertical: verticalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  skipButtonText:{
    fontFamily:fonts.medium,
    color:color.white
  },
  proceedButton:{
    width:"100%",paddingVertical:verticalScale(10),
    borderRadius:moderateScale(10),
    alignItems:"center",
    justifyContent:"center",
    marginBottom:verticalScale(10)
  },
  proceedText:{
    fontFamily:fonts.medium,
    color:color.white
  }
});
