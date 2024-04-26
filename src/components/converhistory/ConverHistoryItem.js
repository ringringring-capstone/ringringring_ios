import styled from "styled-components";
import palette from "../../styles/colorPalette";

const ConverHistoryItem = ({title, content}) => {
    return (
        <Container>
            <MainTitle>{title}</MainTitle>
            <Content 
                numberOfLines={4}
                ellipsizeMode="tail"
            >{content}</Content>
        </Container>
    );
};
const Container = styled.View`
    width: 87%;
    background-color: ${palette.white};
    padding: 15px;
    margin: 5px 10px 20px 10px;
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 0px 0px;
`;
const MainTitle = styled.Text`
    font-size: 22px;
    font-family: "IBMPlexSans-Bold";
    color: ${palette.main};
    margin-bottom: 13px;
`;
const Content = styled.Text`
    font-size: 17px;
    font-family: "IBMPlexSans-Regular";
`;
export default ConverHistoryItem;