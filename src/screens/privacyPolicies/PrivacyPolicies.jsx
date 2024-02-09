import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {privacyPoliciesStyle} from './privacyPoliciesStyle';
import {accountRoutes} from '../../constants/routes';
import {color} from '../../constants/colors';
import {useTheme} from '@react-navigation/native';
import {verticalScale} from '../../constants/dimension';

const PrivacyPolicies = () => {
  const {colors} = useTheme();

  // Array

  const informationArray = [
    {id: 1, value: 'Any information you give us, which may include:'},
    {
      id: 2,
      value:
        'Information you provide by filling out forms on our website when registering for white papers, marketing, events, or webinars, requesting more information about our solutions, reporting a problem with our Websites, or communicating with us in any other way. Personal information such as name, email address, and phone number are included. The personal information that you are asked to provide, as well as the reasons for asking for it, will be made clear to you at the point where we ask for it. You are not required to provide your personal information, but if you do, we maybe unable to provide the relevant service, information, or communication to you.',
    },
    {id: 3, value: 'Records and copies of any correspondence with us.'},
    {
      id: 4,
      value:
        'Your responses to any surveys you may be asked to complete for research purposes.',
    },
    {id: 5, value: 'Your Website search queries.'},
    {id: 6, value: 'Data you provide via Total Recall® Anonymous Tipping.'},
    {
      id: 7,
      value:
        'Information you give us when you sign up for Total Recall services, such as your cellphone number.',
    },
    {id: 8, value: 'Information that we may obtain from you:'},
    {
      id: 9,
      value:
        'Details about your company, such as its organization and industry.',
    },
    {id: 10, value: 'Demographic data such as geographical location.'},
    {
      id: 11,
      value: 'Data gathered using automated data collection technologies.',
    },
  ];

  // customer Array

  const CustomerArray = [
    {
      id: 1,
      value:
        'Usage information. Specific information regarding your utilization and access to the mobile application, encompassing communication logs, traffic data, and other data, as well as the resources you access and employ via the mobile application. Mobile analytics software is employed to enhance our comprehension of the operation of our mobile application on your device. The software has the capability to log various types of information, including performance data, aggregated usage, the frequency of application usage, and the source from which the application was downloaded. There is no correlation between the data stored in the analytics software and any personally identifiable information that you provide in the mobile application.',
    },
    {
      id: 2,
      value:
        'Information about the device. We may collect information regarding your mobile device and Internet connection, including the telephone number of the device, its unique device identifier, IP address, operating system, and browser type, as well as mobile network information.',
    },
    {
      id: 3,
      value:
        "The term 'digital media.' A mobile application is only permitted to access metadata and content that you elect to upload from your device after you have downloaded it and provided your explicit consent. The content in question may consist of user-uploaded photographs, contact information disclosed when the mobile app is granted access to the address book for the purpose of sending invitations, or the quantity of nearby residents utilizing the mobile application, with no knowledge of their identities or contact details.",
    },
    {
      id: 4,
      value:
        'The following is the location information: When you use our mobile application or opt-in to Total Recall services in order to send or receive messages from our customers, we may request your location. You will be granted the opportunity to provide your location, which will be utilized exclusively to facilitate communication with our clients who are affiliated with that location through a specific means (e.g., a local fire department) during an emergency or other incident. You have the ability to disable location-based services at any time by modifying the device-specific setting.',
    },
    {
      id: 5,
      value:
        'This data is utilized for monitoring, analyzing, and enhancing our mobile applications',
    },
  ];

  // Personal Information

  const personalArray = [
    {
      id: 1,
      value:
        'To Facilitate Notifications: For enabling you to receive notifications from entities you are associated with, such as your employer, local or state agencies, or educational institutions.',
    },
    {
      id: 2,
      value:
        'Third-Party Service Providers: These entities assist in functions like website operations, business activities, or service provision.',
    },
    {
      id: 3,
      value:
        'Subsidiaries and Affiliates: For offering support in connection with Total Recall services or websites.',
    },
    {
      id: 4,
      value:
        'Public Authorities: In compliance with lawful requests, for purposes like national security or law enforcement.',
    },
    {
      id: 5,
      value:
        'Enforcement of Policies and Agreements: To enforce the Acceptable Use Policy, customer service agreements, or other contracts.',
    },
    {
      id: 6,
      value:
        'Protection of Rights: To safeguard the rights, property, or safety of Total Recall, its customers, or others, and to investigate potential fraud. Such disclosures will be in line with data protection laws.',
    },
    {
      id: 7,
      value:
        'Business Transitions: In scenarios of sales, assignments, or transfers of parts or the entirety of the business.',
    },
    {
      id: 8,
      value:
        'With Your Consent: Information can be shared with any other party, given your approval.',
    },
  ];

  // Individual right Array

  const individualRight = [
    {
      id: 1,
      value:
        'Obtain a copy of the personal information we maintain about you and verify that it is being processed lawfully.',
    },
    {
      id: 2,
      value:
        'Request that the personal information we maintain about you be updated.',
    },
    {id: 3, value: 'Request that your personal information be erased.'},
    {
      id: 4,
      value:
        'Object to the processing of your personal information in cases where we have a legitimate interest in doing so.',
    },
    {
      id: 5,
      value: 'Request that the processing of your personal data be restricted.',
    },
    {
      id: 6,
      value:
        'Solicit the transfer of your personal information to yourself or to an external entity.',
    },
    {
      id: 7,
      value:
        'Where consent is required for the processing of your personal data, you may withdraw your consent at any time.',
    },
    {
      id: 8,
      value: 'Verify whether your personal information is being processed.',
    },
    {
      id: 9,
      value:
        'Request details regarding the third parties that have been provided with your personal information.',
    },
    {
      id: 10,
      value:
        'Request details regarding the rationale behind your refusal to provide consent and the potential repercussions of doing so. Additionally, under specific conditions, request that your personal information be expunged subsequent to your withdrawal of consent.',
    },
  ];

  return (
    <View
      style={[
        privacyPoliciesStyle.privacyPoliciesMain,
 
      ]}>
      <ChildStackHeader
        text={accountRoutes.PrivacyPolicies}
        textColor={color.lightBlack}
      />
      <ScrollView
        style={[
          privacyPoliciesStyle.privacyPoliciesPage,
          {backgroundColor: colors.screenCard, borderColor: color.grey},
        ]}>
        <Text style={[privacyPoliciesStyle.termsAndConditions,{color:color.lightBlack}]}>
          Terms and Conditions
        </Text>
        <Text style={[privacyPoliciesStyle.overViewText,{color:color.lightBlack}]}>Overview</Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          This document sets forth Total Recall’s privacy notice. It describes
          the types of personal information that we receive in the course of
          doing business, how we use that information, third parties with whom
          we may share the information, and your choices in modifying or
          removing the information. {'\n'} Total Recall owns and operates the
          following webpages, to which this privacy notice also applies:
          www.total-recall.us, and hub.total-recall.us, each concerns or
          queries? You can better understand your privacy rights and options by
          carefully reading this privacy notice. Please refrain from using our
          Services if you disagree with our policies and practices.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.privacyHeading,
            {marginVertical: verticalScale(10),color:color.lightBlack},
          ]}>
          Summary of key points
        </Text>
        <Text style={[privacyPoliciesStyle.QuestionHeading,{color:color.lightBlack}]}>
          Which data is gathered by Total Recall?
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          In accordance with the specific circumstances surrounding the
          collection of your personal information, our privacy practices will
          differ. {'\n'} Total Recall gathers personal information under the
          subsequent conditions: {'\n'} Information of a personal nature
          collected from clients. We gather personally identifiable information
          via our websites and surveys. The collection of personal information
          via our mobile applications.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Information gathered from clients:
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Total Recall offers a critical event management platform that enables
          our clientele to manage emergencies more effectively. An element of
          this functionality consists of Total Recall's software that empowers
          our clients to distribute notifications to specific individuals.{'\n'}
          The customer will upload the individual's name and basic contact
          information (including work telephone number, mobile number, and email
          address) into the Total Recall's system prior to broadcasting the
          notification. The customer will then utilize the Total Recall system
          to distribute the notification.{'\n'}
          There is no direct affiliation between Total Recall and the
          individuals whose personal information it processes on behalf of its
          clients.{'\n'}
          Employers or local or state government agencies with jurisdiction over
          the individual's place of residence are our typical clients.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Information gathered from our websites:
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          We may collect, retain, and use the following types of information
          when you visit and use our Websites:
        </Text>

        {informationArray.map((item, index) => {
          return (
            <View key={index} style={privacyPoliciesStyle.dotTextView}>
              <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
              <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
                {item.value}
              </Text>
            </View>
          );
        })}
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          We, like most websites, collect certain information automatically and
          store it in log files. Internet protocol (IP) addresses, browser type,
          internet service provider (ISP), referring/exit pages, operating
          system, date/time stamp, and clickstream data are all part of this
          data.{'\n'}
          We may combine this information with other information we have about
          you. This is being done to improve our services, marketing, analytics,
          and site functionality. However, the data we link is anonymized so
          that you cannot be identified. Please be aware that Total Recall does
          not attempt to collect sensitive information on our Websites, such as
          personal financial information, social security or driver's license
          numbers, or personal health information. Some of our pages make use of
          framing techniques to deliver content to and from our partners while
          maintaining the look and feel of our Websites.{'\n'}
          Please keep in mind that you may be providing your personal
          information to these third parties rather than to us, so the
          information they receive from you is governed by the privacy practices
          of those third parties. Social media features on our website include
          Facebook and Twitter buttons and widgets, as well as the "Share This"
          button. These features may collect your IP address, the page you are
          currently viewing on our site, and may set a cookie in order for the
          feature to function properly.{'\n'}
          Social media features and widgets are hosted either by a third-party
          website or directly on our website. The privacy notice of the company
          providing the features governs your interactions with these features.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Surveys On our websites:
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          We may offer you the chance to participate in surveys. Participation
          will necessitate the provision of specific personal information. As
          participation in these surveys is entirely voluntary, you are thus
          afforded the choice to disclose this information or not. Typical
          information requests consist of contact details (e.g., name and email
          address) and demographic information (e.g., zip code). In order to
          further improve our applications and gain a deeper understanding of
          our market and customers' requirements, we will utilize this data.{' '}
          {'\n'}
          These surveys may be administered by a third-party service provider;
          for any other purpose, that organization will be strictly prohibited
          from utilizing your personal information. With your explicit consent
          and prior notice, we shall refrain from disclosing any personal
          information that you voluntarily disclose via a survey to external
          entities.
        </Text>

        {/* chatbots */}

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Chatbots:
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Total Recall has incorporated a chatbot into its website to assist
          users in asking general questions and requesting information about our
          products and services. Your interactions with the chatbot are entirely
          optional. You alone decide whether or not to interact with the
          chatbot, as well as what information you disclose to us about yourself
          when you do. {'\n'}The decision to engage with the chatbot and the
          extent of personal information shared with us rests solely with you.
          Conversations with our chatbot may be recorded by Total Recall
          Chatbots or its representatives. Complete remembrance Chatbots will
          utilize the information and associated metadata provided by users
          through the chatbot for three main purposes:
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[privacyPoliciesStyle.countText,{color:color.lightBlack}]}>1. </Text>
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            to address user requests and inquiries,
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[privacyPoliciesStyle.countText,{color:color.lightBlack}]}>2. </Text>
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            to analyze, assess, and enhance our products and services, and
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[privacyPoliciesStyle.countText,{color:color.lightBlack}]}>3. </Text>
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            for marketing and advertising our products and services. We may
            reveal this information (including the recording of your
            conversation with the chatbot) as outlined in the section of this
            Privacy Notice titled "Third Parties with whom we may share your
            information," which includes the service provider responsible for
            the chatbot feature.
          </Text>
        </View>

        <Text
          style={[
            privacyPoliciesStyle.privacyDescription,
            {marginTop: verticalScale(15),color:color.lightBlack},
          ]}>
          The information collected through the chatbot, and its associated
          metadata will be kept for a duration that is reasonably necessary for
          the original purposes of collection, unless legal obligations mandate
          earlier deletion or extended retention.{'\n'}We will also store this
          information as required to fulfill our legal responsibilities, settle
          conflicts, pursue valid business interests, conduct audits, and
          safeguard or enforce our rights.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Customer reviews:
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Our website showcases personal testimonials from contented customers,
          along with other forms of endorsement. Subject to your authorization,
          we may publish your testimonial on a website, including your name. To
          modify or remove your testimonial, please reach out to us at
          marketing@totalrecall.com. {'\n'}
          Data gathered via our mobile application interface Total Recall
          provides an assortment of mobile applications. Kindly be advised that
          your use and download of a Total Recall mobile application is entirely
          voluntary. Our mobile applications have the potential to gather the
          subsequent categories of data:{'\n'}
        </Text>

        {CustomerArray.map((item, index) => {
          return (
            <View key={index} style={privacyPoliciesStyle.dotTextView}>
              <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
              <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
                {item.value}
              </Text>
            </View>
          );
        })}

        {/* tracking contacts */}

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Tracking Contacts and the Total Recall Mobile App:
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          To notify users of potential COVID-19 exposure, clients utilize the
          Total Recall application in conjunction with our contact tracing
          tools. Compiling encrypted proximity keys, our tools utilize a
          Bluetooth Low Energy (BLE) API. Unless a COVID-19 exposure is
          reported, these keys remain on the device in the absence of any
          personal information.{'\n'}After 14 days, they will be deleted
          automatically. They are transferred to our servers upon notification.
          {'\n'}BLE, location, and notification permissions are requested during
          app activation. These may be disabled or declined at a later time, but
          doing so may restrict app functionality. Confirm with your
          organization whether these characteristics are required by law.{'\n'}
          Should it be enabled, the application can identify close proximity
          (within 6 feet for a minimum of 15 minutes) with other devices present
          in your organization. Information sharing and self-reporting may vary
          depending on the specific encounter. Customers' service agreements
          govern the manner in which Total Recall retains data.
        </Text>

        {/* tracking contacts */}

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          How does Total-Recall use information that was collected?
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          1. Customer Data: - Employed in the provision of services such as
          support, notifications, and announcements of new features.{'\n'}
          Customers may be contacted for administrative purposes, to resolve
          disputes, or to enforce agreements.{'\n'}The retention period for
          personal and geo-location data is determined by customer agreements.
          {'\n'}2. Mobile solutions for contact tracing: - Gathers information
          regarding two occurrences:{'\n'}a. Self-reports regarding potential
          COVID-19 exposure: Date, time, location, identity, contact
          information, and COVID-19 status.{'n'}b. Exposure events involve the
          recording of time/date, name, and contact information in addition to
          the user's proximity. Although data is securely encrypted and stored,
          it remains accessible to customers.{'\n'}3. The sum of all anonymous
          recall tips: "Permits anonymous reports of suspicious or criminal
          activity."{'\n'}The system retains phone numbers for bidirectional
          communication, including the names of affiliated customers. In the
          absence of legal mandates, enforcement agencies are not granted access
          to names and numbers. Although standard encryption is employed,
          ensuring complete security is not possible due to network variables.
          It is imperative that urgent matters be reported to local emergency
          responders. This is a U.S.-only service.{'\n'}4. Third-Party
          Advertising: Unless customers provide explicit consent for
          business/promotional notifications, personal information is not
          disclosed for promotional objectives.{'\n'}5. In general, personal
          data is utilized for the purposes that are explicitly stated or
          explained at the time of collection. As permitted by law, it may also
          be utilized for compatible purposes, such as anonymized statistical
          analyses.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Third Parties with Whom Total Recall May Share Your Information:
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Total Recall may need to share customer data with third parties to
          fulfill service requests from customers. Such sharing is limited to
          information essential for the service and under terms ensuring the
          confidentiality of the shared data. The third parties must adhere to
          contractual obligations to maintain the confidentiality of personal
          data and use it solely for the intended purpose. Such transfers are
          aligned with this privacy notice and relevant contracts.
        </Text>
        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Personal information may be disclosed:
        </Text>
        {personalArray.map((item, index) => {
          return (
            <View key={index} style={privacyPoliciesStyle.dotTextView}>
              <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
              <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
                {item.value}
              </Text>
            </View>
          );
        })}

        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Total Recall does not sell, trade, or rent customer data or personal
          information to external parties.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Legal justification for the processing of your personal information
          (only for EEA/UK/Brazil citizens)
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Our legal justification for processing personal information of
          visitors from the European Economic Area (EEA) or the United Kingdom
          will be contingent upon the nature of the information being collected
          and the particular circumstances under which it is obtained.{'\n'}In
          general, however, we will only collect personal information from you
          when we have your consent, when it is necessary for us to perform a
          contract with you, or when the processing is in our legitimate
          interests and not in conflict with your fundamental rights and
          freedoms or data protection interests. There may be circumstances in
          which we are legally obligated to process your personal information in
          order to safeguard your or another individual's vital interests.{'\n'}
          In the event that we gather and utilize your personal information to
          further our legitimate commercial interests or those of a third party,
          this interest will typically consist of facilitating the operation of
          our website and establishing communication with you as required to
          deliver our products and services to you. These legitimate interests
          may consist of addressing your inquiries, enhancing our platform,
          conducting marketing, or identifying and thwarting unlawful
          activities, among others. Should the need arise, we will disclose to
          you at the appropriate time any additional legitimate interests that
          we may have.{'\n'}Regarding the legal basis upon which we collect and
          utilize your personal information, please contact us using the
          information listed under the heading "Contacting Us" if you have any
          inquiries or require additional clarification.{'\n'}Cookies {'\n'}
          "Cookies" and other comparable tracking technologies are employed by
          our organization to gather and utilize personal information pertaining
          to you. For additional details regarding the categories of Cookies
          that we employ, the rationale behind their utilization, and the means
          by which you can regulate them, kindly consult our Cookie Notice.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Resolution of disputes and complaint mechanism
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          In compliance with the Privacy Shield Principles, Total Recall commits
          to resolving complaints about our collection or use of your personal
          information. EU and Swiss individuals with inquiries or complaints
          regarding our Privacy Shield policy should first contact Total Recall
          at: privacy@totalrecall.com or by writing to us at: Total Recall{'\n'}
          9800 Hillwood Parkway Suite 140{'\n'}Fort Worth, TX 76177{'\n'}Attn:
          Privacy Officer{'\n'}
          Total Recall has further committed to refer unresolved Privacy Shield
          complaints to the American Arbitration Association, an alternative
          dispute resolution provider located in the United States. If you do
          not receive timely acknowledgment of your complaint from us, or if we
          have not addressed your complaint to your satisfaction, please visit
          https://go.adr.org/privacyshield.html. for more information or to file
          a complaint. The services of the American Arbitration Association are
          provided at no cost to you.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Compliance with enforcement
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          The United States Federal Trade Commission (FTC) has authority over
          Total Recall's privacy practices; therefore, in the jurisdictions
          where we provide services, Total Recall is subject to the
          investigatory and enforcement powers of the FTC and other relevant
          authorities.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Subsequent transmission
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Total Recall will only transfer personal data to a third party if that
          third party acts as an agent. In such cases, Total Recall will make
          sure to have a written agreement with the third party. This agreement
          will require the third party to provide a level of privacy protection
          that is at least as high as what is mandated by the Privacy Shield
          Principles.{'\n'}Total Recall may be held responsible if we handle
          personal information received under the Privacy Shield in a way that
          does not align with the Privacy Shield Principles, particularly when
          it comes to transferring this data to third parties.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Data protection
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Precautions have been taken to safeguard your personal information
          against inadvertent loss, as well as from unauthorized access, use,
          modification, and disclosure. Ensuring the security of both our
          customers' and your personal information is of the utmost importance
          to us. We employ cutting-edge security technology, such as Transport
          Layer Security (TLS), to encrypt the transmission of sensitive
          information and geo-location data that you provide.{'\n'}Your actions
          also influence the security and safety of your information. In cases
          where we have provided you with a password for access to specific
          sections of our website (or you have chosen to use one), it is your
          duty to maintain the confidentiality of this password. We strongly
          advise you to keep your password private.{'\n'}We urge you to exercise
          caution when disclosing information in public sections of the site.
          {'\n'}Regrettably, the security of information transmission through
          the Internet is not absolute. While we make every effort to ensure the
          security of your personal information, we cannot provide an absolute
          guarantee of its protection while being transmitted to our website.
          {'\n'}Personal information transmission occurs entirely at your own
          risk. We shall not be held liable for any unauthorized use of the
          website's security measures or privacy configurations. Contact us at
          privacy@total-recall.us if you have any inquiries regarding the
          security of our website.{'\n'}Data retention{'\n'}In cases where we
          have a continuing legitimate business need to retain the personal
          information, we collect from you (e.g., to fulfill a service request
          from you or to adhere to relevant legal, tax, accounting, or reporting
          obligations), we will do so.{'\n'}In the absence of a continuous
          legitimate business necessity to process your personal information, we
          shall endeavor to either erase or anonymize it.{'\n'}However, in cases
          where this is not feasible (e.g., backup archives containing your
          personal information), we shall securely retain your information and
          restrict any subsequent processing until deletion becomes feasible.
          {'\n'}We reserve the right to retain your personal information for an
          extended duration if we have reason to suspect that there is a
          potential for litigation regarding our association with you or if we
          receive a formal complaint.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Choices about how we use and disclose your information
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Our primary objective is to offer you options with respect to your
          personal information. We have established mechanisms to grant you the
          subsequent authority regarding your information:
        </Text>
        <View style={privacyPoliciesStyle.dotTextView}>
          <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            Client Data. To modify your contact information while using Total
            Recall services as an employee, resident, or other designee of one
            of our customers, you must initiate the process via that customer.
             To discontinue receiving communications from the customer, kindly
            communicate with the individual with whom you have a direct
            interaction.
          </Text>
        </View>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          We will promptly comply with the customer's request for data removal
          from Total Recall, ensuring that our response is provided within a
          reasonable timeframe.
        </Text>
        <View
          style={[
            privacyPoliciesStyle.dotTextView,
            {width: '95%', justifyContent: 'center', alignSelf: 'center'},
          ]}>
          <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            We Provide Promotional Offers. You have the option to decline
            receiving information regarding our products or services by
            modifying your user preferences at
            https://go.total-recall.us/email-preference-center.html or by
            selecting the "unsubscribe" or "opt-out" link contained in the
            promotional emails that we dispatch to you.  Your inquiry may also
            be submitted via email to marketing@totalrecall.com.
          </Text>
        </View>

        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          You may reply to any promotional email we have sent you with a request
          to be removed from future email distributions.
        </Text>
        <View
          style={[
            privacyPoliciesStyle.dotTextView,
            {width: '95%', justifyContent: 'center', alignSelf: 'center'},
          ]}>
          <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            Notifications via push. On occasion, we may deliver push
            notifications via our mobile applications to provide you with
            service-related updates and other pertinent notifications.
          </Text>
        </View>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          At any time, you have the option to discontinue receiving such
          communications by contacting our customer service department at
          privacy@totalrecall.com.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Individual rights in the EEA, the United Kingdom, and Brazil
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Additionally, residents of the EEA, the United Kingdom, or Brazil are
          entitled to:
        </Text>
        {individualRight.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                privacyPoliciesStyle.dotTextView,
                {width: '95%', justifyContent: 'center', alignSelf: 'center'},
              ]}>
              <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
              <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
                {item.value}
              </Text>
            </View>
          );
        })}

        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          You are welcome to contact us at any time using the information
          provided under the heading "Contacting Us" if you wish to exercise any
          of the rights discussed above. No fee will be required for you to
          access your personal information or exercise any of the aforementioned
          rights. A reasonable fee may be assessed in the event that your
          request is manifestly unfounded, redundant, or excessive.  Conversely,
          we may decline to accommodate your request under these conditions.
          {'\n'}
          Certain information from you may be required in order to verify your
          identity and uphold your entitlement to access your personal data.
          This is a security measure in place to prevent unauthorized access to
          personally identifiable information.{'\n'}Additional information
          regarding your request may be requested from you in an effort to
          expedite our response. In adherence to relevant data protection
          legislation, we address every inquiry we receive from individuals
          desiring to exercise their rights pertaining to their data protection.
            Additionally, to access, modify, or request deletion of your
          information, general users of our website may submit a new form or
          send an email to contact@total-recall.us.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Your California privacy rights
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Under California state law, Total Recall is just a service provider
          because we don’t sell personal information to anyone (although we may
          process it on behalf of our customers). However, in accordance with
          California Civil Code Section § 1798.83, if you are a California
          resident, then you may contact us about specific pieces of personal
          information.{'\n'}To make such a request, please send an e-mail to
          privacy@total-recall.us or write us at: Total Recall, 9800 Hillwood
          Parkway Suite 140, Fort Worth, TX 76177, Attn: Privacy Counsel.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Your Nevada privacy rights
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Under Nevada state law, Total Recall is not considered a "operator"
          because we do not license or sell personal information to third
          parties. Nevertheless, as stipulated in Nevada Senate Bill 220, Nevada
          consumers have the explicit option to decline the future sale of their
          personal information.{'\n'}Please contact us at
          privacy@total-recall.us or Total Recall, 9800 Hillwood Parkway Suite
          140, Fort Worth, TX 76177, Attention: Privacy Counsel, in order to
          submit such a request.{'\n'}For assistance with New York City
          messaging,
        </Text>

        <View
          style={[
            privacyPoliciesStyle.dotTextView,
            {width: '95%', justifyContent: 'center', alignSelf: 'center'},
          ]}>
          <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            Please text HELP to XXXXXX or reach out to customer service at
            support@total-recall.us or 833-486-8257.
          </Text>
        </View>

        <View
          style={[
            privacyPoliciesStyle.dotTextView,
            {width: '95%', justifyContent: 'center', alignSelf: 'center'},
          ]}>
          <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            STOP is the code to exit the program when sent to XXXXXX.
          </Text>
        </View>

        <View
          style={[
            privacyPoliciesStyle.dotTextView,
            {width: '95%', justifyContent: 'center', alignSelf: 'center'},
          ]}>
          <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            Data and message charges may be applicable. Review the plan details
            provided by your wireless provider. Your wireless provider charges
            are subject to your responsibility.
          </Text>
        </View>

        <View
          style={[
            privacyPoliciesStyle.dotTextView,
            {width: '95%', justifyContent: 'center', alignSelf: 'center'},
          ]}>
          <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            Carrier liability does not extend to undelivered or delayed
            messages.
          </Text>
        </View>

        <View
          style={[
            privacyPoliciesStyle.dotTextView,
            {width: '95%', justifyContent: 'center', alignSelf: 'center'},
          ]}>
          <View style={[privacyPoliciesStyle.dot,{backgroundColor:colors.dotColor}]} />
          <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
            Message frequency is contingent upon account configurations.
          </Text>
        </View>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Prospective business dealings and modifications to the privacy notice
        </Text>
        <Text style={[privacyPoliciesStyle.privacyDescription,{color:color.lightBlack}]}>
          Total Recall may undergo business transitions, including mergers and
          acquisitions, or the sale of a substantial portion of its assets, as
          it continues to develop and expand. In such circumstances, it is
          customary for user data, which may comprise customer-specific
          information, to be included among the transferred business assets.
          {'\n'}You acknowledge that by utilizing our website, importing data,
          or engaging in any other method, your information may be transferred
          to the new business entities in question.{'\n'}However, in the event
          that an entity were to acquire our assets, it would be obligated to
          maintain the confidentiality of your personal data. Whenever a
          substantial change occurs, such as a transfer of ownership or a
          modification in the manner user information is utilized, you will be
          duly notified via email or a conspicuous notice on our
          website.Moreover, any available choices regarding your data will be
          outlined.{'\n'}On occasion, we may revise our privacy statement to
          reflect the development of our information management procedures. We
          recommend that you periodically review this section in order to remain
          updated on our most recent privacy practices.
        </Text>

        <Text
          style={[
            privacyPoliciesStyle.QuestionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Contacting us
        </Text>
        <Text
          style={[
            privacyPoliciesStyle.privacyDescription,
            {marginBottom: verticalScale(40),color:color.lightBlack},
          ]}>
          If you have any questions about this privacy notice, please contact us
          at the following address:{'\n'}
          Total Recall. 9800 Hillwood Parkway Suite 140 Fort Worth, TX 76177
          {'\n'}Email: privacy@total-recall.us Phone: 833-486–8257{'\n'}If you
          would like to unsubscribe from alerts or other communications, please
          send an email to: privacy-unsubscribe@total-recall.us.{'\n'}If you
          would like to exercise certain rights available to individuals in the
          EEA/UK/Brazil, you may submit a data subject access request to:
          dsar.request@total-recall.us.The data controller of your personal
          information is Total Recall.{'\n'}Effective date This privacy notice
          is effective as of October 26, 2023 Last Updated on:
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicies;
