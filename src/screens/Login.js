import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import palette from '../styles/colorPalette';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <Container>
      <AppLogo> RingRingRing </AppLogo>
      <Input
        state={id}
        setState={setId}
        placeholder="아이디"
        isPassword={false}
        marginTop={'50px'}
      />
      <Input
        state={pw}
        setState={setPw}
        placeholder="비밀번호"
        isPassword={true}
        marginTop={'8px'}
      />
      <Button
        text={"로그인"}
        type={"main"}
      />
      <Button
        text={"아직 계정이 없으신가요?"}
        type={"sub"}
        movePage={'register'}
      />
      <IdPwSearch>아이디 ・ 비밀번호 찾기</IdPwSearch>
    </Container>
  );
}
const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${palette.white};
  align-items: center;
`;
const AppLogo = styled.Text`
  margin-top: 38px;
  font-size: 24px;
  font-family: "IBMPlexSans-Bold";
`;
const IdPwSearch = styled.Text`
  color: ${palette.main};
  font-size: 15px;
  font-family: "IBMPlexSans-Regular";
  margin-top: 20px;
`;
export default Login;