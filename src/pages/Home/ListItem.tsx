import React from 'react';
import {Image, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {Text, useTheme} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFetch} from '../../hooks';
import {getPokemonDetails} from '../../sdk';
import {uppercaseFirstLetter} from '../../service'

type ListItemProps = {
  navigation: StackNavigationProp<any, any>;
  item: any;
};

type ItemCardProps = {
  color: string;
};

const ItemCard = styled.TouchableOpacity<ItemCardProps>`
  flex: 1;
  margin: 5px;
  padding: 15px;
  background-color: ${({color}) => color};
  border-radius: 20px;
  minHeight: 150px
`;

const CardView = styled.View`
  flex: 1;
  flex-direction: row;
`;

const InformationView = styled.View`
  flex: 1;
`;

const PokemonNameText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: left;
`;

const HabilityText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

const HabilityView = styled.View`
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  alignself: flex-start;
  padding: 5px 8px;
`;

function ListItem({navigation, item}: ListItemProps) {
  const theme = useTheme();

  const {data, loading, error} = useFetch({
    query: () => getPokemonDetails({url: item?.url}),
  });

  return (
    <ItemCard color={theme.colors[item.name]} onPress={()=>navigation.navigate('PokemonDetails', {item: data})}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <>
          <PokemonNameText numberOfLines={1}>{uppercaseFirstLetter(item.name)}</PokemonNameText>
          <CardView>
            <InformationView>
              {data?.types?.map(item => {
                return (
                  <HabilityView key={item?.type?.name}>
                    <HabilityText>{item?.type?.name}</HabilityText>
                  </HabilityView>
                );
              })}
            </InformationView>
            <InformationView>
              <Image
                style={{width: 90, height: 90}}
                source={{
                  uri: data?.sprites?.other?.home?.front_default,
                }}
              />
            </InformationView>
          </CardView>
        </>
      )}
    </ItemCard>
  );
}

export default ListItem;
