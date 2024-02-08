import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {forumStyle} from './forumStyle';
import {color} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../../constants/icons';
import { verticalScale } from '../../constants/dimension';

const Forum = () => {
  const [active, setActive] = useState(1);

  const buttonArray = [
    {id: 1, value: 'OPB'},
    {id: 2, value: 'EPB'},
  ];

  // change Tab

  const handleChangeTab = id => {
    setActive(id);
  };

  return (
    <View style={forumStyle.mergedMain}>
      <Text style={forumStyle.mergedMainText}>Forum</Text>

      <Text style={forumStyle.instructionText}>This forum is where you find all the the published OPBs and EPBs on this platform. </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={forumStyle.forumTopView}>
        <View style={forumStyle.OprEprView}>
          {buttonArray.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => handleChangeTab(item.id)}
                key={index}
                style={[
                  forumStyle.tabView,
                  {
                    backgroundColor:
                      item.id === active ? color.darkSkyBlue : null,
                  },
                ]}>
                <Text
                  style={[
                    forumStyle.tabText,
                    {color: item.id === active ? color.white : color.light},
                  ]}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity style={forumStyle.dotViewMain}>
          <icons.DeleteIcon width={25} height={25} />
        </TouchableOpacity>
        <View style={forumStyle.dutyTitleWrapper}>
          <Text style={forumStyle.dutyTitleHeading}>Merged Narrative Title</Text>
          <Text style={forumStyle.dutyTitleDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur
            beatae doloremque in sint accusamus ea assumenda dolorum corporis
            amet maiores!
          </Text>
        </View>
        <View style={forumStyle.dutyTitleWrapper}>
          <Text style={forumStyle.dutyTitleHeading}>Duty Title</Text>
          <Text style={forumStyle.dutyTitleDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur
            beatae doloremque in sint accusamus ea assumenda dolorum corporis
            amet maiores!
          </Text>
        </View>
        <View style={forumStyle.dutyTitleWrapper}>
          <Text style={forumStyle.dutyTitleHeading}>Duty Title</Text>
          <Text style={forumStyle.dutyTitleDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur
            beatae doloremque in sint accusamus ea assumenda dolorum corporis
            amet maiores!
          </Text>
        </View>
        <View style={forumStyle.dutyTitleWrapper}>
          <Text style={forumStyle.dutyTitleHeading}>Duty Title</Text>
          <Text style={forumStyle.dutyTitleDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur
            beatae doloremque in sint accusamus ea assumenda dolorum corporis
            amet maiores!
          </Text>
        </View>
        <View style={{height:verticalScale(30)}}/>

      </ScrollView>
     
    </View>
  );
};

export default Forum;
