import { useState } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import HomeSelect from "../assets/icon/bottom/ic_home_Select.png";
import HomeNotSelect from "../assets/icon/bottom/ic_home_NotSelect.png";
import checklistSelect from "../assets/icon/bottom/ic_checklist_Select.png";
import checklistNotSelect from "../assets/icon/bottom/ic_checklist_NotSelect.png";
import mypageSelect from "../assets/icon/bottom/ic_mypage_Select.png";
import mypageNotSelect from "../assets/icon/bottom/ic_mypage_NotSelect.png";

const BottomMenu = () => {
    const navigation = useNavigation();
    const [menu, setMenu] = useState("home");

    const movePage = (page) => {
        setMenu(page);
        navigation.navigate(page);
    }

    return (
        <Container>
            <IconContainer 
                icon={"checklist"}
                onPress={() => movePage("checklist")}>
                <IconImg 
                    source={(menu === 'checklist') ? checklistSelect : checklistNotSelect}/>
                <IconTitle>체크리스트</IconTitle>
            </IconContainer>
            <HomeContainer 
                icon={"home"}
                onPress={() => movePage("home")}>
                <IconImg
                    source={(menu === "home") ? HomeSelect : HomeNotSelect}/>
                <IconTitle 
                    home={true}
                    select={menu === "home"}
                >홈</IconTitle>
            </HomeContainer>
            <IconContainer 
                icon={"mypage"}
                onPress={() => movePage("mypage")}>
                <IconImg 
                    source={(menu === "mypage") ? mypageSelect : mypageNotSelect}/>
                <IconTitle>마이페이지</IconTitle>
            </IconContainer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    width: 100%;
    height: 90px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    left: 0;
    bottom: 0;
    background-color: ${palette.white};
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.5;
    shadow-offset: 0px 5px;
`;
const HomeContainer = styled.Pressable`
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 69px;
    bottom: 20px;
    margin-bottom: 5px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.5;
    shadow-offset: 0px 0px;
    border-radius: 50px;
    background-color: ${palette.main};
`;
const IconContainer = styled.Pressable`
    margin-top: 25px;
    left: ${(props) => ((props.icon === "mypage") ? "60px" : "none")};
    right: ${(props) => ((props.icon === "checklist") ? "60px" : "none")};
    align-items: center;
`;
const IconImg = styled.Image`
    width: 30px;
    height: 30px;
`;
const IconTitle = styled.Text`
    position: ${(props) => (props.home ? 'absolute' : 'relative')};
    top: ${(props) => (props.home ? '75px' : '0px')};
    color: ${(props) => (
        props.home ? (props.select ?
             `${palette.main}` : `${palette.black}`) : `${palette.black}`)};
    font-size: 11px;
    font-family: "IBMPlexSans-Bold";
    margin-top: 3px;
`;
export default BottomMenu;