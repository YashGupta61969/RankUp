import {View, Text, TextInput, Platform, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {editProfileStyle} from './editProfileStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes, childStack} from '../../constants/routes';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTheme} from '@react-navigation/native';
import {verticalScale} from '../../constants/dimension';
import GradientButton from '../../components/buttons/GradientButton';
import Loader from '../../components/loader/Loader';
import { updateProfile } from '../../data/services/authApi';
import { toast } from '../../utils/toast';
import { color } from '../../constants/colors';

const EditProfile = ({route, navigation}) => {
  const {userData} = route.params;

  const [firstName, setFirstName] = useState(userData.first_name);
  const [lastName, setLastName] = useState(userData.last_name);
  const [state, setState] = useState(userData.state);
  const [city, setCity] = useState(userData.city);
  const [zipCode, setZipCode] = useState(userData.zip_code);
  const [loading, setLoading] = useState(false);
  const {colors} = useTheme();
  const inputPadding = Platform.OS === 'ios' ? 14 : 10;

  // Update Profile

  const handleUpdateProfile = async () => {
    const userData = {
       firstName,
       lastName,
       state,
       city,
       zipCode,
    };
    try {
      setLoading(true);
      const {data} = await updateProfile(userData);
      toast({type: 'success', text1: data.detail});
      setTimeout(() => {
        navigation.navigate(accountRoutes.AccountDetail);
      }, 2000);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: error.response.data.detail});
    }
  };
  return (
    <View style={editProfileStyle.editProfileMain}>
      <ChildStackHeader
        text={accountRoutes.EditProfile}
        textColor={color.lightBlack}
      />
       <Loader loading={loading} />
      <ScrollView 
      showsVerticalScrollIndicator={false}
       automaticallyAdjustKeyboardInsets={true}
      scrollEnabled={true}
          contentContainerStyle={{
            flexDirection: 'column',
            // justifyContent: 'space-evenly',
          }}
        >
      <Text style={[editProfileStyle.detailText,{color:colors.text}]}>
        Users are allowed to make changes to their Profile if there’s a reason
        for correction.
      </Text>
     
      
        <View style={{height:"75%"}}>
          <View style={editProfileStyle.detailWrapper}>
            <Text
              style={[
                editProfileStyle.detailHeadingText,
                {color: colors.text},
              ]}>
              First Name
            </Text>
            <TextInput
              style={[
                editProfileStyle.inputbox,
                {paddingVertical: inputPadding, borderColor: colors.cardBorder,color:colors.text},
              ]}
              value={firstName}
              onChangeText={val => setFirstName(val)}
            />
          </View>

          <View style={editProfileStyle.detailWrapper}>
            <Text
              style={[
                editProfileStyle.detailHeadingText,
                {color: colors.text},
              ]}>
              Last Name
            </Text>
            <TextInput
              style={[
                editProfileStyle.inputbox,
                {paddingVertical: inputPadding, borderColor: colors.cardBorder,color:colors.text},
              ]}
              placeholder="Enter Last Name"
              value={lastName}
              onChangeText={val => setLastName(val)}
            />
          </View>

          <View style={editProfileStyle.detailWrapper}>
            <Text
              style={[
                editProfileStyle.detailHeadingText,
                {color: colors.text},
              ]}>
              State
            </Text>
            <TextInput
              style={[
                editProfileStyle.inputbox,
                {paddingVertical: inputPadding, borderColor: colors.cardBorder,color:colors.text},
              ]}
              placeholder="Enter your State"
              value={state}
              onChangeText={val => setState(val)}
            />
          </View>

          <View style={editProfileStyle.detailWrapper}>
            <Text
              style={[
                editProfileStyle.detailHeadingText,
                {color: colors.text},
              ]}>
              City
            </Text>
            <TextInput
              style={[
                editProfileStyle.inputbox,
                {paddingVertical: inputPadding, borderColor: colors.cardBorder,color:colors.text},
              ]}
              value={city}
              placeholder="Enter your city"
              onChangeText={val => setCity(val)}
            />
          </View>

          <View style={editProfileStyle.detailWrapper}>
            <Text
              style={[
                editProfileStyle.detailHeadingText,
                {color: colors.text},
              ]}>
              Zipcode
            </Text>
            <TextInput
              style={[
                editProfileStyle.inputbox,
                {paddingVertical: inputPadding, borderColor: colors.cardBorder,color:colors.text},
              ]}
              value={zipCode}
              placeholder="Enter your Zipcode"
              onChangeText={val => setZipCode(val)}
            />
          </View>
        </View>
        <View style={{marginBottom: verticalScale(10)}}>
          <GradientButton text="Update Profile" action={handleUpdateProfile} />
        </View>
      </ScrollView>

    </View>
  );
};

export default EditProfile;
