import { useState } from "react";
import styled from "styled-components";
import palette from "../styles/colorPalette";
import { Pressable, SafeAreaView } from 'react-native';

import Input from "../components/Input";
import GoBackBtn from "../components/GoBackBtn";

import Button from "../components/Button";
import { Navigation } from "react-native-navigation";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const [pwHide, setPwHide] = useState(false); // 비밀번호 숨기기

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
                <NoticeText 
                    plusStyle={true}> 
                    로그인에 사용할 {"\n"}아이디와 비밀번호를 입력해주세요. 
                </NoticeText>
                <Input
                    state={id}
                    setState={setId}
                    placeholder="아이디"
                    isPassword={false}
                    marginTop={'15px'}
                />
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
const Footer = styled.View`
    flex: 1;
    width: 91%;
    align-items: center;
`;
const NoticeText = styled.Text`
    font-size: 17px;
    font-family: "IBMPlexSans-Bold";
    color: ${palette.black};
    margin-top: ${(props) => props.plusStyle ? '35px' : '10px'};
`;
export default Register;