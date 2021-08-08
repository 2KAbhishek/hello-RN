import React, {useState} from 'react';
import {Text} from 'react-native';

/**
 * Wave component, renders a randomly selected wave.
 * Changes on click.
 * @param {*} {style}
 * @return {*}
 */
const Wave = ({style}) => {
    const [wave, setWave] = useState(0);
    const onPress = () => {
        setWave(Math.ceil(Math.random() * 5) + 1);
    };

    const waves = ['👋', '👋🏽', '👋🏾', '👋🏿', '👋🏻', '👋🏼', '🌊'];

    return (
        <Text onPress={onPress} style={style}>
            Hi{waves[wave]}
        </Text>
    );
};

export default Wave;
