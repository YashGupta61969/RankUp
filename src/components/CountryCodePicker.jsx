import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CountryPicker} from 'react-native-country-codes-picker';
import {fonts} from '../constants/fonts';
import {color} from '../constants/colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { sizes } from '../constants/fontSize';

const CountryCodePicker = ({countryCode,setCountryCode}) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{
          width: '100%',
          height: 49,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth:1,
          borderColor:color.grey
        }}>
        <Text
          style={{
            color: 'black',
            fontFamily:fonts.medium,
            fontSize:RFValue(sizes.p4,667)
          }}>
          {countryCode}
        </Text>
      </TouchableOpacity>

      {/* // For showing picker just put show state to show prop */}
      <CountryPicker
        show={show}
        style={{
          modal: {
            height: 350,
          },

          countryName: {
            fontFamily: fonts.medium,
            color: color.black,
          },
          dialCode: {
            fontFamily: fonts.medium,
            color: color.black,
          },
        }}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
        onBackdropPress={val=>{
            setShow(false)
        }}
      />
    </View>
  );
};

export default CountryCodePicker;
