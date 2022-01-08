import React, {useEffect} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
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

const ImageView = styled.View`
  flex: 1;
  justify-content: center;
`;

const LoadingView = styled.View`
  flex: 0.5;
  justify-content: center;
`;

const LoadingText = styled(Text)`
  align-self: center;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
`;

function Loading({navigation}: Props) {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <Container paddingTop={insets.top} paddingBottom={insets.bottom}>
      <ImageView>
        <Image
          style={{alignSelf: 'center'}}
          source={require('../../assets/img/pokemon.png')}
        />
      </ImageView>
      <LoadingView>
        <Image
          style={{alignSelf: 'center', width: 95, height: 95}}
          source={require('../../assets/img/pokebola.png')}
        />
        <LoadingText>Loading...</LoadingText>
      </LoadingView>
    </Container>
  );
}

export default Loading;
