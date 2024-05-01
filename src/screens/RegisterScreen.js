import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import { registerUser, duplicationEmail } from "../librarys/login-api";

import styled from "styled-components";

import palette from "../styles/colorPalette";
import Input from "../components/Input";
import GoBackBtn from "../components/GoBackBtn";
import Button from "../components/Button";
import ReuseText from "../components/ReuseText";

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const [pwHide, setPwHide] = useState(false);                    // 비밀번호 숨기기
    const [duplicateResult, setDuplicateResult] = useState("");     // 중복 확인
    const [isInputCheck, setIsInputCheck] = useState(false);        // 입력창 빈 곳 없는지 확인

    // 입력 값이 변경될 때마다 실행
    useEffect(() => {
        handleCheck();
    }, [name, email, pwd, pwCheck, duplicateResult]);

    // 입력 값 체크하여 회원가입 버튼 활성화 여부 결정
    const handleCheck = () => {
        if (name !== "" 
            && email !== "" 
            && pwd !== ""  
            && pwCheck !== "" 
            && duplicateResult === "사용가능한 Email입니다."
            && pwd === pwCheck
        ) {
            setIsInputCheck(true);
        } else {
            setIsInputCheck(false);
        }
    }

    // 이메일 중복 확인 api 호출
    const handleDuplicationEmail = async () => {
        try {
            const response = await duplicationEmail(email);
            if (response.message) {
                setDuplicateResult(response.message);
            } else if (response.errorDetails) {
                setDuplicateResult(response.errorDetails);
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data) {
                setDuplicateResult(error.response.data.errorDetails);
            }
        }
    }

    // 회원가입 api 호출
    const handleRegister = async () => {
        if (isInputCheck) {
            try {
                const response = await registerUser(name, email, pwd);
                console.log(response);
            } catch (error) {
                console.error("회원가입 실패 :", error);
            }
        }
    };

    return (
        <Container>
            <Header>
                <GoBackBtn/>
            </Header>
            <Body>
                <ReuseText
                    text={"사용자 정보를 입력해주세요."}
                    type={"content"}
                    style={{marginTop: 10}}/> 
                <Input
                    state={name}
                    setState={setName}
                    placeholder="이름"
                    isPassword={false}
                    marginTop={'15px'}/>
                <ReuseText 
                    text={`로그인에 사용할 \n아이디와 비밀번호를 입력해주세요.`}
                    type={"content"}
                    style={{marginTop: 35}}/>  
                <IdContainer>
                    <Input
                        state={email}
                        setState={setEmail}
                        placeholder="이메일"
                        isPassword={false}
                        marginTop={'15px'}/>
                    <CheckBtn onPress={handleDuplicationEmail}>
                        <BtnText>중복 확인</BtnText>
                    </CheckBtn>
                </IdContainer>
                <DuplicateNotice duplicateCheck={(duplicateResult !== "")}>
                    {duplicateResult}
                </DuplicateNotice>
                <Input
                    state={pwd}
                    setState={setPw}
                    placeholder="비밀번호"
                    isPassword={true}
                    pwHide={pwHide}
                    setPwHide={setPwHide}
                    marginTop={'8px'}/>
                <Input
                    state={pwCheck}
                    setState={setPwCheck}
                    placeholder="비밀번호 확인"
                    isPassword={true}
                    pwHide={pwHide}
                    setPwHide={setPwHide}
                    marginTop={'8px'}/>
            </Body>
            <Footer>    
                <Button
                    text={"회원가입"}
                    backgroundColor={isInputCheck ? palette.main : "#DADADA"}
                    borderColor={"none"}
                    fontColor={palette.white}
                    event={handleRegister}/>
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
const DuplicateNotice = styled.Text`
    display: ${(props) => (props.duplicateCheck) ? "flex" : "none"};
    color: #E54848;
    font-size: 14px;
    font-family: "IBMPlexSans-Regular";
    margin: 5px 0 10px 10px;
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
export default RegisterScreen;