import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {opbStyle} from './opbStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {narrativesRoutes} from '../../constants/routes';
import {color} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

const OPB = () => {
  return (
    <View style={opbStyle.opbMain}>
      <ChildStackHeader
        text={narrativesRoutes.OPB}
        textColor={color.lightBlack}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={opbStyle.topOuterView}>
        <View style={opbStyle.topInnerView}>
          <Text style={opbStyle.opbTitleHeading}>Duty Title</Text>
          <Text style={opbStyle.opbTitleDescription}>
            Ut enim ad minim veniam, quis nostrud exeation ullamco labois nisi
            ut aliquip ex ea comodo con Ut enm ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut
            enim ad minim veniam, quis nostrud exeation ullamco labois nisi ut
            aliquip ex ea comodo con Ut enm ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut
            enim ad minim veniam, quis nostrud exeation ullamco labois nisi ut
            aliquip ex ea comodo con Ut enm ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut
            enim ad minim veniam, quis nostrud exeation ullamco labois nisi ut
            aliquip ex ea comodo con Ut enm ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut
            enim ad minim veniam, quis nostrud exeation ullamco labois nisi ut
            aliquip ex ea comodo con Ut enm ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo con
          </Text>
        </View>

        <View style={opbStyle.bottomView}>
          <View style={opbStyle.bottomViewItem}>
            <View style={opbStyle.dotView} />
            <Text style={opbStyle.bottomViewText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{' '}
            </Text>
          </View>
          <View style={[opbStyle.bottomViewItem, {borderBottomWidth: 0}]}>
            <View style={opbStyle.dotView} />
            <Text style={opbStyle.bottomViewText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{' '}
            </Text>
          </View>
        </View>

        <View style={opbStyle.buttonView}>
          <View style={opbStyle.actionButtonGroup}>
            <TouchableOpacity
              activeOpacity={1}
              style={opbStyle.forumButtonView}>
              <LinearGradient
                colors={['#3A86FF', '#1C28AA']}
                start={{x: 0, y: 1}}
                end={{x: 1.3, y: 0}}
                style={opbStyle.forumButton}>
                <Text style={opbStyle.buttonText}>Publish To Forum</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={opbStyle.deleteButton}>
              <Text style={opbStyle.deleteText}>Delete Narrative</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={1} style={opbStyle.goBackButtonView}>
            <Text style={opbStyle.goBackButtonText}>Go back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OPB;
