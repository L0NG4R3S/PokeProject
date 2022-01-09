import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {Text, IconButton, useTheme} from 'react-native-paper';
import {SCREEN_HEIGHT} from '../../constants';
import {uppercaseFirstLetter} from '../../service';
import {GoBackIcon} from '../../assets';

type HeaderProps = {
  item: Object;
  handlePress: () => void;
};

type ItemCardProps = {
  color: string;
};

const ItemCard = styled.View<ItemCardProps>`
  padding: 15px;
  background-color: ${({color}) => color};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: ${SCREEN_HEIGHT * 0.35}px;
`;

const InformationView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PokemonNameText = styled(Text)`
  flex: 0.9;
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  text-align: center;
`;

const HabilityText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

const HabilityView = styled.View`
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  alignself: flex-start;
  padding: 8px 11px;
`;

function Header({item, handlePress}: HeaderProps) {
  const theme = useTheme();

  return (
    <ItemCard color={theme.colors[item.name]}>
      <InformationView>
        <IconButton
          icon={() => <GoBackIcon width={10} height={16} color="white" />}
          size={20}
          onPress={handlePress}
        />
        <PokemonNameText numberOfLines={1}>
          {uppercaseFirstLetter(item.name)}
        </PokemonNameText>
      </InformationView>
      <InformationView>
        {item?.types?.map(item => {
          return (
            <HabilityView key={item?.type?.name}>
              <HabilityText>{item?.type?.name}</HabilityText>
            </HabilityView>
          );
        })}
      </InformationView>
      <Image
        style={{width: 150, height: 150, alignSelf: 'center', top: -15}}
        source={{
          uri: item?.sprites?.other?.home?.front_default,
        }}
      />
    </ItemCard>
  );
}

export default Header;
