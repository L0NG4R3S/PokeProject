import React, {useEffect} from 'react';
import {Image, ImageBackground} from 'react-native';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native-paper';
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
`;

const ImageView = styled.View`
  flex: 1;
  justify-content: center;
`;

const OpacityView = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.6);
`;

const LoadingView = styled.View`
  flex: 0.5;
  justify-content: center;
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
      <ImageBackground
        source={require('../../assets/img/loadingBackground.png')}
        style={{flex: 1}}>
        <OpacityView>
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
            <ActivityIndicator style={{marginTop: 30}} color="gray" size="large" />
          </LoadingView>
        </OpacityView>
      </ImageBackground>
    </Container>
  );
}

export default Loading;
