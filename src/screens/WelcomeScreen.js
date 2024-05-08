import styled from "styled-components";
import palette from "../styles/colorPalette";
import { SafeAreaView } from "react-native";
import welcomeImg from "../assets/image/img_membershipWelcome.png";
import Button from "../components/Button";
import ReuseText from "../components/ReuseText";

const WelcomeScreen = () => {
    return (
        <Container>
            <WelcomeMessageContainer>
                <WelcomeIcon source={welcomeImg}/>
                <ReuseText
                    text={`회원가입 완료! \n 함께 연습하러 가볼까요?`}
                    type={"title"}
                    style={{textAlign: "center", marginRight: 30}}/>
            </WelcomeMessageContainer>
            <Footer>
                <Button
                    text={"로그인하여 연습하기"}
                    backgroundColor={palette.main}
                    borderColor={"none"}
                    fontColor={palette.white}
                    event={"movePage"}
                    movePage={"login"}/>
            </Footer>
        </Container>
    )
}
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${palette.white};
    display: flex;
    align-items: center;
`;
const WelcomeMessageContainer = styled.View`
    flex: 11;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const WelcomeIcon = styled.Image`
    width: 136px;
    height: 136px;
    margin-bottom: 25px;
`;
const Footer = styled.View`
    flex: 1;
    width: 91%;
    align-items: center;
`;
export default WelcomeScreen;