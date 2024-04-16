import { SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import GirlImg from "../assets/image/img_mainScreenTop.png";

import BottomMenu from "../components/BottomMenu";
import MainMenu from "../components/main/MainMenu";
import MyPractice from "../components/statistics/MyPractice";
import AllStatitics from "../components/statistics/AllStatistics";

const HomeScreen = () => {
    const name = "홍길동";

    return (
        <Container>
            <SubContainer>
                <Header>
                    <ExampleImg source={GirlImg}/>
                    <IntroductText type={"main"}>{name} 님,{"\n"}안녕하세요 😊</IntroductText>
                    <IntroductText type={"sub"}>오늘도 함께 연습해봐요!</IntroductText>
                </Header>
                <Body>
                    <MainMenu/>
                    <MiddleLine/>
                    <MyPractice/>
                </Body>
            </SubContainer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${palette.white};
    display: flex;
    position: relative;
    overflow-y: scroll;
`;
const SubContainer = styled(ScrollView)`
    flex: 1;
`;
const Header = styled.View`
    /* flex: 4; */
    height: 200px;
    background-color: #FFF7F5;
`;
const Body = styled.View`
    flex: 9;
`;
const ExampleImg = styled.Image`
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 145px;
    height: 159px;
`;
const IntroductText = styled.Text`
    font-size: ${(props) => (props.type === "main") ? "26px" : "22px"};
    font-family: ${(props) => (props.type === "main") ? 
        "IBMPlexSans-Medium" : "IBMPlexSans-Regular"
    };
    margin-top: ${(props) => (props.type === "main") ? "30px" : "15px"};
    margin-left: 23px;
`;
const MiddleLine = styled.View`
    width: 100%;
    height: 17px;
    background-color: #ECECEC;
`;
export default HomeScreen;