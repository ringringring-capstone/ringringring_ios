import { SafeAreaView } from "react-native";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import HomeSelect from "../assets/icon/bottom/ic_home_Select.png";
import checklistNotSelect from "../assets/icon/bottom/ic_checkList_NotSelect.png";
import mypageNotSelect from "../assets/icon/bottom/ic_mypage_NotSelect.png";

const BottomMenu = () => {
    return (
        <Container>
            <IconContainer icon={"checklist"}>
                <IconImg    
                    source={checklistNotSelect}/>
                <IconTitle>체크리스트</IconTitle>
            </IconContainer>
            <HomeContainer icon={"home"}>
                <IconImg source={HomeSelect}/>
                <IconTitle home={true}>홈</IconTitle>
            </HomeContainer>
            <IconContainer icon={"mypage"}>
                <IconImg source={mypageNotSelect}/>
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
    bottom: 40px;
    margin-bottom: 5px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.5;
    shadow-offset: 0px 0px;
    border-radius: 50px;
    background-color: ${palette.main};
`;
const IconContainer = styled.Pressable`
    margin-bottom: 10px;
    left: ${(props) => ((props.icon === "mypage") ? "50px" : "none")};
    right: ${(props) => ((props.icon === "checklist") ? "50px" : "none")};
    align-items: center;
`;
const IconImg = styled.Image`
    width: 30px;
    height: 30px;
`;
const IconTitle = styled.Text`
    position: ${(props) => (props.home ? 'absolute' : 'relative')};
    top: ${(props) => (props.home ? '77px' : '0px')};
    color: ${(props) => (props.home ? `${palette.main}` : `${palette.black}`)};;
    font-size: 11px;
    font-family: "IBMPlexSans-Bold";
    margin-top: 3px;
`;
export default BottomMenu;