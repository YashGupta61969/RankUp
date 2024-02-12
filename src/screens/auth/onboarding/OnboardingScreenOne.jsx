import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {onBoardingScreenStyle} from './onBoardingScreenStyle';
import {color} from '../../../constants/colors';
import {images} from '../../../constants/images';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {useNavigation} from '@react-navigation/native';
import {authRoutes} from '../../../constants/routes';

const OnboardingScreenOne = () => {
  const LinearBackground = ['#1C28AA', '#3A86FF', '#FFFFFF'];
  const {navigate} = useNavigation();

  // next

  const handleNext = () => {
    navigate(authRoutes.OnBoardingTwo);
  };

  const handleSkip = () => {
    navigate(authRoutes.Login);
  };

  return (
    <LinearGradient
      colors={LinearBackground}
      style={{flex: 1, alignItems: 'center'}}>
      <StatusBar backgroundColor={'#1C28AA'} barStyle="light-content" />

      <View style={[onBoardingScreenStyle.onBoardingMain,{marginBottom:verticalScale(50)}]}>
        <Text style={onBoardingScreenStyle.onBoardingHeading}>
          Easy to use for all{'\n'}Branches of the Military
        </Text>
        <Text style={onBoardingScreenStyle.subHeading}>
          This app is meant to make life easy for all the{'\n'}Veterans of the
          branches of the US Military.
        </Text>
      </View>

      {/* <images.OnboardingScreenOne/> */}

<View style={onBoardingScreenStyle.imageWrapperMain}>
      <View
        style={[
          onBoardingScreenStyle.imageWrapper,
          {backgroundColor: color.white},
        ]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '75%',
            alignSelf: 'flex-end',
            marginRight: horizontalScale(10),
          }}>
          <images.OnboardingImageOne />
          <images.OnboardingImageTwo />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            width: '95%',
            marginLeft: horizontalScale(10),
          }}>
          <View style={{marginHorizontal: horizontalScale(28)}}>
            <images.OnboardingImageThree />
          </View>
          <View style={{marginHorizontal: horizontalScale(5)}}>
            <images.OnboardingImageFour />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            width: '80%',
            justifyContent: 'space-between',
          }}>
          <images.OnboardingImageFive />
          <images.OnboardingImageSix />
        </View>
      </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:verticalScale(40)}}>
        <View
          style={{
            width: 35,
            height: 9,
            borderRadius: moderateScale(10),
            backgroundColor: '#223cbc',
            marginRight: horizontalScale(6),
          }}
        />
        <View
          style={{
            width: 9,
            height: 9,
            borderRadius: moderateScale(10),
            backgroundColor: '#70a7ff',
            marginRight: horizontalScale(6),
          }}
        />
        <View
          style={{
            width: 9,
            height: 9,
            borderRadius: moderateScale(10),
            backgroundColor: '#70a7ff',
          }}
        />
      </View>

      <View style={onBoardingScreenStyle.buttonView}>
        <TouchableOpacity
          onPress={handleNext}
          style={onBoardingScreenStyle.nextButton}>
          <Text style={onBoardingScreenStyle.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSkip}
          style={onBoardingScreenStyle.skipButton}>
          <LinearGradient
            colors={['#3A86FF', '#1C28AA']}
            style={{
              width: '100%',
              paddingVertical: verticalScale(10),
              borderRadius: moderateScale(10),
              alignItems: 'center',
            }}>
            <Text style={onBoardingScreenStyle.skipButtonText}>Skip</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default OnboardingScreenOne;
