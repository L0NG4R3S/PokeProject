import React from 'react';
import styled from 'styled-components/native';
import {Text, useTheme} from 'react-native-paper';
import {HeightIcon, WeightIcon} from '../../assets';

type DetailCardProps = {
  height: any;
  weight: any;
};

type ItemCardProps = {
  showBorder: boolean;
};

const Card = styled.View`
  flex-direction: row;
  margin: 30px 0px;
`;

const ItemCard = styled.View<ItemCardProps>`
  flex: 1;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  border-left-width: ${({showBorder}) => showBorder ? 1 : 0}px;
  border-color: ${({ theme }) => theme.colors.gray_light}
`;

const TextWithIcon = styled.View`
  flex-direction: row;
`;

const NumberText = styled(Text)`
  font-size: 18px;
  text-align: center;
  margin-left: 5px;
`;

const DescriptionText = styled(Text)`
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
  color: gray
`;

function DetailCard({height, weight}: DetailCardProps) {
  return (
    <Card>
      <ItemCard showBorder={false}>
        <TextWithIcon>
          <WeightIcon width={20} height={25} color="black" />
          <NumberText>{`${weight} kg`}</NumberText>
        </TextWithIcon>
        <DescriptionText>Weight</DescriptionText>
      </ItemCard>
      <ItemCard showBorder={true}>
        <TextWithIcon>
          <HeightIcon width={15} height={20} color="black" />
          <NumberText>{`${height} m`}</NumberText>
        </TextWithIcon>
        <DescriptionText>Height</DescriptionText>
      </ItemCard>
    </Card>
  );
}

export default DetailCard;
