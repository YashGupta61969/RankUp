import React from 'react';
import {Switch} from 'react-native';
import {color} from '../../constants/colors';
import ToggleSwitch from 'toggle-switch-react-native';

const CustomSwitchButton = ({isEnabled, toggleSwitch}) => {
  // value
  return (
      <ToggleSwitch
      isOn={isEnabled}
      onColor={color.switchButton}
      offColor="grey"
      size="small"
      animationSpeed={200}
      onToggle={toggleSwitch}
    />
  );
};

export default CustomSwitchButton;
