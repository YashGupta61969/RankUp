import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {generatedNarrativeStyle} from './generatedNarrativeStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {homeRoutes, recallRoutes} from '../../constants/routes';
import {useTheme} from '@react-navigation/native';
import CustomCheckBox from '../../components/common/customCheckBox/CustomCheckBox';
import {color} from '../../constants/colors';
// import OprUdate from '../../components/modals/oprUpdate/OprUpdate';
import {showModal} from '@whitespectre/rn-modal-presenter';
import {verticalScale} from '../../constants/dimension';
import CancelButton from '../../components/buttons/CancelButton';
import { submitEpr } from '../../data/services/EprApi';
import { toast } from '../../utils/toast';
import GradientButton from '../../components/buttons/GradientButton';
import Loader from '../../components/loader/Loader';

const GeneratedNarrative = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [selectedBullets, setSelectedBullets] = useState([]);
  const [selectedBulletsValue, setSelectedBulletsValue] = useState([]);
  const {colors} = useTheme();
  const {narrative} = route.params.data;
  const {epr} = route.params.data;
  const jointResponse = `${narrative} ${epr}`;
  const bulletArray = jointResponse.split('\n');
  const filteredArray = bulletArray.filter(item => item !== '');
  const categoryItem = route.params.categoryitem;
  const modifiedText = categoryItem
    .replace(/\s+/g, '_')
    .replace(/\//g, '_')
    .toLowerCase();


  // Submit EPR
console.log("route.",route.data)

  const handelSubmitEpr = async () => {
    const requiredEprData = {
      title: route.params.title,
      category: modifiedText,
      bullets: selectedBullets,
      api_response: narrative,
    };

    try {
      setLoading(true)
     const data =  await submitEpr(requiredEprData);
     console.log("data",data)
      navigation.navigate(homeRoutes.ViewNarrative,{route,selectedBulletsValue})
      setLoading(false)
    } catch (error) {
      console.log("error",error.response.data)
      setLoading(false);
      toast({type: 'error', text1: error.response.data.detail});
    }
  };

  // // For selecting the box

  const handleCheckBoxChange = (index, item) => {
    const isSelected = selectedBullets.includes(index);
    setSelectedBullets(prevSelected =>
      isSelected
        ? prevSelected.filter(item => item !== index)
        : [...prevSelected, index],
    );
    setSelectedBulletsValue(prevItem =>
      isSelected
        ? prevItem.filter(itemIndex => itemIndex !== index)
        : [...prevItem, item],
    );
  };

  return (
    <View
      style={[
        generatedNarrativeStyle.generatedBulletMain,
        {backgroundColor: color.white},
      ]}>
      <ChildStackHeader
        text={homeRoutes.GeneratedNarrative}
        textColor={color.lightBlack}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Loader loading={loading}/>
        <View style={{marginTop: verticalScale(18)}}>
          <Text
            style={[
              generatedNarrativeStyle.bulletsTextDescription,
              {color: color.lightBlack},
            ]}>
            Choose the most appropriate bullet option below.{'\n'}(Press for 2
            seconds to choose multiple bullets)
          </Text>
        </View>

        <View
          style={[
            generatedNarrativeStyle.bulletOptionsView,
            {
              backgroundColor: color.lightSkyBlue,
              borderColor: color.grey,
            },
          ]}>
          {filteredArray.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  generatedNarrativeStyle.bulletOptions,
                  {borderColor: color.grey},
                ]}>
                <View
                  style={[
                    generatedNarrativeStyle.bulletOptionInner,
                    {
                      borderColor: color.border,
                      backgroundColor: selectedBullets.includes(index)
                        ? color.lightBlue
                        : null,
                    },
                    // {backgroundColor: color.lightSkyBlue},
                  ]}>
                  <View
                    style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                    <View
                      style={[
                        generatedNarrativeStyle.dotView,
                        {
                          backgroundColor: selectedBullets.includes(index)
                            ? color.white
                            : color.black,
                        },
                      ]}
                    />
                    <Text
                      style={[
                        generatedNarrativeStyle.bulletOptionsText,
                        {
                          color: selectedBullets.includes(index)
                            ? color.white
                            : color.black,
                        },
                      ]}>
                      {item}
                    </Text>
                  </View>
                  <CustomCheckBox
                    selectedBullets={selectedBullets}
                    index={index}
                    showColor="Yes"
                    checked={selectedBullets?.includes(index)}
                    onChange={() => handleCheckBoxChange(index, item)}
                  />
                </View>
              </View>
            );
          })}
        </View>

        <GradientButton
          text="Save Narrative"
          action={handelSubmitEpr}
        />
        <CancelButton text="Go Back" action={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
};

export default GeneratedNarrative;
