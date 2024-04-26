import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";
import palette from "../styles/colorPalette";
import Button from "../components/Button";
import Input from "../components/Input";
import DuplicateCheck from "../components/Login/DuplicateCheck";

const LoginScreen = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <Container>
      <AppLogo> RingRingRing </AppLogo>
      <Body>
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
        <DuplicateCheck/>
        <Button
          text={"로그인"}
          backgroundColor={palette.main}
          borderColor={"none"}
          fontColor={palette.white}
          movePage={'main'}
        />
        <Button
          text={"아직 계정이 없으신가요?"}
          backgroundColor={palette.white}
          borderColor={palette.main}
          fontColor={palette.main}
          movePage={'register'}
        />
        <IdPwFindText>아이디 ・ 비밀번호 찾기</IdPwFindText>
      </Body>
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
const Body = styled.View`
  width: 83%;
  align-items: center;
`;
const IdPwFindText = styled.Text`
  color: ${palette.main};
  font-size: 17px;
  font-family: "IBMPlexSans-Regular";
  margin-top: 20px;
`;
export default LoginScreen;