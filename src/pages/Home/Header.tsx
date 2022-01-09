import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import {SCREEN_HEIGHT} from '../../constants';

const ItemCard = styled.View`
  padding: 15px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: ${SCREEN_HEIGHT * 0.2}px;
  justify-content: center
`;

function Header() {
  return (
    <ItemCard>
      <Image
        style={{alignSelf: 'center'}}
        source={require('../../assets/img/pokemon.png')}
      />
    </ItemCard>
  );
}

export default Header;
