import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styled from "styled-components";
import palette from "../styles/colorPalette";

import Logout from "../assets/icon/mypage/ic_logout.png";
import ConverHistory from "../assets/icon/mypage/ic_converHistory.png";
import BackBtn from "../assets/icon/ic_backBtn.png";
import ReuseText from "../components/ReuseText";

const MyPage = () => {
    const navigation = useNavigation();
    const category = [
        {
            title: "로그아웃",
            type: "Logout",
            icon: Logout
        },
        {
            title : "대화기록",
            type: "ConverHistory",
            icon: ConverHistory
        }
    ];

    const removeStorage = async (key) => {
        return await AsyncStorage.removeItem(key);
    }

    const movePage = (type) => {
        if (type === "Logout") {
            removeStorage("token");
            removeStorage("autoLogin");
            navigation.navigate("login");
        } 
        else if (type === "ConverHistory") {
            navigation.navigate("converhistory");
        }
    }

    return (
        <Container>
            <ReuseText 
                text={"MY페이지"} 
                type={"title"}/>
            {category.map((item, idx) => (
                <SubContainer onPress={() => movePage(item.type)}>
                    <Icon source={item.icon} type={item.type}/>
                    <ReuseText
                        key={idx}
                        text={item.title}
                        type={"more"}
                        fontsize={"20px"}
                        fontfamily={"IBMPlexSans-Medium"}
                        color={palette.black}
                        style={{marginLeft: 10}}/>
                    <BackButton source={BackBtn}/>
                </SubContainer>
            ))}
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${palette.white};
`;
const SubContainer = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 23px;
    padding-left: 28px;
`;
const Icon = styled.Image`
    width: ${(props) => (props.type === "Logout") ? "24px"  : "27px"};
    height: ${(props) => (props.type === "Logout") ? "30px"  : "27px"};
`;
const TitleText = styled.Text`
    font-size: 18px;
    font-family: "IBMPlexSans-Regular";
    
`;
const BackButton = styled.Image`
    position: relative;
    width: 8px;
    height: 15px;
    left: 230px;
    transform: rotate(180deg);
`;
export default MyPage;