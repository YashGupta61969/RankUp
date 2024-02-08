import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {accountStyle} from './accountStyle';
import Loader from '../../components/loader/Loader';
import {color} from '../../constants/colors';
import {verticalScale} from '../../constants/dimension';
import SettingItem from '../../components/accounts/settingItem/SettingItem';
import {accountRoutes} from '../../constants/routes';
import {useFocusEffect} from '@react-navigation/native';
import {getProfile} from '../../data/services/authApi';
import {icons} from '../../constants/icons';
import LogoutModal from '../../components/modals/logoutModal/LogoutModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

const Account = () => {
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const {token} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      handleGetProfile();
      (async () => {
        const theme = await AsyncStorage.getItem('DarkTheme');

        if (theme === 'true') dispatch(setIsEnabled(true));
      })();
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
      setLoading(false);
      // setRefreshToken(error, dispatch);
      toast({type: 'error', text1: error?.response?.data?.detail});
    }
  };

  // Dark Mode Toggle switch

  const toggleSwitch = async () => {
    const updatedState = !isEnabled;
    dispatch(setIsEnabled(updatedState));
    await AsyncStorage.setItem('DarkTheme', JSON.stringify(updatedState));
    dispatch(switchResponse(updatedState));
  };

  // Logout Modal Open

  const openLogoutModal = () => {
    setOpen(true);
  };

  const closeLogoutModal = () => {
    setOpen(false);
  };

  return (
    <View style={[accountStyle.accountMain]}>
      {/* {userData === '' ? <Loader loading={isLoader} /> : null} */}
      <Loader loading={loading} />
      <View style={accountStyle.accountHeader}>
        <Text
          style={[accountStyle.accountHeaderText, {color: color.lightBlack}]}>
          User Account
        </Text>
      </View>
      {/* <ProfileImageSheet open={open} closeModal={handleClose} /> */}
      {/* <ChangePlatformSheet
        open={platformOpen}
        closeModal={handlePlatformClose}
      /> */}
      <ScrollView
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        showsVerticalScrollIndicator={false}
        style={{paddingBottom: verticalScale(200)}}>
        <LogoutModal open={open} closeModal={closeLogoutModal} />
        <View style={accountStyle.profileView}>
          <View
            style={[
              accountStyle.userProfile,
              {backgroundColor: color.lightSkyBlue},
            ]}>
            <View style={accountStyle.userImage}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{
                  uri: userData.profile_pic,
                }}
              />
            </View>
            {/* <View style={accountStyle.editButtonMain}>
              <TouchableOpacity
                onPress={handleOpen}
                style={[accountStyle.editButton, {borderColor: colors.border}]}>
                <Text style={[accountStyle.editText, {color: colors.text}]}>
                  Edit
                </Text>
                {switchValue === false ? (
                  <icons.ProfileEdit />
                ) : (
                  <icons.EditIconLight />
                )}
              </TouchableOpacity>
            </View> */}
          </View>
          <Text style={[accountStyle.userName, {color: color.lightBlack}]}>
            {userData?.first_name} {userData?.last_name}
          </Text>
        </View>

        {/* Bottom View */}

        <View
          style={[
            accountStyle.accountSettings,
            {
              backgroundColor: color.lightSkyBlue,
              borderColor: color.grey,
            },
          ]}>
          <SettingItem
            textHeading="User Info"
            textDescription="Manage your profile details"
            route={accountRoutes.AccountDetail}
            // userData={userData}
            // icon={
            //   switchValue === false ? (
            //     <icons.User width={25} height={25} />
            //   ) : (
            //     <icons.UserLight width={25} height={25} />
            //   )
            // }
            icon={<icons.UserIcon width={25} height={25} />}
          />
          <SettingItem
            textHeading="Notifications"
            textDescription="Customize your notifications settings"
            route={accountRoutes.Notification}
            // icon={
            //   switchValue === false ? (
            //     <icons.Bell width={25} height={25} />
            //   ) : (
            //     <icons.BellIconLight width={23} height={23} />
            //   )
            // }
            icon={<icons.NotificationIcon width={25} height={25} />}
          />
          <SettingItem
            textHeading="Settings"
            textDescription="Make modifications to your app"
            route={accountRoutes.Setting}
            // icon={
            //   switchValue === false ? (
            //     <icons.DarkSettings width={25} height={25} />
            //   ) : (
            //     <icons.SettingLight width={25} height={25} />
            //   )
            // }
            icon={<icons.Settings width={25} height={25} />}
          />
          <SettingItem
            textHeading="Terms & Policy"
            textDescription="About our contracts with you"
            route={accountRoutes.TermsAndPolicy}
            // icon={
            //   switchValue === false ? (
            //     <icons.TermsPolicy width={25} height={25} />
            //   ) : (
            //     <icons.TermsAndPolicyLight width={25} height={25} />
            //   )
            // }
            icon={<icons.TermsPolicy width={25} height={25} />}
          />

          <SettingItem
            textHeading="Dark mode"
            display="none"
            route={accountRoutes.DarkMode}
            switchIcon={true}
            value={isEnabled}
            action={toggleSwitch}
            // icon={
            //   switchValue === false ? (
            //     <icons.DarkMode width={25} height={25} />
            //   ) : (
            //     <icons.DarkModeLight width={25} height={25} />
            //   )
            // }
            icon={<icons.DarkMode width={25} height={25} />}
          />

          <TouchableOpacity
            onPress={openLogoutModal}
            style={accountStyle.logOutMain}>
            <View style={accountStyle.logOutItemLeft}>
              {/* {switchValue === false ? (
                <icons.Logout width={25} height={25} />
              ) : (
                <icons.LogoutLight width={25} height={25} />
              )} */}
              <icons.Logout width={25} height={25} />
              <View style={accountStyle.logOutItemTextView}>
                <Text
                  style={[accountStyle.textHeading, {color: color.lightBlack}]}>
                  Logout
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* ----------------- */}
        {/* <View style={accountStyle.instructionView}>
          <View style={accountStyle.instructionTop}>
            <icons.Ibutton />
            <View style={accountStyle.instructionTextView}>
              <Text style={accountStyle.instructionText}>
                Do you want go to your other platform?
              </Text>
              <Text style={accountStyle.instructionText}>
                Tap button below to choose your platform option
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={handlePlatformOpen}
            activeOpacity={1}
            style={accountStyle.instructionButton}>
            <Text style={accountStyle.instructionButtonText}>
              Change Platform
            </Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default Account;
