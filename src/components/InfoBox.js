import styled from "styled-components";
import { Text } from "react-native";
import MenuTitle from "./MenuTitle";
import palette from "../styles/colorPalette";

const InfoBox = ({title}) => {
    return (
        <Container>
            {/* <TitleText>{title}</TitleText> */}
            {/* <GraphContainer>

            </GraphContainer> */}
        </Container>
    );
};
const Container = styled.View`
    flex: 1;
    background-color: ${palette.white};
    padding: 21px;
    margin-right: 25px;
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 0px 0px;
`;
const TitleText = styled.Text`
    font-size: 15px;
    font-family: "IBMPlexSans-Regular";
`;
const GraphContainer = styled.View`

`;
export default InfoBox;