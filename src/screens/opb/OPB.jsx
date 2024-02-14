import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {opbStyle} from './opbStyle';
import ChildStackHeader from '../../components/navigation/childStackHeader/ChildStackHeader';
import {narrativesRoutes} from '../../constants/routes';
import {color} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {deleteSingleNarrative, getSingleNarrativeDetail} from '../../data/services/EprApi';
import {toast} from '../../utils/toast';
import Loader from '../../components/loader/Loader';
import { deleteNarrativeModalStyle } from '../../components/modals/deleteNarrativesModal/deleteNarrativesModalStyle.';

const OPB = ({route,navigation}) => {
  const [loading, setLoading] = useState(false);
  const [singleData, setSingleData] = useState('');
  const [bulletData, setBulletData] = useState([]);
  const {id} = route.params;

  useEffect(() => {
    handleGetNarrativeDetail();
  }, []);

  const handleGetNarrativeDetail = async () => {
    try {
      setLoading(true);
      const {data} = await getSingleNarrativeDetail(id);
      setSingleData(data);
      setBulletData(data?.bullets);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({type: 'error', text1: error.response.data.detail});
    }
  };



// Delete Narrative

const handleDeleteNarrative = async()=>{
  try {
 const {data}=  await deleteSingleNarrative(id);
 console.log("Data",data)
 if(data){
   navigation.goBack()
 }
  } catch (error) {
    toast({type:"error",text1:error.response.data.detail})
  }
}



  return (
    <View style={opbStyle.opbMain}>
      <ChildStackHeader
        text={narrativesRoutes.OPB}
        textColor={color.lightBlack}
      />
      <Loader loading={loading} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={opbStyle.topOuterView}>
        <View style={opbStyle.topInnerView}>
          <Text style={opbStyle.opbTitleHeading}>{singleData.title}</Text>
          <Text style={opbStyle.opbTitleDescription}>
            {singleData?.api_response}
          </Text>
        </View>

        <View style={opbStyle.bottomView}>
          {bulletData.map((item, index) => {
            return (
              <View key={index} style={opbStyle.bottomViewItem}>
                <View style={opbStyle.dotView} />
                <Text style={opbStyle.bottomViewText}>{item}</Text>
              </View>
            );
          })}
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
            <TouchableOpacity onPress={()=>handleDeleteNarrative(id)} activeOpacity={1} style={opbStyle.deleteButton}>
              <Text style={opbStyle.deleteText}>Delete Narrative</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=>navigation.goBack()} activeOpacity={1} style={opbStyle.goBackButtonView}>
            <Text style={opbStyle.goBackButtonText}>Go back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default OPB;
