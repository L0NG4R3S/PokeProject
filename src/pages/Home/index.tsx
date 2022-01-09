import React from 'react';
import {ActivityIndicator, ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFetch} from '../../hooks';
import {getPokemons} from '../../sdk';
import ListItem from './ListItem';
import Header from './Header';

type HomeProps = {
  navigation: StackNavigationProp<any, any>;
};

type ContainerProps = {
  paddingTop?: number;
  paddingBottom?: number;
};

const Container = styled.View<ContainerProps>`
  flex: 1;
  padding-top: ${({paddingTop}) => paddingTop || 0}px;
  padding-bottom: ${({paddingBottom}) => paddingBottom || 0}px;
`;

const HomeText = styled(Text)`
  text-align: center;
  padding: 10px;
  font-size: 18px;
`;

const PokemonList = styled.FlatList`
  flex: 1;
  border-radius: 10px;
`;

const ListWrapper = styled.View`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.4);
`;

function Home({navigation}: HomeProps) {
  const insets = useSafeAreaInsets();

  const {data, loading} = useFetch({
    query: () => getPokemons(),
  });

  return (
    <Container paddingTop={insets.top} paddingBottom={insets.bottom}>
      <ImageBackground
        source={require('../../assets/img/paisagem.jpeg')}
        style={{flex: 1}}>
        <ListWrapper>
          <Header />
          <HomeText>Wich Pokémon would you choose?</HomeText>
        </ListWrapper>
        {loading ? (
          <ActivityIndicator color="white" size="large" />
        ) : (
          <PokemonList
            key={2}
            contentContainerStyle={{
              borderRadius: 20,
              overflow: 'hidden',
              paddingTop: 5,
            }}
            data={data?.results}
            numColumns={2}
            renderItem={i => (
              <ListItem navigation={navigation} item={i?.item} />
            )}
            keyExtractor={item => item?.name}
          />
        )}
      </ImageBackground>
    </Container>
  );
}

export default Home;
