import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFetch} from '../../hooks';
import {getPokemons} from '../../sdk';
import ListItem from './ListItem';

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
  text-align: left;
  padding: 20px 10px;
  font-size: 24px;
  font-weight: bold;
`;

const PokemonList = styled.FlatList`
  flex: 1;
  border-radius: 10px;
  background-color: '#afccfa';
`;

function Home({navigation}: HomeProps) {
  const insets = useSafeAreaInsets();

  const {data, loading, error} = useFetch({
    query: () => getPokemons(),
  });

  useEffect(() => {
    console.log('DATA', data?.results);
  }, [data, loading, error]);

  return (
    <Container paddingTop={insets.top} paddingBottom={insets.bottom}>
      <HomeText>Qual pokémon você escolheria?</HomeText>
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
        renderItem={i => <ListItem navigation={navigation} item={i?.item} />}
        keyExtractor={item => item?.name}
      />
      )}
    </Container>
  );
}

export default Home;
