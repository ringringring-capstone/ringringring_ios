import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import { setStorage, getStorage } from "../librarys/storage";

import { loginUser } from "../librarys/login-api";

import palette from "../styles/colorPalette";

import Button from "../components/Button";
import Input from "../components/Input";
import DuplicateCheck from "../components/Login/DuplicateCheck";
import { ToastMessage } from "../components/ToastMessage";

const LoginScreen = () => {
  const Navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [pwd, setPw] = useState("");
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const handleLogin = async () => {
    if (email === "" || pwd === "") {
      ToastMessage("아이디 또는 비밀번호를 작성해주세요.");
    }

    loginUser(email, pwd)
      .then(response => {
        if (response.token) {
          const token = response.token;
          const id = response.id;
          const email = response.email;
          const name = response.name;
          
          setStorage("token", token);
          setStorage("id", id);
          setStorage("email", email);
          setStorage("username", name);

          if (isAutoLogin === true) {
            setStorage("autoLogin", true);
            Navigation.navigate("main");
            ToastMessage("자동 로그인 되었습니다.")
          } else {
            Navigation.navigate("main");
            ToastMessage("로그인 되었습니다.")
          }
        } else {
          ToastMessage(response);
        }
      })
      .catch (error => {
        console.error("에러: ", error);
      })
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await getStorage("token");
      const autoLogin = await getStorage("autoLogin");
      if (token) {
        if (autoLogin === true) {
          Navigation.navigate("main");
        }
      }
    }
    checkLoginStatus();
  }, [Navigation]);

  return (
    <Container>
      <AppLogo> RingRingRing </AppLogo>
      <Body>
        <Input
          state={email}
          setState={setEmail}
          placeholder="아이디"
          isPassword={false}
          marginTop={'50px'}/>
        <Input
          state={pwd}
          setState={setPw}
          placeholder="비밀번호"
          isPassword={true}
          marginTop={'8px'}/>
        <DuplicateCheck isAutoLogin={isAutoLogin} setIsAutoLogin={setIsAutoLogin}/>
        <Button
          text={"로그인"}
          backgroundColor={palette.main}
          borderColor={"none"}
          fontColor={palette.white}
          event={handleLogin}/>
        <Button
          text={"아직 계정이 없으신가요?"}
          backgroundColor={palette.white}
          borderColor={palette.main}
          fontColor={palette.main}
          event={"movePage"}
          movePage={"register"}/>
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