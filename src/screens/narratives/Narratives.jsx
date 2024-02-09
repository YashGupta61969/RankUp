import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Touchable,
} from 'react-native';
import React, {useState} from 'react';
import {color} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../../constants/icons';
import {horizontalScale, verticalScale} from '../../constants/dimension';
import {showModal} from '@whitespectre/rn-modal-presenter';
import NarrativeSheet from '../../components/bottomSheets/narrativesSheet/NarrativeSheet';
import {narrativesStyle} from './narrativesStyle';
import CustomCheckBox from '../../components/common/customCheckBox/CustomCheckBox';
import {narrativesRoutes} from '../../constants/routes';
import MergedModal from '../../components/modals/mergedModal/MergedModal';
import {toast} from '../../utils/toast';
import DeleteNarrativesModal from '../../components/modals/deleteNarrativesModal/DeleteNarrativesModal';

const Narratives = ({navigation}) => {
  const [active, setActive] = useState(1);
  const [selectedBullets, setSelectedBullets] = useState([]);
  const [selectedBulletsValue, setSelectedBulletsValue] = useState([]);
  const [allowCheckBox, setAllowCheckBox] = useState(false);
  const [narrativeButtonText, setNarrativeButtonText] = useState('');
  const [open, setOpen] = useState(false);
  const buttonArray = [
    {id: 1, value: 'OPB'},
    {id: 2, value: 'EPB'},
  ];



  const dutyTitleArray = [
    {
      id: 1,
      value:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur beatae doloremque in sint accusamus ea assumenda dolorum corporis amet maiores!',
    },
    {
      id: 2,
      value:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur beatae doloremque in sint accusamus ea assumenda dolorum corporis amet maiores!',
    },
    {
      id: 3,
      value:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur beatae doloremque in sint accusamus ea assumenda dolorum corporis amet maiores!',
    },
    {
      id: 4,
      value:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam modi cumque fugiat ad ratione eveniet, quos impedit, ab aspernatur beatae doloremque in sint accusamus ea assumenda dolorum corporis amet maiores!',
    },
  ];

  // change Tab

  const handleChangeTab = id => {
    setActive(id);
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

  return (
    <View style={narrativesStyle.narrativesMain}>
      <NarrativeSheet
        open={open}
        closeModal={handleCloseModal}
        setAllowCheckBox={setAllowCheckBox}
        setNarrativeButtonText={setNarrativeButtonText}
      />
      <Text style={narrativesStyle.narrativesMainText}>Narratives</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={narrativesStyle.narrativesTopView}>
        <View style={narrativesStyle.OprEprView}>
          {buttonArray.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => handleChangeTab(item.id)}
                key={index}
                style={[
                  narrativesStyle.tabView,
                  {
                    backgroundColor:
                      item.id === active ? color.darkSkyBlue : null,
                  },
                ]}>
                <Text
                  style={[
                    narrativesStyle.tabText,
                    {color: item.id === active ? color.white : color.light},
                  ]}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          onPress={handleOpenTab}
          style={narrativesStyle.dotViewMain}>
          <icons.DotView width={25} height={25} />
        </TouchableOpacity>

        {dutyTitleArray.map((item, index) => {
          return (
            <View
              onPress={() => navigation.navigate(narrativesRoutes.OPB)}
              key={index}
              style={narrativesStyle.dutyTitleWrapper}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={narrativesStyle.dutyTitleHeading}>Duty Title</Text>
                {allowCheckBox ? (
                  <View style={{marginRight: horizontalScale(10)}}>
                    <CustomCheckBox
                      selectedBullets={selectedBullets}
                      index={index}
                      //  checked={selectedBullets?.includes(index)}
                      onChange={() => handleCheckBoxChange(index, item)}
                    />
                  </View>
                ) : null}
              </View>
              <Text style={narrativesStyle.dutyTitleDescription}>
                {item.value}
              </Text>
            </View>
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
