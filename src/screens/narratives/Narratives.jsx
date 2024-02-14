import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Touchable,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {color} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../../constants/icons';
import {horizontalScale, moderateScale, verticalScale} from '../../constants/dimension';
import {showModal} from '@whitespectre/rn-modal-presenter';
import NarrativeSheet from '../../components/bottomSheets/narrativesSheet/NarrativeSheet';
import {narrativesStyle} from './narrativesStyle';
import CustomCheckBox from '../../components/common/customCheckBox/CustomCheckBox';
import {narrativesRoutes} from '../../constants/routes';
import MergedModal from '../../components/modals/mergedModal/MergedModal';
import {toast} from '../../utils/toast';
import DeleteNarrativesModal from '../../components/modals/deleteNarrativesModal/DeleteNarrativesModal';
import { fonts } from '../../constants/fonts';
import { getEprBulletsCategory } from '../../data/services/EprApi';
import Loader from '../../components/loader/Loader';

const Narratives = ({navigation}) => {
  const [selectedBullets, setSelectedBullets] = useState([]);
  const [selectedBulletsValue, setSelectedBulletsValue] = useState([]);
  const [jobPerformance, setJobPerformance] = useState([]);
  const [leadershipData, setLeadershipData] = useState([]);
  const [wholeAirmanData, setWholeAirmanData] = useState([]);
  const [allowCheckBox, setAllowCheckBox] = useState(false);
  const [narrativeButtonText, setNarrativeButtonText] = useState('');
  const [selectedButton, setSelectedButton] = useState(1)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false);
  const flatListRef = useRef(null);


  const buttonArray = [
    {id: 1, value: 'Job Performance'},
    {id: 2, value: 'Whole Airman Concept'},
    {id: 3, value: 'Leadership/Fellowship/Impact'},
    {id: 4, value: 'Merged'},
  ];



  // useEffect(() => {
  //   // handelGetEpr()
  //   handleGetWholeAirmanConcept();
  //   handleGetJobPerformance();
  //   handleGetLeadership();
  // }, []);



  

  // change Tab and handle Animation

  const handleChangeTab = id => {
    setSelectedButton(id);
    const clickedIndex = buttonArray.findIndex(item => item.id === id);

    const targetIndex = Math.max(0, clickedIndex);

    flatListRef.current.scrollToIndex({animated: true, index: targetIndex});
  };

  // Open Narratives Option

  const handleOpenTab = () => {
    setOpen(true);
  };

  // closeModal

  const handleCloseModal = () => {
    setOpen(false);
  };

  // For selecting the box

  const handleCheckBoxChange = (index, item) => {
    const isSelected = selectedBullets.includes(index);
    setSelectedBullets(prevSelected =>
      isSelected
        ? prevSelected.filter(item => item !== index)
        : [...prevSelected, index],
    );
    setSelectedBulletsValue(prevItem =>
      isSelected
        ? prevItem.filter(itemIndex => itemIndex !== index)
        : [...prevItem, item],
    );
  };

  // Display checkbox

  const handleDisableCheckbox = () => {
    setAllowCheckBox(false);
    setNarrativeButtonText('');
  };

  // Merge Selected modal

  const handleMergeSelectedOpen = () => {
    if (selectedBullets && selectedBullets.length) {
      showModal(MergedModal, {});
    } else {
      toast({type: 'error', text1: 'Please Select the Narratives'});
    }
  };


  // Delete Selected Modal

  const handleDeleteNarrativeModal = ()=>{
    if(selectedBullets && selectedBullets.length){
      showModal(DeleteNarrativesModal,{})
    }else{
      toast({type: 'error', text1: 'Please Select the Narratives'});
    }
  }


// Get Data From Api's


// Get whole Airman Concept
const handleGetWholeAirmanConcept = async () => {
  const category = 'whole_airman_concept';
  try {
    setLoading(true);
    const {data} = await getEprBulletsCategory(category);
    setWholeAirmanData(data?.results);
    setLoading(false);
  } catch (error) {
    setLoading(false);
    toast({type: 'error', text1: error.response.data.detail});
  }
};

// Get Job_performance Concept

const handleGetJobPerformance = async () => {
  const category = 'job_performance';
  try {
    const {data} = await getEprBulletsCategory(category);
    setJobPerformance(data?.results);
  } catch (error) {
    toast({type: 'error', text1: error.response.data.detail});
  }
};

// Get Leadership Impact

const handleGetLeadership = async () => {
  const category = 'leadership_fellowship_impact';
  try {
    const {data} = await getEprBulletsCategory(category);
    setLeadershipData(data?.results);
  } catch (error) {
    toast({type: 'error', text1: error.response.data.detail});
  }
};


