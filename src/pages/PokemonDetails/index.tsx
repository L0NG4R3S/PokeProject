import React from 'react';
import {ActivityIndicator, ScrollView, Image} from 'react-native';
import styled from 'styled-components/native';
import {Text, Title, useTheme} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFetch} from '../../hooks';
import {getPokemonDetails} from '../../sdk';
import {RouteProp} from '@react-navigation/native';
import Header from './Header';
import DetailCard from './DetailCard';
import CharacteristicItem from './CharacteristicItem';
import {formatText} from '../../service';

type StackParamList = {
  PokemonDetails: {item: Object};
};

type PokemonDetailsProps = {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<StackParamList, 'PokemonDetails'>;
};

type ContainerProps = {
  paddingTop?: number;
  paddingBottom?: number;
  color: string;
};

type ColorfullProps = {
  color: string;
};

const Container = styled.View<ContainerProps>`
  flex: 1;
  padding-top: ${({paddingTop}) => paddingTop || 0}px;
  padding-bottom: ${({paddingBottom}) => paddingBottom || 0}px;
  background-color: ${({color}) => color};
`;

const BodyView = styled.View`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: white;
`;

const ColorfullTitle = styled(Title)<ColorfullProps>`
  text-align: left;
  padding: 20px 10px;
  font-size: 20px;
  color: ${({color}) => color};
`;

const DescriptionText = styled(Text)`
  text-align: left;
  padding: 0px 10px;
  font-size: 18px;
`;

function PokemonDetails({navigation, route}: PokemonDetailsProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const item = route?.params?.item;

  const {data, loading, error} = useFetch({
    query: () => getPokemonDetails({url: item?.species?.url}),
  });

  return (
    <Container
      paddingTop={insets.top}
      paddingBottom={insets.bottom}
      color={theme.colors[item.name]}>
      <Header item={item} handlePress={() => navigation.goBack()} />
      <BodyView>
        <ScrollView contentContainerStyle={{padding: 10}}>
          <ColorfullTitle color={theme.colors[item.name]}>
            Description
          </ColorfullTitle>
          {loading ? (
            <ActivityIndicator />
          ) : error ? (
            <DescriptionText>Error loading description</DescriptionText>
          ) : (
            (
              <DescriptionText>
                {formatText(data?.flavor_text_entries[0]?.flavor_text)}
              </DescriptionText>
            ) || null
          )}
          <DetailCard weight={item?.weight} height={item?.height} />
          <ColorfullTitle color={theme.colors[item.name]}>
            Characteristics
          </ColorfullTitle>
          {item?.stats?.map(i => {
            return (
              <CharacteristicItem item={i} color={theme.colors[item.name]} />
            );
          })}
          <Image
            style={{alignSelf: 'center', marginTop: 50}}
            source={require('../../assets/img/pokemon.png')}
          />
        </ScrollView>
      </BodyView>
    </Container>
  );
}

export default PokemonDetails;
