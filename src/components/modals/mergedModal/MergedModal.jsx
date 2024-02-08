import {View, TouchableOpacity, Text, TextInput, Platform} from 'react-native';
import React, {useState} from 'react';
import {mergeModalStyle} from './mergedModalStyle';
import {color} from '../../../constants/colors';
import {icons} from '../../../constants/icons';
import LinearGradient from 'react-native-linear-gradient';

const MergedModal = ({open, closeModal, dismiss}) => {
  //   handleLogOut
  const paddingVertical = Platform.OS === 'ios' ? 14 : 8;

  return (
    <View
      style={[
        mergeModalStyle.innerModal,
        {backgroundColor: color.white, borderColor: color.grey},
      ]}>
      <View style={mergeModalStyle.mergedModalTop}>
        <Text style={[mergeModalStyle.mainText]}>Merged Narrative Title</Text>
        <TouchableOpacity onPress={() => dismiss()}>
          <icons.crossIcon width={35} height={35} />
        </TouchableOpacity>
      </View>
      <View style={mergeModalStyle.mergedModalBottom}>
        <Text style={mergeModalStyle.confirmationText}>
          Are you sure you want to merge the selected narratives?
        </Text>
        <Text style={mergeModalStyle.titleText}>Title</Text>
        <TextInput
          placeholder="Title"
          style={[mergeModalStyle.inputBox, {paddingVertical: paddingVertical}]}
        />
      </View>
      <View style={mergeModalStyle.buttonView}>
        <TouchableOpacity
          onPress={() => dismiss()}
          style={mergeModalStyle.cancelButton}>
          <Text style={mergeModalStyle.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={mergeModalStyle.saveButtonView}>
          <LinearGradient
            colors={['#3A86FF', '#1C28AA']}
            start={{x: 0, y: 1}}
            end={{x: 1.3, y: 0}}
            style={mergeModalStyle.saveButton}>
            <Text style={mergeModalStyle.saveButtonText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MergedModal;
