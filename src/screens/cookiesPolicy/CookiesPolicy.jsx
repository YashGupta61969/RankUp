import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {cookiesPolicyStyle} from './cookiesPolicyStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {useTheme} from '@react-navigation/native';
import {color} from '../../constants/colors';
import { verticalScale } from '../../constants/dimension';

const CookiesPolicy = () => {
  const {colors} = useTheme();

  return (
    <View style={cookiesPolicyStyle.cookiesMain}>
      <ChildStackHeader
        text={accountRoutes.CookiesPolicies}
        textColor={color.lightBlack}
      />
      <ScrollView
        style={[
          cookiesPolicyStyle.detailWrapper,
          {backgroundColor: color.lightGrey, borderColor: color.grey},
        ]}>
        <Text style={[cookiesPolicyStyle.detailHeading, {color: color.lightBlack}]}>
          Terms and Conditions
        </Text>

        {/* /* {Point One} */}
        <Text
          style={[
            cookiesPolicyStyle.detailHeading,
            {color: colors.text, marginTop: verticalScale(10)},
          ]}>
          Does Total Recall use cookies?{' '}
        </Text>
        <Text style={[cookiesPolicyStyle.detailText, {color:color.lightBlack}]}>
          Total Recall utilizes cookies and similar technologies such as pixels
          and tags to guarantee an optimal user experience on our website.{'\n'}
          A cookie is a tiny file that is placed on your device. By using
          cookies, we can easily recognize your device and ensure that Total
          Recall's features, such as account login, work smoothly for you.{'\n'}
          If you prefer not to receive cookies, you have the option to adjust
          your browser settings. If you choose to use Total Recall without
          modifying your browser settings, we will assume that you consent to
          receiving all cookies on the Total Recall website. Kindly be aware
          that the Total Recall site requires cookies in order to operate
          correctly.{'\n'}Reliable partners such as Google Analytics offer us
          analytics to monitor our performance. Please review their privacy
          policies to ensure that you are comfortable with how they use cookies.
        </Text>

        {/* Point Two */}

        <Text
          style={[
            cookiesPolicyStyle.detailHeading,
            {color: colors.text, marginTop: verticalScale(10)},
          ]}>
          What types of cookies does Total Recall use?
        </Text>
        <Text style={[cookiesPolicyStyle.detailText, {color:color.lightBlack}]}>
          Total Recall utilizes two different types of cookies: persistent and
          session-based. A persistent cookie is created after you've logged in
          to your Total Recall account for the purpose of managing your identity
          and controlling access.{'\n'}A session cookie is utilized to recognize
          a specific visit to the Total Recall website. Session cookies have a
          limited duration and will expire either after a short period of time
          or when you decide to close your web browser.
        </Text>
        {/* Point Three */}
        <Text
          style={[
            cookiesPolicyStyle.detailHeading,
            {color: colors.text, marginTop: verticalScale(10)},
          ]}>
          When does Total Recall put cookies on my device?
        </Text>
        <Text style={[cookiesPolicyStyle.detailText, {color:color.lightBlack}]}>
          When you visit TotalRecall.com, cookies may be set by Total Recall or
          other websites or services that run content on the page you're viewing
          (referred to as third-party cookies). For more information on Total
          Recall's advertising practices, please refer to our Privacy Policy
        </Text>
        {/* {Point Four} */}
        <Text
          style={[
            cookiesPolicyStyle.detailHeading,
            {color: colors.text, marginTop: verticalScale(10)},
          ]}>
          What are cookies used for?
        </Text>
        <Text style={[cookiesPolicyStyle.detailText, {color:color.lightBlack}]}>
          Cookies have various uses, such as identifying you when you visit
          Total Recall's website, saving your preferences, and enhancing your
          overall browsing experience. Using cookies enhances the security and
          speed of your interactions with Total Recall, while also ensuring a
          personalized experience that aligns with your settings. Total Recall
          utilizes cookies for various purposes, such as:
        </Text>

        {/* Authentication */}
        <Text
          style={[
            cookiesPolicyStyle.detailHeading,
            {color: colors.text, marginTop: verticalScale(10)},
          ]}>
          Authentication
        </Text>
        <View style={cookiesPolicyStyle.dotDetailView}>
          <View
            style={[
              cookiesPolicyStyle.dotStyle,
              {backgroundColor: colors.dotColor},
            ]}
          />
          <Text style={[cookiesPolicyStyle.detailText, {color:color.lightBlack}]}>
            Total Recall uses cookies to identify your logged-in status,
            enabling us to provide you with accurate information and customize
            your browsing experience
          </Text>
        </View>

        {/* Security */}

        <Text
          style={[
            cookiesPolicyStyle.detailHeading,
            {color: colors.text, marginTop: verticalScale(10)},
          ]}>
          Security
        </Text>
        <View style={cookiesPolicyStyle.dotDetailView}>
          <View
            style={[
              cookiesPolicyStyle.dotStyle,
              {backgroundColor: colors.dotColor},
            ]}
          />
          <Text style={[cookiesPolicyStyle.detailText, {color:color.lightBlack}]}>
            Total Recall uses cookies to identify your logged-in status,
            enabling us to provide you with accurate information and customize
            your browsing experience. Security Total Recall uses cookies to
            assist in supporting or enabling security features that we have
            implemented, as well as to aid in the detection of malicious
            activity and violations of our Terms of Use.
          </Text>
        </View>

        {/* Prefrences and features */}
        <Text
          style={[
            cookiesPolicyStyle.detailHeading,
            {color: colors.text, marginTop: verticalScale(10)},
          ]}>
          Preferences, features and services
        </Text>
        <View style={cookiesPolicyStyle.dotDetailView}>
          <View
            style={[
              cookiesPolicyStyle.dotStyle,
              {backgroundColor: colors.dotColor},
            ]}
          />
          <Text style={[cookiesPolicyStyle.detailText, {color:color.lightBlack}]}>
            Total Recall uses cookies to determine your language preference,
            customize your communication settings, and streamline form
            completion on Total Recall. In addition, they offer you a range of
            features, valuable insights, and personalized content through our
            plugins.
          </Text>
        </View>

        {/* Performance and Analytics */}
        <Text
          style={[
            cookiesPolicyStyle.detailHeading,
            {color: colors.text, marginTop: verticalScale(10)},
          ]}>
          Performance,analytics and research
        </Text>
        <View style={cookiesPolicyStyle.dotDetailView}>
          <View
            style={[
              cookiesPolicyStyle.dotStyle,
              {backgroundColor: colors.dotColor},
            ]}
          />
          <Text style={[cookiesPolicyStyle.detailText, {color:color.lightBlack}]}>
            Total Recall uses cookies to help us assess the performance of our
            website and plugins on a global scale. We also utilize cookies to
            gain insights, enhance, and conduct research on our products,
            features, and services. This includes instances when you access
            Total Recall from various websites, applications, or devices, such
            as your work computer or mobile device.
          </Text>
        </View>

        {/* Managing Cookies */}
        <Text
          style={[
            cookiesPolicyStyle.detailHeading,
            {color: colors.text, marginTop: verticalScale(10)},
          ]}>
          Managing cookies
        </Text>
        <Text
          style={[
            cookiesPolicyStyle.detailText,
            {color: colors.text, paddingBottom: verticalScale(25)},
          ]}>
          You have the ability to control website cookies through your browser
          settings, giving you the option to modify these settings by accepting,
          rejecting, or deleting cookies. If you decide to modify your settings,
          you may encounter issues with certain functions and features of our
          website not functioning as intended. Each browser has its own unique
          settings, so to handle cookies, it is best to consult the appropriate
          settings in your browser.
        </Text>
      </ScrollView>
    </View>
  );
};

export default CookiesPolicy;
