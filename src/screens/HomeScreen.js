import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { getStorage } from "../librarys/storage";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import GirlImg from "../assets/image/img_mainScreenTop.png";

import BottomMenu from "../components/BottomMenu";
import MainMenu from "../components/main/MainMenu";
import MyPractice from "../components/statistics/MyPractice";
import AllStatitics from "../components/statistics/AllStatistics";
import ReuseText from "../components/ReuseText";

const HomeScreen = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        const getName = async () => {
            const storageName = await getStorage("username");
            setName(storageName);
        };
        getName();
    }, []);

    return (
        <Container>
            <SubContainer>
                <Header>
                    <ExampleImg source={GirlImg}/>
                    <ReuseText
                        text={`${name} 님, \n안녕하세요 😊`}
                        type={"more"}
                        color={palette.black}
                        fontsize={"26px"}
                        fontfamily={"IBMPlexSans-Medium"}
                        style={{marginTop: 30, marginLeft: 23}}/>
                    <ReuseText
                        text={"오늘도 함께 연습해봐요!"}
                        type={"more"}
                        color={palette.black}
                        fontsize={"22px"}
                        fontfamily={"IBMPlexSans-Regular"}
                        style={{marginTop: 15, marginLeft: 23}}/>
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
const MiddleLine = styled.View`
    width: 100%;
    height: 17px;
    background-color: #ECECEC;
`;
export default HomeScreen;