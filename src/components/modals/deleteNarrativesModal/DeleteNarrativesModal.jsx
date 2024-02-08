import {View, TouchableOpacity, Text, TextInput, Platform} from 'react-native';
import React, {useState} from 'react';
import { deleteNarrativeModalStyle} from './deleteNarrativesModalStyle.';
import {color} from '../../../constants/colors';
import {icons} from '../../../constants/icons';
 
const DeleteNarrativesModal = ({open, closeModal, dismiss}) => {
  //   handleLogOut
  const paddingVertical = Platform.OS === 'ios' ? 14 : 8;

  return (
    <View
      style={[
        deleteNarrativeModalStyle.innerModal,
        {backgroundColor: color.white, borderColor: color.grey},
      ]}>
      <View style={deleteNarrativeModalStyle.deleteModalTop}>
        <Text style={[deleteNarrativeModalStyle.mainText]}>Delete Narrative</Text>
        <TouchableOpacity onPress={() => dismiss()}>
          <icons.crossIcon width={35} height={35} />
        </TouchableOpacity>
      </View>
      <View style={deleteNarrativeModalStyle.deleteModalBottom}>
        <Text style={deleteNarrativeModalStyle.confirmationText}>
          Are you sure you want to delete the selected narratives?
        </Text>
      </View>
      <View style={deleteNarrativeModalStyle.buttonView}>
        <TouchableOpacity
          onPress={() => dismiss()}
          style={deleteNarrativeModalStyle.cancelButton}>
          <Text style={deleteNarrativeModalStyle.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={deleteNarrativeModalStyle.saveButton}>
          <Text style={deleteNarrativeModalStyle.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeleteNarrativesModal;
