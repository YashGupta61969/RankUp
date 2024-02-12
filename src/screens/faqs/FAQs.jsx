import {View, Text, TouchableOpacity, Linking, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {FAQsStyle, faqsStyle} from './faqsStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {accountRoutes} from '../../constants/routes';
import {useTheme} from '@react-navigation/native';
import {color} from '../../constants/colors';
import {icons} from '../../constants/icons';

const FAQs = () => {
  const [expandedItems, setExpandedItems] = useState([]);
  const {colors} = useTheme();

  const handleToggle = id => {
    setExpandedItems(prevExpandedItems => {
      if (prevExpandedItems.includes(id)) {
        return prevExpandedItems.filter(item => item !== id);
      } else {
        return [...prevExpandedItems, id];
      }
    });
  };

  // Custom Array

  const FaqsArray = [
    {
      id: 1,
      title: 'What types of alerts can I receive through Total Recall?',
      value:
        "Total Recall offers a wide range of alerts and messages to keep you informed in various critical situations. From safety alerts to important announcements, we've got you covered",
    },
    {
      id: 2,
      title: 'Is my personal information secure within the app??',
      value:
        'We take your security and data privacy seriously. Total Recall is designed with robust security measures to safeguard your personal information and ensure your peace of mind.',
    },
    {
      id: 3,
      title: 'How can I recover my account or password if I forget them?',
      value:
        'Account recovery procedures are hassle-free with Total Recall. Find out how to recover your account or reset your password if the need arises.',
    },
    {
      id: 4,
      title:
        'How can I ensure that Total Recall remains up-to-date on my device?',
      value: `Keeping Total Recall up-to-date is essential for optimal performance. Learn how to ensure your app remains current on your device for the latest features and enhancements.\n \n Join the Total Recall community today, and experience a safer and more efficient way to communicate and stay informed. Subscribe now at totalrecallsafety.com and follow us on LinkedIn at Total Recall LinkedIn. Your safety matters to us, and Total Recall is here to support you every step of the way.`,
    },
    {
      id: 5,
      title: 'What types of alerts can I receive through Total Recall?',
      value: '',
    },
  ];

  return (
    <View style={faqsStyle.faqsMain}>
      <ChildStackHeader
        text={accountRoutes.FAQs}
        textColor={color.lightBlack}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {FaqsArray.map((item, index) => {
          const isExpanded = expandedItems.includes(item.id);
          return (
            <View
              key={index}
              style={[faqsStyle.boxMain, {borderColor: color.grey,backgroundColor:color.lightGrey}]}>
              <View style={[faqsStyle.boxMainTop]}>
                <Text style={[faqsStyle.headingText, {color: colors.text}]}>
                  {item.title}
                </Text>
                <TouchableOpacity onPress={() => handleToggle(item.id)}>
                  {isExpanded ? (
                    <icons.TopArrow width={25} height={25} />
                  ) : (
                    <icons.DownArrow width={25} height={25} />
                  )}
                </TouchableOpacity>
              </View>
              {isExpanded && (
                <Text
                  style={[
                    faqsStyle.descriptionText,
                    {color: color.lightBlack},
                  ]}>
                  {item.value}
                </Text>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FAQs;
