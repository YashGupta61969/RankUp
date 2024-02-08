import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import Modal from "react-native-modal"
import { color } from '../../constants/colors';
import { moderateScale } from '../../constants/dimension';

const Loader = ({loading}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={loading} style={{width:"100%",margin:0}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color={color.white} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    // height:"10%",
    width:"100%",
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:moderateScale(5),
    alignSelf:"center"
  },
});

export default Loader;
