import { View, Text } from 'react-native'
import React from 'react'
import Account from '../../screens/account/Account';
import { accountRoutes, childStack } from '../../constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountDetail from '../../screens/accountDetail/AccountDetail';
import Notification from '../../screens/notification/Notification';
import Settings from '../../screens/settings/Settings';
import TermsAndPolicy from '../../screens/termsAndPolicy/TermsAndPolicy';
import TermsAndConditions from '../../screens/termsAndConditions/TermsAndConditions';
import CookiesPolicy from '../../screens/cookiesPolicy/CookiesPolicy';
import FAQs from '../../screens/faqs/FAQs';
import Policies from '../../screens/policies/Policies';
import PrivacyPolicies from '../../screens/privacyPolicies/PrivacyPolicies';
import EditProfile from '../../screens/editProfile/EditProfile';
import PhoneNumber from '../../screens/phoneNumber/PhoneNumber';
import ConfirmPhoneNumber from '../../screens/confirmPhoneNumber/ConfirmPhoneNumber';
import TwoFAuthentication from '../../screens/twoFAuthentication/TwoFAuthentication';
import SmsAuthentication from '../../screens/smsAuthentication/SmsAuthentication';
import ChangePassword from '../../screens/changePassword/ChangePassword';
import DarkMode from '../../screens/darkMode/DarkMode';



const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
    <Stack.Screen name={childStack.AccountStack} component={Account} />
    <Stack.Screen name={accountRoutes.AccountDetail} component={AccountDetail} />
    <Stack.Screen name={accountRoutes.Notification} component={Notification} />
    <Stack.Screen name={accountRoutes.Setting} component={Settings} />
    <Stack.Screen name={accountRoutes.TermsAndPolicy} component={TermsAndPolicy} />
    <Stack.Screen name={accountRoutes.TermsAndConditions} component={TermsAndConditions} />
    <Stack.Screen name={accountRoutes.Policies} component={Policies} />
    <Stack.Screen name={accountRoutes.PrivacyPolicies} component={PrivacyPolicies} />
    <Stack.Screen name={accountRoutes.CookiesPolicies} component={CookiesPolicy} />
    <Stack.Screen name={accountRoutes.FAQs} component={FAQs}/>
    <Stack.Screen name={accountRoutes.EditProfile} component={EditProfile} />
    <Stack.Screen name={accountRoutes.PhoneNumber} component={PhoneNumber} />
    <Stack.Screen name={accountRoutes.ConfirmPhoneNumber} component={ConfirmPhoneNumber} />
    <Stack.Screen name={accountRoutes.ChangePassword} component={ChangePassword} />
    <Stack.Screen name={accountRoutes.TwoFAuthentication} component={TwoFAuthentication} />
    <Stack.Screen name={accountRoutes.SMSAuthentication} component={SmsAuthentication} />
    <Stack.Screen name={accountRoutes.DarkMode} component={DarkMode} />
    
  </Stack.Navigator>
  )
}

export default AccountStack