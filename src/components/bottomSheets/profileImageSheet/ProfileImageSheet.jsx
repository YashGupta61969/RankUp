import {View, Text, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import Modal from 'react-native-modal';
import {profileImageSheetStyle} from './profileImageSheetStyle';
import LinearGradient from 'react-native-linear-gradient';
import { icons } from '../../../constants/icons';
import ImagePicker from 'react-native-image-crop-picker';


const ProfileImageSheet = ({open, closeModal,handleUserImage,uri,setUri}) => {
// const [uri, setUri] = useState("")


// Crop Picker open Gallery

const handleOpenGallery = async () => {
  try {
    const image = await ImagePicker.openPicker({
      mediaType: 'photo',
      cropping: true,
      cropperToolbarTitle: 'Crop Image',
      aspectRatio: [4, 4],
      quality: 1,
    });
    setUri(image.path);
    closeModal()
    handleUserImage(image)
    if (!image.cancelled) {
    } else {
      console.log('Image picker canceled');
    }
  } catch (error) {
    console.log("error",error);
    closeModal()

  }
};



  return (
    <Modal
      transparent={true}
      animationType="fade"
      isVisible={open}
      onSwipeMove={closeModal}
      style={profileImageSheetStyle.modal}
      onBackdropPress={closeModal}>
      <View
        style={profileImageSheetStyle.modalBackground}>
        <View style={profileImageSheetStyle.innerModal}>
          <View style={profileImageSheetStyle.topRectangleLine}>
            <icons.BottomSheetRectangle/>
          </View>
          <View style={profileImageSheetStyle.profileTextView}>
            <Text style={profileImageSheetStyle.mainText}>
              Profile picture edit
            </Text>
          </View>

          <View style={profileImageSheetStyle.profileOptions}>
            <TouchableOpacity onPress={handleOpenGallery} style={profileImageSheetStyle.profileOptionsItem}>
              <Text style={profileImageSheetStyle.profileOptionsItemText}>
                Change Profile Picture
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={profileImageSheetStyle.profileOptionsItem}>
              <Text style={profileImageSheetStyle.profileOptionsItemText}>
                Remove Profile Picture
              </Text>
            </TouchableOpacity>
          </View>

          {/* <View style={profileImageSheetStyle.buttonView}>
            <TouchableOpacity activeOpacity={1} onPress={closeModal}>
              <LinearGradient
                colors={['#F04837', '#FAAA3F']}
                start={{x: 0, y: 1}}
                end={{x: 1.3, y: 0}}
                style={profileImageSheetStyle.dashboardButton}>
                <Text style={profileImageSheetStyle.buttonText}>Continue</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </Modal>
  );
};

export default ProfileImageSheet;
