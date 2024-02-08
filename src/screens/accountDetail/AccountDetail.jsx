import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useCallback, useState} from 'react';
import {accountDetailStyle} from './accountDetailStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {icons} from '../../constants/icons';
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import Loader from '../../components/loader/Loader';
import AccountDetailsItems from '../../components/accounts/accountDetailsItem/AccountDetailsItems';
import {color} from '../../constants/colors';
import {toast} from '../../utils/toast';
import {getProfile, updateProfile} from '../../data/services/authApi';
import ProfileImageSheet from '../../components/bottomSheets/profileImageSheet/ProfileImageSheet';

const AccountDetail = () => {
  // States
  const [open, setOpen] = useState(false);
  const [uri, setUri] = useState('');
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(false);
  const {navigate} = useNavigation();
  // const {switchValue} = useSelector(state => state.switch);
  const userAddress = `${userData.city ? userData.city : ''} ${
    userData.state ? userData.state : ''
  }${userData.zip_code ? userData.zip_code : ''}`;

  // Profile BottomSheet Open & Close

  useFocusEffect(
    useCallback(() => {
      handleGetAccount();
    }, []),
  );

// Image BottomSheet Open and Close

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // ---------------------------------------------


// Get User Account

  const handleGetAccount = async () => {
    try {
      setLoading(true);
      const {data} = await getProfile();
      setUserData(data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: error?.response?.data?.detail});
    }
  };

  // update User Image

  const handleUserImage = async image => {
    const userData = {
      profile_pic: image,
    };
    try {
      setLoading(true);
     await updateProfile(userData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({type:"error",text1:error.response.data.detail})
    }
  };

  return (
    <View
      style={[
        accountDetailStyle.accountDetailMain,
        {backgroundColor: color.white},
      ]}>
      <ChildStackHeader
        text={accountRoutes.AccountDetail}
        textColor={color.lightBlack}
      />
      <ProfileImageSheet
        open={open}
        closeModal={handleClose}
        uri={uri}
        setUri={setUri}
        handleUserImage={handleUserImage}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Loader loading={loading} />
        <View style={accountDetailStyle.profileView}>
          <View style={accountDetailStyle.userProfile}>
            <View style={accountDetailStyle.userImage}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: uri ? uri : userData.profile_pic}}
              />
            </View>
            <View style={accountDetailStyle.editButtonMain}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={handleOpen}
                style={accountDetailStyle.editButton}>
                <Text style={accountDetailStyle.editText}>Edit</Text>
                <icons.ProfileEdit />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={[
            accountDetailStyle.userDetailView,
            {
              backgroundColor: color.lightSkyBlue,
              borderColor: color.grey,
            },
          ]}>
          <TouchableOpacity
            onPress={() => navigate(accountRoutes.EditProfile, {userData})}
            style={[
              accountDetailStyle.userDetailTouchableItem,
              {borderColor: color.grey},
            ]}>
            <View>
              <Text
                style={[
                  accountDetailStyle.detailHeading,
                  {color: color.lightBlack},
                ]}>
                Full Name
              </Text>
              <Text
                style={[
                  accountDetailStyle.userDetailText,
                  {color: color.lightBlack},
                ]}>
                {userData.first_name && userData.last_name
                  ? `${userData.first_name} ${userData.last_name}`
                  : 'NA'}
              </Text>
            </View>
            <icons.RightArrow width={18} height={18} />
            {/* {switchValue === false ? (
              <icons.RightArrow width={18} height={18} />
            ) : (
              <icons.RightArrowLight width={22} height={22} />
            )} */}
          </TouchableOpacity>
          {/* <AccountDetailsItems textHeading="User" text={userData?.id} /> */}
          <AccountDetailsItems textHeading="User ID" text={userData.id} />

          <TouchableOpacity
            style={[
              accountDetailStyle.userDetailTouchableItem,
              {borderColor: color.grey},
            ]}>
            <View>
              <Text
                style={[
                  accountDetailStyle.detailHeading,
                  {color: color.lightBlack},
                ]}>
                Email address
              </Text>
              <Text
                style={[
                  accountDetailStyle.userDetailText,
                  {color: color.lightBlack},
                ]}>
                {userData.email ? userData.email : 'NA'}
              </Text>
            </View>
            <icons.RightArrow width={18} height={18} />

            {/* {switchValue === false ? (
              <icons.RightArrow width={18} height={18} />
            ) : (
              <icons.RightArrowLight width={22} height={22} />
            )} */}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              accountDetailStyle.userDetailTouchableItem,
              {borderColor: color.grey},
            ]}>
            <View>
              <Text
                style={[
                  accountDetailStyle.detailHeading,
                  {color: color.lightBlack},
                ]}>
                Company department
              </Text>
              <Text
                style={[
                  accountDetailStyle.userDetailText,
                  {color: color.lightBlack},
                ]}>
                Google Organization (Dev Ops dept)
              </Text>
            </View>
            <icons.RightArrow width={18} height={18} />

            {/* {switchValue === false ? (
              <icons.RightArrow width={18} height={18} />
            ) : (
              <icons.RightArrowLight width={22} height={22} />
            )} */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigate(accountRoutes.PhoneNumber, {
                userContact: userData?.phone,
              })
            }
            style={[
              accountDetailStyle.userDetailTouchableItem,
              {borderColor: color.grey},
            ]}>
            <View>
              <Text
                style={[
                  accountDetailStyle.detailHeading,
                  {color: color.lightBlack},
                ]}>
                Phone number
              </Text>
              <Text
                style={[
                  accountDetailStyle.userDetailText,
                  {color: color.lightBlack},
                ]}>
                {userData.phone ? userData.phone : 'NA'}
              </Text>
            </View>
            <icons.RightArrow width={18} height={18} />

            {/* {switchValue === false ? (
              <icons.RightArrow width={18} height={18} />
            ) : (
              <icons.RightArrowLight width={22} height={22} />
            )} */}
          </TouchableOpacity>

          {/* <AccountDetailsItems textHeading="State" text={userData.state} />
          <AccountDetailsItems textHeading="City" text={userData.city} />
          <AccountDetailsItems textHeading="ZipCode" text={userData.zip_code} /> */}
          <TouchableOpacity
            onPress={() => navigate(accountRoutes.EditProfile, {userData})}
            style={[
              accountDetailStyle.userDetailTouchableItem,
              {borderColor: color.grey},
            ]}>
            <View>
              <Text
                style={[
                  accountDetailStyle.detailHeading,
                  {color: color.lightBlack},
                ]}>
                Address
              </Text>
              <Text
                style={[
                  accountDetailStyle.userDetailText,
                  {color: color.lightBlack},
                ]}>
                {userData.state ? userAddress : 'NA'}
              </Text>
            </View>
            <icons.RightArrow width={18} height={18} />
            {/* {switchValue === false ? (
              <icons.RightArrow width={18} height={18} />
            ) : (
              <icons.RightArrowLight width={22} height={22} />
            )} */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountDetail;
