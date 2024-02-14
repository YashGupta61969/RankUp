import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {images} from '../../../constants/images';
import {authRoutes} from '../../../constants/routes';
import {color} from '../../../constants/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../constants/dimension';
import {fonts} from '../../../constants/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../../../constants/fontSize';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};
const LinearBackground = ['#1C28AA', '#3A86FF', '#FFFFFF'];

const slides = [
  {
    id: '1',
    image: images.ImageOne,
    title: `Easy to use for all ${"\n"} Branches of the Military`,
    subtitle: `This app is meant to make life easy for all the ${'\n'} Veterans of the branches of the US Military.`,
  },
  {
    id: '2',
    image: images.ImageTwo,
    title: `Easy Evaluation ${"\n"} Procedure`,
    subtitle: `Easily state your activities, the results and it ${'\n'} impacts to the community.`
  },
  {
    id: '3',
    image: images.ImageThree,
    title: `AI Generated ${"\n"} Evaluation content`,
    subtitle: `Enjoy the AI generated features to help your${'\n'} evaluation seamless alongside other amazing ${'\n'} features. `
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item?.image}
        style={{height: '70%', width, resizeMode: 'contain',marginTop:verticalScale(20)}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.18,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: color.darkViolet,
                  width: 28,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={styles.buttonView}>
               <TouchableOpacity onPress={()=>navigation.replace(authRoutes.Login)} style={{width: '100%'}}>
               <LinearGradient
                 colors={['#3A86FF', '#1C28AA']}
                 style={[styles.proceedButton,{width:"100%"}]}>
                 <Text style={styles.proceedText}>Proceed</Text>
               </LinearGradient>
             </TouchableOpacity>
             </View>
          ) : (
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={goToNextSlide}
                style={styles.nextButton}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={skip} style={styles.skipButton}>
                <LinearGradient
                  colors={['#3A86FF', '#1C28AA']}
                  style={{
                    paddingVertical: verticalScale(10),
                    borderRadius: moderateScale(10),
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Text style={styles.skipButtonText}>Skip</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={LinearBackground}
        style={{flex: 1, alignItems: 'center'}}>
        <StatusBar backgroundColor={'#1C28AA'} barStyle="light-content" />
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{height: height * 0.75}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: color.white,
    fontSize:RFValue(sizes.p3,667),
    marginTop: 10,
    textAlign: 'center',
    fontFamily:fonts.medium
  },
  title: {
    color: color.white,
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
    fontFamily:fonts.bold
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 8,
    width: 8,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: moderateScale(10),
  },
  btn: {
    flex: 1,
    height: verticalScale(40),
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  nextButton: {
    borderWidth: 1.5,
    borderRadius: moderateScale(10),
    width: '35%',
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
    width: '35%',
    paddingVertical: verticalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButtonText: {
    fontFamily: fonts.medium,
    color: color.white,
  },
  proceedButton: {
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  proceedText: {
    fontFamily: fonts.medium,
    color: color.white,
  },
});
export default Onboarding;
