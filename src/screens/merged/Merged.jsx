import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {mergedStyle} from './mergedStyle';
import {color} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../../constants/icons';
import { verticalScale } from '../../constants/dimension';

const Merged = () => {
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
    <View style={mergedStyle.mergedMain}>
      <Text style={mergedStyle.mergedMainText}>Merged Narratives</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={mergedStyle.mergedTopView}>
        <View style={mergedStyle.OprEprView}>
          {buttonArray.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => handleChangeTab(item.id)}
                key={index}
                style={[
                  mergedStyle.tabView,
                  {
                    backgroundColor:
                      item.id === active ? color.darkSkyBlue : null,
                  },
                ]}>
                <Text
                  style={[
                    mergedStyle.tabText,
                    {color: item.id === active ? color.white : color.light},
                  ]}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity style={mergedStyle.dotViewMain}>
          <icons.DeleteIcon width={25} height={25} />
        </TouchableOpacity>
        <View style={mergedStyle.dutyTitleWrapper}>
          <Text style={mergedStyle.dutyTitleHeading}>Merged Narrative Title</Text>
          <Text style={mergedStyle.dutyTitleDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur
            beatae doloremque in sint accusamus ea assumenda dolorum corporis
            amet maiores!
          </Text>
        </View>
        <View style={mergedStyle.dutyTitleWrapper}>
          <Text style={mergedStyle.dutyTitleHeading}>Duty Title</Text>
          <Text style={mergedStyle.dutyTitleDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur
            beatae doloremque in sint accusamus ea assumenda dolorum corporis
            amet maiores!
          </Text>
        </View>
        <View style={mergedStyle.dutyTitleWrapper}>
          <Text style={mergedStyle.dutyTitleHeading}>Duty Title</Text>
          <Text style={mergedStyle.dutyTitleDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur
            beatae doloremque in sint accusamus ea assumenda dolorum corporis
            amet maiores!
          </Text>
        </View>
        <View style={mergedStyle.dutyTitleWrapper}>
          <Text style={mergedStyle.dutyTitleHeading}>Duty Title</Text>
          <Text style={mergedStyle.dutyTitleDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur
            beatae doloremque in sint accusamus ea assumenda dolorum corporis
            amet maiores!
          </Text>
        </View>
        <View style={{height:verticalScale(30)}}/>
      </ScrollView>
      <View style={mergedStyle.mergedBottomView}>
        <LinearGradient
          colors={['#3A86FF', '#1C28AA']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}>
          <TouchableOpacity style={mergedStyle.createNarrativeButtonstyle}>
            <Text style={mergedStyle.narrativeButtonText}>
              Merge Narratives
            </Text>
          </TouchableOpacity>
        </LinearGradient>

          <TouchableOpacity activeOpacity={1} style={mergedStyle.narrativesButton}>
            <icons.NarrativesIcon width={25} height={25} />
            <Text style={mergedStyle.buttonText}>Go to Narratives</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Merged;
