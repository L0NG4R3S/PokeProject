import React from 'react';
import styled from 'styled-components/native';
import {Text, ProgressBar, useTheme} from 'react-native-paper';
import {uppercaseFirstLetter} from '../../service';

type CharacteristicItemProps = {
  item: Object;
  color: string;
};

type ItemCardProps = {
  showBorder: boolean;
};

type CharacTextProps = {
  textAlign: string;
};

const Card = styled.View`
  flex-direction: row;
  margin: 10px;
`;

const CharacText = styled(Text)<CharacTextProps>`
  flex: 1;
  font-size: 18px;
  text-align: ${({textAlign}) => textAlign};
`;

const ProgressBarView = styled.View`
  flex: 1;
`;

function CharacteristicItem({item, color}: CharacteristicItemProps) {
  return (
    <Card>
      <CharacText numberOfLines={1} textAlign="left">
        {uppercaseFirstLetter(item?.stat?.name)}
      </CharacText>
      <CharacText numberOfLines={1} textAlign="center">
        {item?.base_stat}
      </CharacText>
      <ProgressBarView>
        <ProgressBar progress={0.5} color={color} />
      </ProgressBarView>
    </Card>
  );
}

export default CharacteristicItem;
