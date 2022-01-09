import React from 'react';
import {Svg, Path} from 'react-native-svg';
import { IconType } from '../../types';

const GoBackIcon = ({width, height, color}: IconType) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 8 14"
      fill="none">
      <Path
        d="M0.499951 7.79999L6.19995 13.4C6.59995 13.8 7.19995 13.8 7.59995 13.4C7.99995 13 7.99995 12.4 7.59995 12L2.69995 6.99999L7.59995 1.99999C7.99995 1.59999 7.99995 0.999987 7.59995 0.599988C7.39995 0.399988 7.19995 0.299988 6.89995 0.299988C6.59995 0.299988 6.39995 0.399988 6.19995 0.599988L0.499951 6.19999C0.0999512 6.69999 0.0999512 7.29999 0.499951 7.79999C0.499951 7.69999 0.499951 7.69999 0.499951 7.79999Z"
        fill={color}
      />
    </Svg>
  );
};

export default GoBackIcon;
