import {View, TouchableOpacity, Text, TextInput, Platform} from 'react-native';
import React, {useState} from 'react';
import Modal from "react-native-modal"
import {color} from '../../../constants/colors';
import {icons} from '../../../constants/icons';
import { internetModalStyle } from './internetModalStyle';

 
const InternetModal = ({open, closeModal, dismiss}) => {
  //   handleLogOut
  const paddingVertical = Platform.OS === 'ios' ? 14 : 8;

  return (
    <Modal
    transparent={true}
    animationType="fade"
    isVisible={open}
    onSwipeMove={closeModal}
    style={narrativeSheetStyle.modal}
    onBackdropPress={closeModal}>
      <View
        style={narrativeSheetStyle.modalBackground}>
        <View style={narrativeSheetStyle.innerModal}>
          <View style={narrativeSheetStyle.topRectangleLine}>
            <icons.BottomSheetRectangle/>
          </View>
          <View style={narrativeSheetStyle.profileTextView}>
            <Text style={narrativeSheetStyle.mainText}>
              Narrative options
            </Text>
          </View>

          <View style={narrativeSheetStyle.profileOptions}>
            <TouchableOpacity onPress={handelNarrativeDelete} style={narrativeSheetStyle.profileOptionsItem}>
              <Text style={narrativeSheetStyle.profileOptionsItemText}>
                Delete Narratives
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMergeNarrative} style={narrativeSheetStyle.profileOptionsItem}>
              <Text style={narrativeSheetStyle.profileOptionsItemText}>
                Merge Narratives
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={narrativeSheetStyle.profileOptionsItem}>
              <Text style={narrativeSheetStyle.profileOptionsItemText}>
                Publish Narratives
              </Text>
            </TouchableOpacity>
          </View>

         
        </View>
      </View>
      </Modal>
  );
};

export default InternetModal;
