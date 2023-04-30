import React, { useState, useContext } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

export const CustomSwitch = ( { isOn, onChange }: Props ) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    const {theme: {colors}}  = useContext(ThemeContext);


    const toggleSwitch = () => {
        setIsEnabled( !isEnabled );
        onChange( !isEnabled );
    };

  return (
    <Switch
            trackColor={{false: "#D9D9DB", true: "gray"}}
            thumbColor={ (Platform.OS === 'android') ? colors.primary : '' }
            ios_backgroundColor={"#3e3e3e"}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
  )
}
