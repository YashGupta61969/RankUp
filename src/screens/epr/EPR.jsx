import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {eprStyle} from './eprStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {homeRoutes, recallRoutes} from '../../constants/routes';
import {color} from '../../constants/colors';
import {useNavigation, useTheme} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import {icons} from '../../constants/icons';
// import {toast} from '../../utils/toast';
// import GradientButton from '../../components/buttons/GradientButton';
import {verticalScale} from '../../constants/dimension';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../../components/buttons/GradientButton';
import CheckBox from '@react-native-community/checkbox';
import CancelButton from '../../components/buttons/CancelButton';
import {CreateEpr} from '../../data/services/EprApi';
import Loader from '../../components/loader/Loader';
import {toast} from '../../utils/toast';

const EPR = ({navigation}) => {
  // States

  const [categoryValue, setCategoryValue] = useState(null);
  const [categoryitem, setCategoryitem] = useState('');
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState('');
  const [impact, setImpact] = useState('');
  const [result, setResult] = useState('');
  const [title, setTitle] = useState('');
  const [checked, setChecked] = useState(false);
  const {colors} = useTheme();
  const {navigate} = useNavigation();

  // padding

  const padding = Platform.OS === 'ios' ? 14 : 9;
  const multiLinePadding = Platform.OS === 'ios' ? 90 : 10;

  // DropDown Data

  const data = [
    {label: 'Job Performance', value: '1'},
    {label: 'Whole Airman Concept', value: '2'},
    {label: 'Leadership/Fellowship/Impact', value: '3'},
  ];

  // handle Generate EPR

  const handleGenerateEpr = async () => {
    try {
      if (!action || !impact || !result || !title || !categoryValue) {
        toast({type: 'error', text1: 'All Fields are mandatory'});
        return;
      }

      setLoading(true);
      const requiredData = {
        action: action,
        impact: impact,
        result: result,
      };
      // const {data} = await CreateEpr(requiredData);
      // setAction('');
      // setImpact('');
      // setResult('');
      // setTitle('');
      // setLoading(false);
      // toast({type: 'success', text1: 'EPR created Successfully'});
      navigation.navigate(homeRoutes.GeneratedNarrative, {
        data,
        title,
        categoryitem,
      });
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: error.response});
    }
  };

  return (
    <View style={[eprStyle.oprMain, {backgroundColor: color.white}]}>
      <ChildStackHeader text={homeRoutes.EPB} textColor={color.lightBlack} />
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}>
        <Loader loading={loading} />
        <View
          style={[
            eprStyle.titleView,
            {
              borderColor: color.shadowGrey,
            },
          ]}>
          <View>
            <Text style={[eprStyle.titleText, {color: colors.text}]}>
              Title
            </Text>
            <TextInput
              placeholder="New One"
              value={title}
              placeholderTextColor={color.darkBlue}
              onChangeText={val => setTitle(val)}
              style={[eprStyle.input, {paddingVertical: padding}]}
            />
          </View>
          <View style={eprStyle.categoryView}>
            <Text style={[eprStyle.titleText, {color: colors.text}]}>
              Category
            </Text>
            <Dropdown
              style={eprStyle.dropdown}
              activeColor={color.darkSkyBlue}
              placeholderStyle={eprStyle.placeholderStyle}
              selectedTextStyle={eprStyle.selectedTextStyle}
              itemContainerStyle={{backgroundColor: color.white}}
              itemTextStyle={eprStyle.itemText}
              iconStyle={eprStyle.iconStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Choose Option"
              value={categoryValue}
              onChange={item => {
                setCategoryValue(item.value);
                setCategoryitem(item.label);
              }}
              renderRightIcon={() => <icons.DropDown />}
              renderItem={(item, index, selected) => {
                const matchedValue = item.value === categoryValue;
                return (
                  <View style={eprStyle.dropdownBox}>
                    <Text
                      style={[
                        eprStyle.itemText,
                        {color: matchedValue ? color.white : color.blue_brand},
                      ]}>
                      {item.label}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <Text style={[eprStyle.formInstructionText, {color: colors.text}]}>
          Fill the form below:
        </Text>
        <View
          style={[
            eprStyle.formMainView,
            {
              backgroundColor: color.lightSkyBlue,
              borderColor: color.shadowGrey,
            },
          ]}>
          <View
            style={[eprStyle.formMainItems, {borderColor: color.shadowGrey}]}>
            <Text style={[eprStyle.formMainItemsText, {color: colors.text}]}>
              Action
            </Text>
            <TextInput
              textAlignVertical="top"
              multiline={true}
              numberOfLines={4}
              maxLength={100}
              placeholder="example"
              placeholderTextColor={color.darkBlue}
              style={[
                eprStyle.multilineInput,
                {paddingVertical: multiLinePadding},
              ]}
              value={action}
              onChangeText={val => setAction(val)}
            />
            <Text style={[eprStyle.countText, {color: colors.text}]}>
              {action.length} / 100
            </Text>
          </View>

          <View
            style={[eprStyle.formMainItems, {borderColor: color.shadowGrey}]}>
            <Text style={[eprStyle.formMainItemsText, {color: colors.text}]}>
              Impact
            </Text>
            <TextInput
              textAlignVertical="top"
              multiline={true}
              maxLength={100}
              numberOfLines={4}
              placeholder="example"
              placeholderTextColor={color.darkBlue}
              style={[
                eprStyle.multilineInput,
                {paddingVertical: multiLinePadding},
              ]}
              value={result}
              onChangeText={val => setResult(val)}
            />
            <Text style={[eprStyle.countText, {color: colors.text}]}>
              {result.length} / 100
            </Text>
          </View>
          <View
            style={[
              eprStyle.formMainItems,
              {borderColor: color.shadowGrey, borderBottomWidth: 0},
            ]}>
            <Text style={[eprStyle.formMainItemsText, {color: colors.text}]}>
              Result
            </Text>
            <TextInput
              textAlignVertical="top"
              multiline={true}
              maxLength={100}
              numberOfLines={4}
              placeholder="example"
              placeholderTextColor={color.darkBlue}
              style={[
                eprStyle.multilineInput,
                {paddingVertical: multiLinePadding},
              ]}
              value={impact}
              onChangeText={val => setImpact(val)}
            />
            <Text style={[eprStyle.countText, {color: colors.text}]}>
              {impact.length} / 100
            </Text>
          </View>
        </View>

        <View style={eprStyle.confirmationBox}>
          <CheckBox
            boxType="square"
            style={{width: 20, height: 20}}
            onCheckColor={color.white}
            onFillColor={color.white}
            value={checked}
            onValueChange={() => setChecked(!checked)}
            tintColors={{true: color.white, false: color.white}}
          />
          <Text style={eprStyle.confirmationText}>
            No CUI for classified information allowed
          </Text>
        </View>
        {checked ? (
          <GradientButton
            text="Generate narratives"
            action={handleGenerateEpr}
          />
        ) : (
          <TouchableOpacity disabled={true} style={eprStyle.disableButton}>
            <Text style={eprStyle.disableButtonText}>Generate narratives</Text>
          </TouchableOpacity>
        )}

        <CancelButton text="Go Back" action={() => navigation.goBack()} />
        <View style={{height: verticalScale(30)}} />
      </ScrollView>
    </View>
  );
};

export default EPR;
