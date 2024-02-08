import {View, Text, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import { icons } from '../../../constants/icons';
import ImagePicker from 'react-native-image-crop-picker';
import { narrativeSheetStyle } from './narrativeSheetStyle';


const NarrativeSheet = ({open, closeModal,allowCheckBox,setAllowCheckBox,setNarrativeButtonText}) => {


// Crop Picker open Gallery

const handelNarrativeDelete = ()=>{
  closeModal()
  setAllowCheckBox(true)
  setNarrativeButtonText("delete")
}


// merge Narrative

const handleMergeNarrative = ()=>{
  closeModal()
  setAllowCheckBox(true)
  setNarrativeButtonText("merge")
}


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

          {/* <View style={narrativeSheetStyle.buttonView}>
            <TouchableOpacity activeOpacity={1} onPress={closeModal}>
              <LinearGradient
                colors={['#F04837', '#FAAA3F']}
                start={{x: 0, y: 1}}
                end={{x: 1.3, y: 0}}
                style={narrativeSheetStyle.dashboardButton}>
                <Text style={narrativeSheetStyle.buttonText}>Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
      </Modal>
  );
};

export default NarrativeSheet;
