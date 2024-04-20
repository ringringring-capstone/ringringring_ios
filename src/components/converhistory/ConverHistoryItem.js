import styled from "styled-components";
import palette from "../../styles/colorPalette";

const ConverHistoryItem = ({title, content}) => {
    return (
        <Container>
            <MainTitle>{title}</MainTitle>
            <Content>{content}</Content>
        </Container>
    );
};
const Container = styled.View`
    background-color: ${palette.white};
    padding: 15px;
    margin: 0px 10px;
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 0px 0px;
`;
const MainTitle = styled.Text`
    font-size: ${(props) => (props.type === "main") ? "24px" : "20px"};
    font-family: "IBMPlexSans-Bold";
    color: ${palette.main};
`;
const Content = styled.Text`
    font-size: 17px;
    font-family: "IBMPlexSans-Regular";
`;
export default ConverHistoryItem;