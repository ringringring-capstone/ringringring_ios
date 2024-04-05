import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import Logout from "../assets/icon/mypage/ic_logout.png";
import Logoutbutton from "../assets/icon/ic_backBtn.png";
import MenuTitle from "../components/MenuTitle";

const MyPage = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <MenuTitle text={'MY페이지'}/>
            <Body onPress={() => navigation.navigate("login")}>
                <LogoutIcon source={Logout}/>
                <LogoutText>로그아웃</LogoutText>
                <LogoutBtn source={Logoutbutton}/>
            </Body>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
`;
const Body = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 23px;
    padding-left: 28px;
`;
const LogoutIcon = styled.Image`
    width: 24px;
    height: 30px;
`;
const LogoutText = styled.Text`
    font-size: 18px;
    font-family: "IBMPlexSans-Regular";
    margin-left: 10px;
`;
const LogoutBtn = styled.Image`
    position: relative;
    width: 8px;
    height: 15px;
    left: 230px;
    transform: rotate(180deg);
`;
export default MyPage;