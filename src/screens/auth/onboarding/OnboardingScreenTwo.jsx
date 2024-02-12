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
import { authRoutes } from '../../../constants/routes';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreenTwo = () => {
  const LinearBackground = ['#1C28AA', '#3A86FF', '#FFFFFF'];
  const {navigate} = useNavigation()
  // next

  const handleNext = ()=>{
    navigate(authRoutes.OnBoardingThree)
    }
  
    const handleSkip = ()=>{
      navigate(authRoutes.Login)
    }


  return (
    <LinearGradient
      colors={LinearBackground}
      style={{flex: 1,  alignItems: 'center'}}>
      <StatusBar backgroundColor={'#1C28AA'} barStyle="light-content" />

      <View style={[onBoardingScreenStyle.onBoardingMain,{marginBottom:verticalScale(30)}]}>
        <Text style={onBoardingScreenStyle.onBoardingHeading}>
          Easy Evaluation{'\n'}Procedure
        </Text>
        <Text style={onBoardingScreenStyle.subHeading}>
          Easily state your activities, the results and it{'\n'}impacts to the
          community.
        </Text>
      </View>

      <images.OnboardingScreenTwoImage />


      <View style={{flexDirection: 'row', alignItems: 'center',marginTop:verticalScale(70),marginBottom:verticalScale(20)}}>
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
          }}
        />
      </View>

      <View style={onBoardingScreenStyle.buttonView}>
        <TouchableOpacity onPress={handleNext} style={onBoardingScreenStyle.nextButton}>
          <Text style={onBoardingScreenStyle.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSkip} style={onBoardingScreenStyle.skipButton}>
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

export default OnboardingScreenTwo;
