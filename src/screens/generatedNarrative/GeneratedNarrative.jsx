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
import {submitEpr} from '../../data/services/api/militaryBulletsApi';
import GradientButton from '../../components/buttons/GradientButton';

import {toast} from '../../utils/toast';
import {verticalScale} from '../../constants/dimension';
import CancelButton from '../../components/buttons/CancelButton';

const GeneratedNarrative = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [selectedBullets, setSelectedBullets] = useState([]);
  const [selectedBulletsValue, setSelectedBulletsValue] = useState([]);
  const {colors} = useTheme();
  // const {data} = route.params;
  // const {title} = route.params;
  // const {routeName} = route.params
  // const bulletArray = data.message.split('\n');
  // const categoryItem = route.params.categoryitem;
  // const modifiedText = categoryItem
  //   .replace(/\s+/g, '_')
  //   .replace(/\//g, '_')
  //   .toLowerCase();

  // Submit EPR

  // const handelSubmitEpr = async () => {
  //   const requiredEprData = {
  //     title: route.params.title,
  //     category: modifiedText,
  //     bullets: selectedBulletsValue,
  //     api_response: route.params.data.message,
  //   };
  //   try {

  //     await submitEpr(requiredEprData);
  //     showModal(OprUdate, {navigation,colors,routeName});

  //   } catch (error) {
  //     setLoading(false);
  //     toast({type: 'error', text1: error.response.data.detail});
  //   }
  // };

  // // For selecting the box

  // const handleCheckBoxChange = (index, item) => {
  //   const isSelected = selectedBullets.includes(index);
  //   setSelectedBullets(prevSelected =>
  //     isSelected
  //       ? prevSelected.filter(item => item !== index)
  //       : [...prevSelected, index],
  //   );
  //   setSelectedBulletsValue(prevItem =>
  //     isSelected
  //       ? prevItem.filter(itemIndex => itemIndex !== index)
  //       : [...prevItem, item],
  //   );
  // };

  return (
    // <View
    //   style={[
    //     generatedNarrativeStyle.generatedBulletMain,
    //     {backgroundColor: color.white},
    //   ]}>
    //   <ChildStackHeader
    //     text={homeRoutes.GeneratedNarrative}
    //     textColor={color.lightBlack}
    //   />
    //   <ScrollView showsVerticalScrollIndicator={false}>


    //     <View style={{marginTop: verticalScale(18)}}>
    //       <Text
    //         style={[
    //           generatedNarrativeStyle.bulletsTextDescription,
    //           {color: colors.text},
    //         ]}>
    //         Choose the most appropriate bullet option below.{'\n'}(Press for 2
    //         seconds to choose multiple bullets)
    //       </Text>
    //     </View>

    //     <View
    //       style={[
    //         generatedNarrativeStyle.bulletOptionsView,
    //         {
    //           backgroundColor: colors.screenCard,
    //           borderColor: colors.cardBorder,
    //         },
    //       ]}>
    //       {/* {bulletArray.map((item, index) => {
    //         return (
    //           <View
    //             key={index}
    //             style={[
    //               generatedNarrativeStyle.bulletOptions,
    //               {borderColor: colors.cardBorder},
    //             ]}>
    //             <View
    //               style={[
    //                 generatedNarrativeStyle.bulletOptionInner,
    //                 {
    //                   borderColor: color.border,
    //                   // backgroundColor: selectedBullets.includes(index)
    //                   //   ? color.kansas_grain
    //                   //   : null,
    //                 },
    //                 // {backgroundColor: color.blue_brand},
    //               ]}>
    //               <View
    //                 style={{flexDirection: 'row', alignItems: 'flex-start'}}>
    //                 <View
    //                   style={[
    //                     generatedNarrativeStyle.dotView,
    //                     // {backgroundColor: selectedBullets.includes(index) ? color.black: colors.dotColor},
    //                   ]}
    //                 />
    //                 <Text
    //                   style={[
    //                     generatedNarrativeStyle.bulletOptionsText,
    //                     // {color: selectedBullets.includes(index) ? color.black: colors.text},
    //                   ]}>
    //                   {item}
    //                 </Text>
    //               </View>
    //               <CustomCheckBox
    //               selectedBullets={selectedBullets}
    //               index={index}
    //                 //  checked={selectedBullets?.includes(index)}
    //                 // onChange={() => handleCheckBoxChange(index, item)}
    //               />
    //             </View>
    //           </View>
    //         );
    //       })} */}
    //     </View>

    //     <GradientButton text="Save Narrative" action={()=>navigation.navigate(homeRoutes.ViewNarrative)}/>
    //     <CancelButton text="Go Back" action={() => navigation.goBack()} />
    //   </ScrollView>
    // </View>
    <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
      <Text>This Screen is Under Developemnt</Text>
    </View>
  );
};

export default GeneratedNarrative;
