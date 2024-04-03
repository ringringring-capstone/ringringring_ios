import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components';
import palette from '../styles/colorPalette';
import Button from '../components/Button';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onChangeId = (inputText) => {
    setId(inputText);
  }
  const onChangePw = (inputText) => {
    setPw(inputText);
  }

  return (
    <Container>
      <AppLogo> RingRingRing Logo </AppLogo>
      <Input
        id='id'
        onChangeText={onChangeId}
        placeholder='아이디'
        value={id}
      />
      <Input
        id='pw'
        onChangeText={onChangePw}
        placeholder='비밀번호'
        value={pw}
      />
      <Button
        text={'로그인'}
        type={'main'}
      />
      <Button
        text={'아직 계정이 없으신가요?'}
        type={'sub'}
      />
      <IdPwSearch>아이디 ・ 비밀번호 찾기</IdPwSearch>
    </Container>
  );
}
const Container = styled.View`
  background-color: ${palette.white};
  align-items: center;
`;
const AppLogo = styled.Text`
  margin-top: 110px;
  font-size: 24px;
`;
const Input = styled.TextInput`
  width: 325px;
  height: 44px;
  border-radius: 20px;
  border: 1px solid #F0F0F0;
  background-color: ${palette.white};
  padding: 3px 15px;
  margin-top: ${(props) => (props.id === 'id') ? '50px' : '8px'};
`;
const IdPwSearch = styled.Text`
  color: ${palette.main};
  font-size: 15px;
  margin-top: 20px;
`;
export default Login;