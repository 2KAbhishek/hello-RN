import React from 'react';
import {Text, Dimensions, Linking} from 'react-native';

const WindowSize = ({style}) => {
    return (
        <Text
            style={style}
            onPress={() =>
                Linking.openURL(
                    'https://developer.android.com/training/multiscreen/screendensities'
                )
            }>
            P.S - Your screen is {Math.round(Dimensions.get('window').width)}{' '}
            DIP x {Math.round(Dimensions.get('window').height)} DIP
        </Text>
    );
};

export default WindowSize;