// Check Condition

    
const iteratableArray =
    selectedButton === 1
      ? jobPerformance
      : selectedButton === 2
      ? wholeAirmanData
      : leadershipData;



  return (
    <View style={narrativesStyle.narrativesMain}>
      <NarrativeSheet
        open={open}
        closeModal={handleCloseModal}
        setAllowCheckBox={setAllowCheckBox}
        setNarrativeButtonText={setNarrativeButtonText}
      />
      <Loader loading={loading}/>

      <Text style={narrativesStyle.narrativesMainText}>Narratives</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={narrativesStyle.narrativesTopView}>
        <View style={narrativesStyle.OprEprView}>
        <FlatList
          ref={flatListRef}
          scrollToOverflowEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: verticalScale(6),
          }}
          scrollEnabled={true}
          horizontal={true}
          data={buttonArray}
          keyExtractor={item => item?.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => handleChangeTab(item.id)}
                style={{
                  borderWidth: 1.5,
                  borderColor: color.darkSkyBlue,
                  paddingHorizontal: horizontalScale(15),
                  paddingVertical: verticalScale(8),
                  marginRight: horizontalScale(4),
                  borderRadius: moderateScale(5),
                  backgroundColor: item.id
                    ? selectedButton === item.id 
                      ? color.darkSkyBlue
                      : color.lightGrey
                    : color.lightGrey,
                }}>
                <Text
                  style={{
                    color: item.id
                      ? selectedButton === item.id
                        ? color.white
                        : color.darkSkyBlue
                      : color.lightGrey,
                    fontFamily: fonts.medium,
                  }}>
                  {item?.value}
                </Text>
              </TouchableOpacity>
            );
          }}></FlatList>
        </View>
        <TouchableOpacity
          onPress={handleOpenTab}
          style={narrativesStyle.dotViewMain}>
          <icons.DotView width={25} height={25} />
        </TouchableOpacity>     


        {iteratableArray.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(narrativesRoutes.OPB,{id:item.id})}
              key={index}
              style={narrativesStyle.dutyTitleWrapper}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={narrativesStyle.dutyTitleHeading}>{item?.title}</Text>
                {allowCheckBox ? (
                  <View style={{marginRight: horizontalScale(10)}}>
                    <CustomCheckBox
                      selectedBullets={selectedBullets}
                      index={index}
                      ShowColor="No"
                      checked={selectedBullets?.includes(index)}
                      onChange={() => handleCheckBoxChange(index, item)}
                    />
                  </View>
                ) : null}
              </View>
              <Text style={narrativesStyle.dutyTitleDescription}>
                {item.api_response}
              </Text>
            </TouchableOpacity>
          );
        })}
        {narrativeButtonText === 'delete' ? (
          <TouchableOpacity onPress={handleDeleteNarrativeModal} style={narrativesStyle.actionDeleteButton}>
            <icons.DeleteWhiteIcon width={20} height={20} />
            <Text style={narrativesStyle.actionButtonText}>
              Delete selected
            </Text>
          </TouchableOpacity>
        ) : narrativeButtonText === 'merge' ? (
          <TouchableOpacity
            onPress={handleMergeSelectedOpen}
            style={narrativesStyle.actionMergeButton}>
            <icons.MergedIcon width={20} height={20} />
            <Text style={narrativesStyle.actionButtonText}>Merge Selected</Text>
          </TouchableOpacity>
        ) : null}

        {narrativeButtonText === 'delete' || narrativeButtonText === 'merge' ? (
          <TouchableOpacity
            onPress={handleDisableCheckbox}
            style={narrativesStyle.cancelButton}>
            <Text style={narrativesStyle.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        ) : null}

        <View style={{height: verticalScale(30)}} />
      </ScrollView>
      <View style={narrativesStyle.narrativesBottomView}>
        <LinearGradient
          colors={['#3A86FF', '#1C28AA']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}>
          <TouchableOpacity style={narrativesStyle.createNarrativeButtonstyle}>
            <Text style={narrativesStyle.narrativeButtonText}>
              Create new Narrative
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={narrativesStyle.OPBEPBbuttonView}>
          <TouchableOpacity activeOpacity={1} style={narrativesStyle.OPBButton}>
            <icons.AddEPB width={25} height={25} />
            <Text style={narrativesStyle.buttonText}>OPB</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={narrativesStyle.OPBButton}>
            <icons.AddEPB width={25} height={25} />
            <Text style={narrativesStyle.buttonText}>EPB</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Narratives;
