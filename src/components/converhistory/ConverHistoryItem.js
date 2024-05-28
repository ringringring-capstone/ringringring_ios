import styled from "styled-components";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import palette from "../../styles/colorPalette";

import ContentMoreBtn from "../../assets/icon/ic_contentMore.png";

const ConverHistoryItem = ({title, content, onPress}) => {
    const navigation = useNavigation();

    const handleMovePage = () => {
        navigation.navigate("converdetail", {title, content});
    }

    return (
        <Container onPress={handleMovePage}>
            <TopContainer>
                <MainTitle>{title}</MainTitle>
                <Pressable onPress={onPress}>
                    <MoreBtn source={ContentMoreBtn}/>
                </Pressable>
            </TopContainer>
            <Content 
                numberOfLines={4}
                ellipsizeMode="tail">
                {content}
            </Content>
        </Container>
    );
};
const Container = styled.Pressable`
    width: 87%;
    background-color: ${palette.white};
    padding: 15px;
    margin: 5px 10px 20px 10px;
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 0px 0px;
`;
const TopContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`;
const MainTitle = styled.Text`
    font-size: 22px;
    font-family: "IBMPlexSans-Bold";
    color: ${palette.main};
    margin-bottom: 13px;
`;
const MoreBtn = styled.Image`
    width: 4px;
    height: 15px;
`;
const Content = styled.Text`
    font-size: 17px;
    font-family: "IBMPlexSans-Regular";
`;
export default ConverHistoryItem;