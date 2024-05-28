import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { 
    registerUser, 
    duplicationEmail, 
    emailCertified,
    emailEnterAuth
} from "../librarys/login-api";

import styled from "styled-components";

import palette from "../styles/colorPalette";
import Input from "../components/Input";
import GoBackBtn from "../components/GoBackBtn";
import Button from "../components/Button";
import ReuseText from "../components/ReuseText";
import { ToastMessage } from "../components/ToastMessage";

const RegisterScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    const [emailCode, setEmailCode] = useState("");
    const [pwHide, setPwHide] = useState(false);                            // 비밀번호 숨기기
    const [duplicateResult, setDuplicateResult] = useState("");             // 이메일 중복 확인
    const [authenticationResult, setAuthenticationResult] = useState("");   // 아매알 안중 확인
    const [isInputCheck, setIsInputCheck] = useState(false);                // 입력창 빈 곳 없는지 확인

    // 입력 값이 변경될 때마다 실행
    useEffect(() => {
        handleCheck();
    }, [name, email, pwd, pwCheck]);

    // 입력 값 체크하여 회원가입 버튼 활성화 여부 결정
    const handleCheck = () => {
        if (name !== "" 
            && email !== "" 
            && pwd !== ""  
            && pwCheck !== "" 
            && duplicateResult === "사용가능한 Email입니다."
            && authenticationResult === "메일 인증 성공"
            && pwd === pwCheck
        ) {
            setIsInputCheck(true);
        } else {
            setIsInputCheck(false);
        }
    }

    const handleEmailCheck = () => {
        const regux = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (regux.test(email)) {
            handleDuplicationEmail();
            if (duplicateResult === "사용가능한 Email입니다.") {
                handleCertifiedEmail();
            }
        } else {
            setDuplicateResult("이메일 형식에 맞춰 작성해주세요.");
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

    // 이메일 인증번호 받기 api 호출
    const handleCertifiedEmail = async () => {
        try {
            const response = await emailCertified(email);
            console.log(response);
            setAuthenticationResult(response);
        } catch (error) {
            console.error(error);
        }
    }

    // 이메일 인증 확인 api 호출
    const handleEnterAuth = async () => {
        try {
            const response = await emailEnterAuth(email, emailCode);
            console.log(response);
            setAuthenticationResult(response);
        } catch (error) {
            console.error(error);
        }
    }

    // 회원가입 api 호출
    const handleRegister = async () => {
        if (isInputCheck) {
            try {
                const response = await registerUser(name, email, pwd);
                console.log(response);
                if (response === "회원가입 완료") {
                    ToastMessage("회원가입 되었습니다.");
                    navigation.navigate("welcome");
                }
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
                    marginTop={"15px"}/>
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
                        marginTop={"15px"}/>
                    <CheckBtn onPress={handleEmailCheck}>
                        <BtnText>인증번호 받기</BtnText>
                    </CheckBtn>
                </IdContainer>
                <EmailNotice emailCheck={(duplicateResult !== "")}>
                    {duplicateResult}
                </EmailNotice>
                <Input
                    state={emailCode}
                    setState={setEmailCode}
                    placeholder="6자리 인증번호 입력"
                    isPassword={false}
                    marginTop={"8px"}/>
                <EmailNotice emailCheck={(authenticationResult !== "")}>
                    {authenticationResult}
                </EmailNotice>
                <Button
                    text={"인증하기"}
                    backgroundColor={palette.white}
                    borderColor={palette.sub}
                    fontColor={palette.sub}
                    event={handleEnterAuth}/>
                <Input
                    state={pwd}
                    setState={setPw}
                    placeholder={"비밀번호 (영문, 숫자, 특수문자 8자리)"}
                    isPassword={true}
                    pwHide={pwHide}
                    setPwHide={setPwHide}
                    marginTop={"15px"}/>
                <Input
                    state={pwCheck}
                    setState={setPwCheck}
                    placeholder={"비밀번호 확인"}
                    isPassword={true}
                    pwHide={pwHide}
                    setPwHide={setPwHide}
                    marginTop={"8px"}/>
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
    width: 70%;
    align-items: center;
`;
const CheckBtn = styled.Pressable`
    width: 40%;
    height: 44px;
    margin: 15px 0 0 7px;
    margin-top: 15px;
    border: 1px solid ${palette.sub};
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const EmailNotice = styled.Text`
    display: ${(props) => (props.emailCheck) ? "flex" : "none"};
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