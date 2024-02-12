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
import {authRoutes} from '../../../constants/routes';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreenThree = () => {
  const LinearBackground = ['#1C28AA', '#3A86FF', '#FFFFFF'];
  const {navigate} = useNavigation();
  // next

  const handleProceed = () => {
    navigate(authRoutes.Login);
  };

  return (
    <LinearGradient
      colors={LinearBackground}
      style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <StatusBar backgroundColor={'#1C28AA'} barStyle="light-content" />
      <View style={{marginTop: verticalScale(50)}}>
        <images.OnboardingScreenThreeImage />
      </View>
      <View>
        <Text style={onBoardingScreenStyle.onBoardingHeading}>
          AI Generated{'\n'}Evaluation content
        </Text>
        <Text style={onBoardingScreenStyle.subHeading}>
          EEnjoy the AI generated features to help your{'\n'}evaluation seamless
          alongside other amazing{'\n'}features.
        </Text>
      </View>


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
          }}
        />
      </View>

      <TouchableOpacity onPress={handleProceed} style={{width: '90%'}}>
        <LinearGradient
          colors={['#3A86FF', '#1C28AA']}
          style={onBoardingScreenStyle.proceedButton}>
          <Text style={onBoardingScreenStyle.proceedText}>Proceed</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default OnboardingScreenThree;
