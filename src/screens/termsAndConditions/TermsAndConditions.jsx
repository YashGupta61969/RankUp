import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {termsAndConditionStyle} from './termsAndConditionStyle';
import { accountRoutes } from '../../constants/routes';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import { color } from '../../constants/colors';
import { verticalScale } from '../../constants/dimension';

const TermsAndConditions = () => {
  // const {colors} = useTheme();

  // Custom Array for 9 the point

  const customArray = [
    {
      id: 1,
      value:
        'Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.',
    },
    {
      id: 2,
      value:
        'Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.',
    },
    {
      id: 3,
      value:
        'Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.',
    },
    {
      id: 4,
      value:
        'Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services. Use any information obtained from the Services in order to harass, abuse, or harm another person.',
    },
    {
      id: 5,
      value:
        'Make improper use of our support services or submit false reports of abuse or misconduct.',
    },
    {
      id: 6,
      value:
        'Use the Services in a manner inconsistent with any applicable laws or regulations.',
    },
    {
      id: 7,
      value: 'Engage in unauthorized framing of or linking to the Services.',
    },
    {
      id: 8,
      value:
        'Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.',
    },
    {
      id: 9,
      value:
        'Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.',
    },
    {
      id: 10,
      value:
        'Delete the copyright or other proprietary rights notice from any Content.',
    },
    {
      id: 11,
      value:
        'Attempt to impersonate another user or person or use the username of another user.',
    },
    {
      id: 12,
      value:
        "Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ('gifs'), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 'spyware' or 'passive collection mechanisms' or 'pcms').",
    },
    {
      id: 13,
      value:
        'Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.',
    },
    {
      id: 14,
      value:
        'Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.',
    },
    {
      id: 15,
      value:
        'Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.',
    },
    {
      id: 16,
      value:
        "Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.",
    },
    {
      id: 17,
      value:
        'Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.',
    },
    {
      id: 18,
      value:
        'Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.',
    },
    {
      id: 19,
      value:
        'Use a buying agent or purchasing agent to make purchases on the Services.',
    },
    {
      id: 20,
      value:
        'Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.',
    },
    {
      id: 21,
      value:
        'Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.',
    },
    {
      id: 22,
      value:
        'Use the Services to advertise or offer to sell goods and services.',
    },
    {id: 23, value: 'Sell or otherwise transfer your profile.'},
  ];

  return (
    <View
      style={[
        termsAndConditionStyle.termsAndConditionMain,
        {backgroundColor: color.white},
      ]}>
      <ChildStackHeader
        text={accountRoutes.TermsAndConditions}
        textColor={color.lightBlack}
      />
      <ScrollView
        style={[
          termsAndConditionStyle.termsAndConditionPage,
          {backgroundColor: color.lightGrey, borderColor: color.grey},
        ]}>
        <View style={termsAndConditionStyle.termsAndConditionsTop}>
          <Text style={[termsAndConditionStyle.termsAndConditionText,{color:color.lightBlack}]}>
            Terms and Conditions
          </Text>
          <Text style={[termsAndConditionStyle.termsAndService,{color:color.lightBlack}]}>
            TERMS OF SERVICE
          </Text>
          <Text style={[termsAndConditionStyle.updatedText,{color:color.lightBlack}]}>
            Last updated October 24, 2023
          </Text>
        </View>

        <View style={termsAndConditionStyle.agreementView}>
          <Text style={[termsAndConditionStyle.agreementText,{color:color.lightBlack}]}>
            AGREEMENT TO OUR LEGAL TERMS
          </Text>

          <Text
            style={[
              termsAndConditionStyle.agreementDescription,
              {marginTop: verticalScale(18),color:color.lightBlack},
            ]}>
            We are Total Recall, a company registered in Texas, United States at
            9800 Hillwood Parkway | Suite 140, Fort Worth, TX 76177.
          </Text>

          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            We operate the website https://totalrecallsafety.com, the mobile
            application of Total Recall, as well as any other related products
            and services that refer or link to these legal terms (the "Legal
            Terms") (collectively, the "Services").
          </Text>

          <Text
            style={[
              termsAndConditionStyle.agreementDescription,
              {marginTop: verticalScale(15),color:color.lightBlack},
            ]}>
            At Total Recall, we believe that safety, communication, and
            community lie at the heart of every successful organization. As the
            complexities of the modern world unfold, we recognize the importance
            of staying connected, being proactive, and ensuring safety. That's
            why we've developed the Total Recall App – an innovative solution
            that empowers employers to ensure the safety and well-being of every
            employee during emergencies and critical moments.
          </Text>

          <Text
            style={[
              termsAndConditionStyle.agreementDescription,
              {marginTop: verticalScale(15),color:color.lightBlack},
            ]}>
            You can contact us by phone at (833) 4-TOTALRECAL (486–8257), email
            at contact@total-recall.us, or by mail to 9800 Hillwood Parkway |
            Suite 140, Fort Worth, TX 76177, United States. These Legal Terms
            constitute a legally binding agreement made between you, whether
            personally or on behalf of an entity, and Total Recall, concerning
            your access to and use of the Services.
          </Text>

          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            You agree that by accessing the Services, you have read, understood,
            and agreed to be bound by all of these Legal Terms.
          </Text>

          <Text
            style={[
              termsAndConditionStyle.agreementDescription,
              {marginTop: verticalScale(15),color:color.lightBlack},
            ]}>
            IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
            EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </Text>

          <Text
            style={[
              termsAndConditionStyle.agreementDescription,
              {marginTop: verticalScale(15),color:color.lightBlack},
            ]}>
            We will provide you with prior notice of any scheduled changes to
            the Services you are using. Changes to Legal Terms will become
            effective seven (7) days after the notice is given, except if the
            changes apply to security updates, new functionality, bug fixes, and
            a court order, in which case the changes will be effective
            immediately.By continuing to use the Services after the effective
            date of any changes, you agree to be bound by the modified terms. If
            you disagree with such changes, you may terminate Services as per
            the section "TERM AND TERMINATION."
          </Text>
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            All users who are minors in the jurisdiction in which they reside
            (generally under the age of 18) must have the permission of, and be
            directly supervised by, their parent or guardian to use the
            Services. If you are a minor, you must have your parent or guardian
            read and agree to these Legal Terms prior to you using the Services.
            We recommend that you print a copy of these Legal Terms for your
            records.
          </Text>
        </View>

        <Text style={[termsAndConditionStyle.tableContentsText,{color:color.lightBlack}]}>
          Table of Contents
        </Text>

        <Text style={[termsAndConditionStyle.conditionHeading,{color:color.lightBlack}]}>
          1. Our Services
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </Text>
        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginTop: verticalScale(15),color:color.lightBlack},
          ]}>
          The Services are not tailored to comply with industry-specific
          regulations (Health Insurance Portability and Accountability Act
          (HIPAA), Federal Information Security Management Act (FISMA), etc.),
          so if your interactions would be subjected to such laws, you may not
          use the Services. You may not use the Services in a way that would
          violate the Gramm-Leach-Bliley Act (GLBA).
        </Text>

        {/* Intellectual */}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          2. Intellectual Property Rights
        </Text>
        <Text style={[termsAndConditionStyle.conditionHeading,{color:color.lightBlack}]}>
          Our intellectual property
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We are the owner or the licensee of all intellectual property rights
          in our Services, including all source code, databases, functionality,
          software, website designs, audio, video, text, photographs, and
          graphics in the Services (collectively, the "Content"), as well as the
          trademarks, service marks, and logos contained therein (the "Marks").
          {'\n'}
          Our Content and Marks are protected by copyright and trademark laws
          (and various other intellectual property rights and unfair competition
          laws) and treaties in the United States and around the world.
          {'/n'}
          The Content and Marks are provided in or through the Services "AS IS"
          for your personal, non-commercial use or internal business purpose
          only.
          {'/n'}
          Subject to your compliance with these Legal Terms, including the
          "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive,
          non-transferable, revocable license to:
        </Text>
        <View style={termsAndConditionStyle.dotTextView}>
          <View style={[termsAndConditionStyle.dot,{backgroundColor:color.black}]} />
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          access the Services; and
          </Text>
        </View>
        <View style={termsAndConditionStyle.dotTextView}>
          <View style={[termsAndConditionStyle.dot,{backgroundColor:color.black}]} />
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          download or print a copy of any portion of the Content to which you
          have properly gained access.
          </Text>
        </View>

        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          solely for your personal, non-commercial use or internal business
          purposes.
          {'\n'}
          Except as set out in this section or elsewhere in our Legal Terms, no
          part of the Services and no Content or Marks may be copied,
          reproduced, aggregated, republished, uploaded, posted, publicly
          displayed, encoded, translated, transmitted, distributed, sold,
          licensed, or otherwise exploited for any commercial purpose
          whatsoever, without our express prior written permission.
          {'\n'}
          If you wish to make any use of the Services, Content, or Marks other
          than as set out in this section or elsewhere in our Legal Terms,
          please address your request to: contact@total-recall.us. If we ever
          grant you the permission to post, reproduce, or publicly display any
          part of our Services or Content, you must identify us as the owners or
          licensors of the Services, Content, or Marks and ensure that any
          copyright or proprietary notice appears or is visible on posting,
          reproducing, or displaying our Content.
          {'\n'}
          We reserve all rights not expressly granted to you in and to the
          Services, Content, and Marks.
          {'\n'}
          Any breach of these Intellectual Property Rights will constitute a
          material breach of our Legal Terms and your right to use our Services
          will terminate immediately.
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          Your submissions
          {'\n'}
          Please review this section and the "PROHIBITED ACTIVITIES" section
          carefully prior to using our Services to understand the
        </Text>
        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          (a) rights you give us and
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          (b) obligations you have when you post or upload any content through
          the Services.
        </Text>
        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Submissions: By directly sending us any question, comment, suggestion,
          idea, feedback, or other information about the Services
          ("Submissions"), you agree to assign to us all intellectual property
          rights in such Submission. You agree that we shall own this Submission
          and be entitled to its unrestricted use and dissemination for any
          lawful purpose, commercial or otherwise, without acknowledgment or
          compensation to you.
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          You are responsible for what you post or upload: By sending us
          Submissions through any part of the Services you:
        </Text>

        <View style={termsAndConditionStyle.dotTextView}>
          <View style={[termsAndConditionStyle.dot,{backgroundColor:color.black}]} />
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            confirm that you have read and agree with our "PROHIBITED
            ACTIVITIES" and will not post, send, publish, upload, or transmit
            through the Services any Submission that is illegal, harassing,
            hateful, harmful, defamatory, obscene, bullying, abusive,
            discriminatory, threatening to any person or group, sexually
            explicit, false, inaccurate, deceitful, or misleading;
          </Text>
        </View>

        <View style={termsAndConditionStyle.dotTextView}>
          <View style={[termsAndConditionStyle.dot,{backgroundColor:color.black}]} />
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            to the extent permissible by applicable law, waive any and all moral
            rights to any such Submission;
          </Text>
        </View>

        <View style={termsAndConditionStyle.dotTextView}>
          <View style={[termsAndConditionStyle.dot,{backgroundColor:color.black}]} />
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            warrant that any such Submission are original to you or that you
            have the necessary rights and licenses to submit such Submissions
            and that you have full authority to grant us the above-mentioned
            rights in relation to your Submissions; and
          </Text>
        </View>

        <View style={termsAndConditionStyle.dotTextView}>
          <View style={[termsAndConditionStyle.dot,{backgroundColor:color.black}]} />
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            warrant and represent that your Submissions do not constitute
            confidential information.
          </Text>
        </View>

        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          You are solely responsible for your Submissions and you expressly
          agree to reimburse us for any and all losses that we may suffer
          because of your breach of
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>(a) this section,</Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>(b) any third party’s intellectual property rights,or</Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>(c) applicable law.</Text>

        {/* User Representation */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          3. User Representations
        </Text>
        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginBottom: verticalScale(15),color:color.lightBlack},
          ]}>
          By using the Services, you represent and warrant that:
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          (1) All registration information you submit will be true, accurate,
          current, and complete; {'\n'}
          (2) You will maintain the accuracy of such information and promptly
          update such registration information as necessary;{'\n'}
          (3) You have the legal capacity, and you agree to comply with these
          Legal Terms;{'\n'}
          (4) You are not a minor in the jurisdiction in which you reside, or if
          a minor, you have received parental permission to use the Services;
          {'\n'}
          (5) You will not access the Services through automated or non-human
          means, whether through a bot, script, or otherwise;{'\n'}
          (6) You will not use the Services for any illegal or unauthorized
          purpose;{'\n'}
          (7) Your use of the Services will not violate any applicable law or
          regulation.
        </Text>
        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginTop: verticalScale(15),color:color.lightBlack},
          ]}>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </Text>

        {/*  User Registration*/}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          4. User Registration
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          You may be required to register to use the Services. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </Text>

        {/* Purchase And Payments */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          5. Purchase And Payments
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We accept the following forms of payment:
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          - Visa
          {'\n'}- Mastercard
          {'\n'}- American Express
          {'\n'}- Discover
          {'\n'}- PayPal
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          You agree to provide current, complete, and accurate purchase and
          account information for all purchases made via the Services. You
          further agree to promptly update account and payment information,
          including email address, payment method, and payment card expiration
          date, so that we can complete your transactions and contact you as
          needed. Sales tax will be added to the price of purchases as deemed
          required by us. We may change prices at any time. All payments shall
          be in US dollars. {'\n'}
          You agree to pay all charges at the prices then in effect for your
          purchases and any applicable shipping fees, and you authorize us to
          charge your chosen payment provider for any such amounts upon placing
          your order. If your order is subject to recurring charges, then you
          consent to our charging your payment method on a recurring basis
          without requiring your prior approval for each recurring charge, until
          such time as you cancel the applicable order.
        </Text>
        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginTop: verticalScale(15),color:color.lightBlack},
          ]}>
          We reserve the right to correct any errors or mistakes in pricing,
          even if we have already requested or received payment. We reserve the
          right to refuse any order placed through the Services. We may, in our
          sole discretion, limit or cancel quantities purchased per person, per
          household, or per order. These restrictions may include orders placed
          by or under the same customer account, the same payment method, and/or
          orders that use the same billing or shipping address. We reserve the
          right to limit or prohibit orders that, in our sole judgment, appear
          to be placed by dealers, resellers, or distributors.
        </Text>

        {/* Free Trial */}

        {/*  User Registration*/}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          6. Free Trial
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We offer a 30-day free trial to new users who register with the
          Services. The account will not be charged, and the subscription will
          be suspended until upgraded to a paid version at the end of the free
          trial.
        </Text>

        {/*Cancellation */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          7. Cancelation
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          All purchases are non-refundable. You can cancel your subscription at
          any time by contacting us using the contact information provided
          below. Your cancellation will take effect at the end of the current
          paid term. {'\n'}If you are unsatisfied with our Services, please
          email us at support@total-recall.us or call us at (833) 4-TOTALRECAL
          (486–8257).
        </Text>

        {/* Software */}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          8. Software
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We may include software for use in connection with our Services. If
          such software is accompanied by an end user license agreement
          ("EULA"), the terms of the EULA will govern your use of the software.
          {'\n'}
          If such software is not accompanied by a EULA, then we grant to you a
          non-exclusive, revocable, personal, and non-transferable license to
          use such software solely in connection with our services and in
          accordance with these Legal Terms.{'\n'}Any software and any related
          documentation is provided "AS IS" without warranty of any kind, either
          express or implied, including, without limitation, the implied
          warranties of merchantability, fitness for a particular purpose, or
          non-infringement.{'\n'}You accept any and all risk arising out of use
          or performance of any software. You may not reproduce or redistribute
          any software except in accordance with the EULA or these Legal Terms.
        </Text>

        {/* Prohibited Activities */}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          9. Prohibited Activities
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          You may not access or use the Services for any purpose other than that
          for which we make the Services available. The Services may not be used
          in connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.{'\n'}As a user of the
          Services, you agree not to:
        </Text>

        {customArray.map((item, index) => {
          return (
            <View key={index} style={termsAndConditionStyle.dotTextView}>
              <View style={[termsAndConditionStyle.dot,{backgroundColor:color.black}]} />
              <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
                {item.value}
              </Text>
            </View>
          );
        })}

        {/* User Generated Contributions */}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          10. User Generated Contributions
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          The Services does not offer users to submit or post content.
        </Text>

        {/* Contribution License */}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          11. Contribution License
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          You and Services agree that we may access, store, process, and use any
          information and personal data that you provide and your choices
          (including settings).{'\n'}By submitting suggestions or other feedback
          regarding the Services, you agree that we can use and share such
          feedback for any purpose without compensation to you.
        </Text>

        {/* Guidelines for Reviews */}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          12. Guidelines for Reviews
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          You and Services agree that we may access, store, process, and use any
          information and personal data that you provide and your choices
          (including settings).{'\n'}By submitting suggestions or other feedback
          regarding the Services, you agree that we can use and share such
          feedback for any purpose without compensation to you.
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We may provide you areas on the Services to leave reviews or ratings.
          When posting a review, you must comply with the following criteria:
          {'\n'}
          (1) you should have firsthand experience with the person/entity being
          reviewed;{'\n'}
          (2) your reviews should not contain offensive profanity, or abusive,
          racist, offensive, or hateful language;{'\n'}
          (3) your reviews should not contain discriminatory references based on
          religion, race, gender, national origin, age, marital status, sexual
          orientation, or disability{'\n'}
          (4) your reviews should not contain references to illegal activity;
          {'\n'}
          (5) you should not be affiliated with competitors if posting negative
          reviews;{'\n'}
          (6) you should not make any conclusions as to the legality of conduct;
          {'\n'}
          (7) you may not post any false or misleading statements; and{'\n'}
          (8) you may not organize a campaign encouraging others to post
          reviews, whether positive or negative.{'\n'}
          We may accept, reject, or remove reviews in our sole discretion. We
          have absolutely no obligation to screen reviews or to delete reviews,
          even if anyone considers reviews objectionable or inaccurate.
        </Text>

        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginTop: verticalScale(15),color:color.lightBlack},
          ]}>
          Reviews are not endorsed by us, and do not necessarily represent our
          opinions or the views of any of our affiliates or partners. We do not
          assume liability for any review or for any claims, liabilities, or
          losses resulting from any review.{'\n'}
          By posting a review, you hereby grant to us a perpetual, non-
          exclusive, worldwide, royalty-free, fully paid, assignable, and
          sublicensable right and license to reproduce, modify, translate,
          transmit by any means, display, perform, and/or distribute all content
          relating to review.
        </Text>

        {/* Mobile Application License */}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          13. Mobile Application License
        </Text>

        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          If you access the Services via the App, then we grant you a revocable,
          non-exclusive, non-transferable, limited right to install and use the
          App on wireless electronic devices owned or controlled by you, and to
          access and use the App on such devices strictly in accordance with the
          terms and conditions of this mobile application license contained in
          these Legal Terms.{'\n'}
          You shall not:{'\n'}
          (1) except as permitted by applicable law, decompile, reverse
          engineer, disassemble, attempt to derive the source code of, or
          decrypt the App;{'\n'}
          (2) make any modification, adaptation, improvement, enhancement,
          translation, or derivative work from the App;{'\n'}
          (3) violate any applicable laws, rules, or regulations in connection
          with your access or use of the App;{'\n'}
          (4) remove, alter, or obscure any proprietary notice (including any
          notice of copyright or trademark) posted by us or the licensors of the
          App;{'\n'}
          (5) use the App for any revenue- generating endeavor, commercial
          enterprise, or other purpose for which it is not designed or intended;
          {'\n'}
          (6) make the App available over a network or other environment
          permitting access or use by multiple devices or users at the same
          time;{'\n'}
          (7) use the App for creating a product, service, or software that is,
          directly or indirectly, competitive with or in any way a substitute
          for the App;{'\n'}
          (8) use the App to send automated queries to any website or to send
          any unsolicited commercial email; or{'\n'}
          (9) use any proprietary information or any of our interfaces or our
          other intellectual property in the design, development, manufacture,
          licensing, or distribution of any applications, accessories, or
          devices for use with the App.{'\n'}
          Apple and Android Devices{'\n'}
          The following terms apply when you use the App obtained from either
          the Apple Store or Google Play (each an "App Distributor") to access
          the Services:
        </Text>

        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginTop: verticalScale(10),color:color.lightBlack},
          ]}>
          {' '}
          1. The license granted to you for our App is limited to a
          non-transferable license to use the application on a device that
          utilizes the Apple iOS or Android operating systems, as applicable,
          and in accordance with the usage rules set forth in the applicable App
          Distributor’s terms of service. {'\n'}
          2. We are responsible for providing any maintenance and support
          services with respect to the App as specified in the terms and
          conditions of this mobile application license contained in these Legal
          Terms or as otherwise required under applicable law, and you
          acknowledge that each App Distributor has no obligation whatsoever to
          furnish any maintenance and support services with respect to the App.
          {'\n'}
          3.In the event of any failure of the App to conform to any applicable
          warranty, you may notify the applicable App Distributor, and the App
          Distributor, in accordance with its terms and policies, may refund the
          purchase price, if any, paid for the App, and to the maximum extent
          permitted by applicable law, the App Distributor will have no other
          warranty obligation whatsoever with respect to the App.{'\n'}
          4. You represent and warrant that {'\n'}
          You are not located in a country that is subject to a US government
          embargo, or that has been designated by the US government as a
          "terrorist supporting" country and You are not listed on any US
          government list of prohibited or restricted parties; 5. You must
          comply with applicable third-party terms of agreement when using the
          App, e.g., if you have a VoIP application, then you must not be in
          violation of their wireless data service agreement when using the App;
          and {'\n'}
          6. You acknowledge and agree that the App Distributors are third-party
          beneficiaries of the terms and conditions in this mobile application
          license contained in these Legal Terms, and that each App Distributor
          will have the right (and will be deemed to have accepted the right) to
          enforce the terms and conditions in this mobile application license
          contained in these Legal Terms against you as a third-party
          beneficiary thereof.
        </Text>

        {/* Advertisers */}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          14. Advertisers
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We allow advertisers to display their advertisements and other
          information in certain areas of the Services, such as sidebar
          advertisements or banner advertisements. We simply provide the space
          to place such advertisements, and we have no other relationship with
          advertisers.
        </Text>

        {/* Sevices Managment */}
        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          15. Services Management
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We reserve the right, but not the obligation, to:
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={[termsAndConditionStyle.countText,{color:color.lightBlack}]}>1. </Text>
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            Monitor the Services for violations of these Legal Terms;
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[termsAndConditionStyle.countText,{color:color.lightBlack}]}>2. </Text>
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            Take appropriate legal action against anyone who, in our sole
            discretion, violates the law or these Legal Terms, including without
            limitation, reporting such user to law enforcement authorities;
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[termsAndConditionStyle.countText,{color:color.lightBlack}]}>3. </Text>
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            In our sole discretion and without limitation, refuse, restrict
            access to, limit the availability of, or disable (to the extent
            technologically feasible) any of your Contributions or any portion
            thereof;
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[termsAndConditionStyle.countText,{color:color.lightBlack}]}>4. </Text>
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            In our sole discretion and without limitation, notice, or liability,
            to remove from the Services or otherwise disable all files and
            content that are excessive in size or are in any way burdensome to
            our systems; and
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[termsAndConditionStyle.countText,{color:color.lightBlack}]}>5. </Text>
          <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
            Otherwise manage the Services in a manner designed to protect our
            rights and property and to facilitate the proper functioning of the
            Services.
          </Text>
        </View>

        {/* Privacy Policy */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          16. Privacy Policy
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We care about data privacy and security. By using the Services, you
          agree to be bound by our Privacy Policy posted on the Services, which
          is incorporated into these Legal Terms. Please be advised the Services
          are hosted in the United States.{'\n'}
          If you access the Services from any other region of the world with
          laws or other requirements governing personal data collection, use, or
          disclosure that differ from applicable laws in the United States, then
          through your continued use of the Services, you are transferring your
          data to the United States, and you expressly consent to have your data
          transferred to and processed in the United States.
        </Text>

        {/* Terms and Terminations */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          17. Terms and Terminations
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          These Legal Terms shall remain in full force and effect while you use
          the Services.{'\n'}
          WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE
          THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY,
          DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP
          ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING
          WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
          COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR
          REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES
          OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED
          AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </Text>

        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginTop: verticalScale(10),color:color.lightBlack},
          ]}>
          If we terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party.{'\n'}
          In addition to terminating or suspending your account, we reserve the
          right to take appropriate legal action, including without limitation
          pursuing civil, criminal, and injunctive redress.
        </Text>

        {/* Modifications and Interruptions */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          18. Modifications and Interruptions
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at our sole discretion without
          notice. However, we have no obligation to update any information on
          our Services. {'\n'}
          We will not be liable to you or any third party for any modification,
          price change, suspension, or discontinuance of the Services.{'\n'}
          Dashboard Consent Management Policies Privacy Policy Cookie Policy
          Terms and Conditions EULA Return Policy Disclaimer Shipping Policy
          Acceptable Use Policy Settings We cannot guarantee the Services will
          be available at all times.{'\n'}
          We may experience hardware, software, or other problems or need to
          perform maintenance related to the Services, resulting in
          interruptions, delays, or errors.{'\n'}
          We reserve the right to change, revise, update, suspend, discontinue,
          or otherwise modify the Services at any time or for any reason without
          notice to you.{'\n'}
          You agree that we have no liability whatsoever for any loss, damage,
          or inconvenience caused by your inability to access or use the
          Services during any downtime or discontinuance of the Services.{'\n'}
          Nothing in these Legal Terms will be construed to obligate us to
          maintain and support the Services or to supply any corrections,
          updates, or releases in connection therewith.{'\n'}
        </Text>

        {/* Governing Law */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          19. Governing Law
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          These Legal Terms and your use of the Services are governed by and
          construed in accordance with the laws of the State of Texas applicable
          to agreements made and to be entirely performed within the State of
          Texas, without regard to its conflict of law principles.
        </Text>

        {/* Dispute Resolutions */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          20. Dispute Resolutions
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          Binding Arbitration If the Parties are unable to resolve a Dispute
          through informal negotiations, the Dispute (except those Disputes
          expressly excluded below) will be finally and exclusively resolved by
          binding arbitration.{'\n'} YOU UNDERSTAND THAT WITHOUT THIS PROVISION,
          YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. {'\n'}{' '}
          The arbitration shall be commenced and conducted under the Commercial
          Arbitration Rules of the American Arbitration Association ("AAA") and,
          where appropriate, the AAA’s Supplementary Procedures for Consumer
          Related Disputes ("AAA Consumer Rules"), both of which are available
          at the American Arbitration Association (AAA) website. {'\n'} Your
          arbitration fees and your share of arbitrator compensation shall be
          governed by the AAA Consumer Rules and, where appropriate, limited by
          the AAA Consumer Rules. If such costs are determined by the arbitrator
          to be excessive, we will pay all arbitration fees and expenses. The
          arbitration may be conducted in person, through the submission of
          documents, by phone, or online. The arbitrator will make a decision in
          writing, but need not provide a statement of reasons unless requested
          by either Party. The arbitrator must follow applicable law, and any
          award may be challenged if the arbitrator fails to do so. Except where
          otherwise required by the applicable AAA rules or applicable law, the
          arbitration will take place in United States, Texas. {'\n'} Except as
          otherwise provided herein, the Parties may litigate in court to compel
          arbitration, stay proceedings pending arbitration, or to confirm,
          modify, vacate, or enter judgment on the award entered by the
          arbitrator. {'\n'} If for any reason, a Dispute proceeds in court
          rather than arbitration, the Dispute shall be commenced or prosecuted
          in the state and federal courts located in United States, Texas, and
          the Parties hereby consent to, and waive all defenses of lack of
          personal jurisdiction, and forum non conveniens with respect to venue
          and jurisdiction in such state and federal courts.
        </Text>

        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginTop: verticalScale(15),color:color.lightBlack},
          ]}>
          Application of the United Nations Convention on Contracts for the
          International Sale of Goods and the Uniform Computer Information
          Transaction Act (UCITA) are excluded from these Legal Terms. {'\n'}
          In no event shall any Dispute brought by either Party related in any
          way to the Services be commenced more than one {'\n'} (1) years after
          the cause of action arose. {'\n'}
          If this provision is found to be illegal or unenforceable, then
          neither Party will elect to arbitrate any Dispute falling within that
          portion of this provision found to be illegal or unenforceable and
          such Dispute shall be decided by a court of competent jurisdiction
          within the courts listed for jurisdiction above, and the Parties agree
          to submit to the personal jurisdiction of that court.{'\n'}
          Restrictions {'\n'}
          The Parties agree that any arbitration shall be limited to the Dispute
          between the Parties individually. To the full extent permitted by law,
          {'\n'}
          (a) no arbitration shall be joined with any other proceeding; {'\n'}
          (b) there is no right or authority for any Dispute to be arbitrated on
          a class-action basis or to utilize class action procedures; and {'\n'}
          (c) there is no right or authority for any Dispute to be brought in a
          purported representative capacity on behalf of the general public or
          any other persons.
        </Text>

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          Exceptions to Arbitration
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          The Parties agree that the following Disputes are not subject to the
          above provisions concerning binding arbitration: {'\n'} (a) any
          Disputes seeking to enforce or protect, or concerning the validity of,
          any of the intellectual property rights of a Party; {'\n'} (b) any
          Dispute related to, or arising from, allegations of theft, piracy,
          invasion of privacy, or unauthorized use; and {'\n'} (c) any claim for
          injunctive relief. If this provision is found to be illegal or
          unenforceable, then neither Party will elect to arbitrate any Dispute
          falling within that portion of this provision found to be illegal or
          unenforceable and such Dispute shall be decided by a court of
          competent jurisdiction within the courts listed for jurisdiction
          above, and the Parties agree to submit to the personal jurisdiction of
          that court.
        </Text>

        {/* Corrections */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          21. Corrections
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </Text>

        {/* Disclaimer */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          22. Disclaimer
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
          AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS
          OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-
          INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF
          ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL
          ASSUME NO LIABILITY OR RESPONSIBILITY FOR {'\n'} ANY {'\n'}
          (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, {'\n'}
          (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
          RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, {'\n'}
          (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY
          AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
          THEREIN,{'\n'}
          (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
          SERVICES,{'\n'}
          (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
          TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR{' '}
          {'\n'}
          (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY
          LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY
          CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE
          SERVICES. {'\n'}
          WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR
          ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH
          THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
          APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL
          NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES. {'\n'}
          AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN
          ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
          CAUTION WHERE APPROPRIATE.
        </Text>

        {/* Limitations of Liability */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          23. Limitations of Liability
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES. {'\n'}
          NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
          LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM
          OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF
          ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE
          OF ACTION ARISING.{'\n'}
          CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS
          ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN
          DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
          DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
          ADDITIONAL RIGHTS.
        </Text>

        {/* Indemnification */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          24. Indemnification
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys’ fees and expenses,
          made by any third party due to or arising out of: {'\n'}
          (1) use of the Services; {'\n'}
          (2) breach of these Legal Terms; {'\n'}
          (3) any breach of your representations and warranties set forth in
          these Legal Terms; {'\n'}
          (4) your violation of the rights of a third party, including but not
          limited to intellectual property rights; or {'\n'}
          (5) any overt harmful act toward any other user of the Services with
          whom you connected via the Services. Notwithstanding the foregoing, we
          reserve the right, at your expense, to assume the exclusive defense
          and control of any matter for which you are required to indemnify us,
          and you agree to cooperate, at your expense, with our defense of such
          claims. {'\n'}
          We will use reasonable efforts to notify you of any such claim,
          action, or proceeding which is subject to this indemnification upon
          becoming aware of it.
        </Text>

        {/* User Data */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          25. User Data
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. {'\n'} Although we perform
          regular routine backups of data, you are solely responsible for all
          data that you transmit or that relates to any activity you have
          undertaken using the Services. {'\n'} You agree that we shall have no
          liability to you for any loss or corruption of any such data, and you
          hereby waive any right of action against us arising from any such loss
          or corruption of such data.
        </Text>

        {/* Electronic Communications, Transactions, and Signatures */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          26. Electronic Communications, Transactions, and Signatures
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          Visiting the Services, sending us emails, and completing online forms
          constitute electronic communications. {'\n'}
          You consent to receive electronic communications, and you agree that
          all agreements, notices, disclosures, and other communications we
          provide to you electronically, via email and on the Services, satisfy
          any legal requirement that such communication be in writing. {'\n'}
          YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
          ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
          POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR
          VIA THE SERVICES. {'\n'}
          You hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
        </Text>

        {/* California Users and Residents */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          27. California Users and Residents
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          If any complaint with us is not satisfactorily resolved, you can
          contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing
          at 1625 North Market Blvd., Sute N 112, Sacramento, California 95834
          or by telephone at (800) 952-5210 or (916) 445-1254.
        </Text>

        {/* Miscellaneous */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          28. Miscellaneous
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          These Legal Terms and any policies or operating rules posted by us on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and us. {'\n'}
          Our failure to exercise or enforce any right or provision of these
          Legal Terms shall not operate as a waiver of such right or provision.
          {'\n'}
          These Legal Terms operate to the fullest extent permissible by law. We
          may assign any or all of our rights and obligations to others at any
          time. We shall not be responsible or liable for any loss, damage,
          delay, or failure to act caused by any cause beyond our reasonable
          control. If any provision or part of a provision of these Legal Terms
          is determined to be unlawful, void, or unenforceable, that provision
          or part of the provision is deemed severable from these Legal Terms
          and does not affect the validity and enforceability of any remaining
          provisions.{'\n'}
          There is no joint venture, partnership, employment or agency
          relationship created between you and us as a result of these Legal
          Terms or use of the Services.{'\n'}
          You agree that these Legal Terms will not be construed against us by
          virtue of having drafted them. You hereby waive any and all defenses
          you may have based on the electronic form of these Legal Terms and the
          lack of signing by the parties hereto to execute these Legal Terms.
        </Text>

        {/* Future Transactions */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          29. Future Transactions
        </Text>
        <Text style={[termsAndConditionStyle.agreementDescription,{color:color.lightBlack}]}>
          As Total Recall evolves, we may experience organizational transitions,
          such as mergers or acquisitions, or the potential sale of a
          significant portion or even all of our assets. Typically, during such
          business transfers, information related to users, encompassing
          customer data, is likely to be among the transferred assets. When you
          provide information via our website, data uploads, or other methods,
          you concede that your data could be transferred to the relevant
          entities under these circumstances. Nevertheless, any acquiring party
          will be contractually bound to ensure the confidentiality and
          integrity of your personal information. In the event of any change in
          ownership or alterations in the usage of user information, we will
          inform you by sending an email and/or by placing a conspicuous notice
          on our website, outlining any options you may have regarding your
          data. {'\n'}
          This privacy notice may undergo revisions reflecting modifications to
          our information management policies. We advise you to review this
          section intermittently to stay informed about how we are committed to
          protecting your privacy.
        </Text>

        {/* Contact Us */}

        <Text
          style={[
            termsAndConditionStyle.conditionHeading,
            {marginTop: verticalScale(20),color:color.lightBlack},
          ]}>
          30. Contact Us
        </Text>
        <Text
          style={[
            termsAndConditionStyle.agreementDescription,
            {marginBottom: verticalScale(30),color:color.lightBlack},
          ]}>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at: {'\n'}Total Recall {'\n'}9800 Hillwood Parkway | Suite 140 {'\n'}
          Fort Worth, TX 76177{'\n'}United States{'\n'}Phone: (833) 4-TOTALRECAL
          (486–8257){'\n'}
          contact@total-recall.us
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditions;
