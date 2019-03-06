import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { blue } from '../utils/colors';

export default function TextButton ({ textColor, textFontSize, textStyle, children, ...rest }) {
  return (
    <TouchableOpacity {...rest}>
      <Text
        style={[
          {
            color: textColor ? textColor : blue,
            fontSize: textFontSize ? textFontSize : 25,
            textAlign: 'center'
          },
          textStyle || {}
        ]}
      >
        { children }
      </Text>
    </TouchableOpacity>
  );
}