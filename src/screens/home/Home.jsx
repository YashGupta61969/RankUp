import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {homeStyle} from './homeStyle';
import {color} from '../../constants/colors';
import {icons} from '../../constants/icons';
import {homeRoutes} from '../../constants/routes';
import {toast} from '../../utils/toast';
import {useFocusEffect} from '@react-navigation/native';
import {getProfile} from '../../data/services/authApi';
import {useSelector} from 'react-redux';
import {images} from '../../constants/images';

const Home = ({navigation}) => {
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(false);
  const {token} = useSelector(state => state.auth);

  useFocusEffect(
    React.useCallback(() => {
      handleGetProfile();
    }, [token]),
  );

  // Get user Profile

  const handleGetProfile = async () => {
    try {
      setLoading(true);
      const {data} = await getProfile();
      setUserData(data?.results);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
      toast({type: 'error', text1: error?.response?.data?.detail});
    }
  };

  // const image =require("../../assets/images/Home_image.jpg");

  return (
    <View style={[homeStyle.homeMain, {backgroundColor: color.white}]}>
      <StatusBar barStyle="dark-content" backgroundColor={color.white} />
      <View style={homeStyle.homeHeader}>
        <View style={homeStyle.imageMain}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={{
              uri: userData.profile_pic,
            }}
          />
        </View>
        <Text style={homeStyle.userText}>
          Welcome, {userData.first_name ? userData.first_name : 'User'}
        </Text>
      </View>
      {/* <Text style={homeStyle.informationText}>
        This is the new Narrative solution that was formerly known as Bullets.
        Where both OPR and EPR are now known as OPB and EPB.
      </Text> */}
      <View style={homeStyle.opbView}>
        <icons.InfoIcon width={30} height={30} />
        <Text style={homeStyle.opbText}>
          To create your own new OPB and EPB, click on the buttons below.
        </Text>
      </View>
      <View style={homeStyle.buttonWrapper}>
        <ImageBackground
          source={images.HomeImage}
          style={{
            height: 240,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text style={homeStyle.buttonWrapperTopText}>US AIR FORCE</Text>
          <View style={homeStyle.buttonView}>
            <TouchableOpacity
              onPress={() => navigation.navigate(homeRoutes.EPB, {type: 'opb'})}
              style={homeStyle.buttonMain}>
              <icons.AddOPB width={50} height={50} />
              <Text style={homeStyle.buttonText}>OPB</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(homeRoutes.EPB, {type: 'epb'})}
              style={homeStyle.buttonMain}>
              <icons.AddOPB width={50} height={50} />
              <Text style={homeStyle.buttonText}>EPB</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Home;
