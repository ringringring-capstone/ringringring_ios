import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable, SafeAreaView } from 'react-native';
import styled from "styled-components";
import palette from "../styles/colorPalette";

import Input from "../components/Input";
import GoBackBtn from "../components/GoBackBtn";
import Button from "../components/Button";

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const [pwHide, setPwHide] = useState(false); // 비밀번호 숨기기
    // const NoticeText = ["사용 가능한 이메일입니다.", "이미 존재하는 이메일입니다."];

    return (
        <Container>
            <Header>
                <GoBackBtn/>
            </Header>
            <Body>
                <NoticeText> 사용자 정보를 입력해주세요. </NoticeText>
                <Input
                    state={name}
                    setState={setName}
                    placeholder="이름"
                    isPassword={false}
                    marginTop={'15px'}
                />
                <NoticeText plusStyle={true}> 
                    로그인에 사용할 {"\n"}아이디와 비밀번호를 입력해주세요. 
                </NoticeText>
                <IdContainer>
                    <Input
                        state={id}
                        setState={setId}
                        placeholder="이메일"
                        isPassword={false}
                        marginTop={'15px'}
                    />
                    <CheckBtn>
                        <BtnText>중복 확인</BtnText>
                    </CheckBtn>
                </IdContainer>
                <Input
                    state={pw}
                    setState={setPw}
                    placeholder="비밀번호"
                    isPassword={true}
                    pwHide={pwHide}
                    setPwHide={setPwHide}
                    marginTop={'8px'}
                />
                <Input
                    state={pwCheck}
                    setState={setPwCheck}
                    placeholder="비밀번호 확인"
                    isPassword={true}
                    pwHide={pwHide}
                    setPwHide={setPwHide}
                    marginTop={'8px'}
                />
            </Body>
            <Footer>    
                <Button
                    text={'회원가입'}
                    type={'main'}
                    movePage={'login'}
                />
            </Footer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${palette.white};
    display: flex;
    align-items: center;
`;
const Header = styled.View`
    flex: 1;
    width: 100%;
    align-items: left;
    justify-content: center;
    padding-left: 28px;
`;
const Body = styled.View`
    flex: 10;
    width: 87%;
`;
const IdContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 75%;
    align-items: center;
`;
const CheckBtn = styled.Pressable`
    width: 30%;
    height: 44px;
    margin: 15px 0 0 7px;
    margin-top: 15px;
    border: 1px solid ${palette.sub};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BtnText = styled.Text`
    font-size: 15px;
    font-family: "IBMPlexSans-Bold";
    color: ${palette.sub};
`;
const Footer = styled.View`
    flex: 1;
    width: 91%;
    align-items: center;
`;
const NoticeText = styled.Text`
    font-size: 18px;
    font-family: "IBMPlexSans-Bold";
    color: ${palette.black};
    margin-top: ${(props) => props.plusStyle ? '35px' : '10px'};
`;
export default RegisterScreen;