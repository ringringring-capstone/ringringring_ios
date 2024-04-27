import { SafeAreaView } from "react-native";
import styled from "styled-components";
import palette from "../styles/colorPalette";

const ReuseText = ({
    // type
    // title) size: 24, family: bold
    // subtitle) size: 20, family: bold
    // content) size: 18, family: bold
    // more

    text, 
    type,
    fontsize,
    fontfamily,
    color,
    style,
}) => {
    return (
        <Container type={type}>
            <TextContainer
                type={type}
                style={style}
                fontsize={fontsize}
                fontfamily={fontfamily}
                color={color}
            >{text}</TextContainer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    margin-top: ${(props) => (props.type === "title") ? "15px" : ""};
    margin-left: ${(props) => (props.type === "title") ? "28px" : ""};
`;
const TextContainer = styled.Text`
    font-size: ${(props) => (props.type === "title") ? 
        "24px" : (props.type === "subtitle" ? 
        "20px" : (props.type === "content" ? 
        "18px" : props.fontsize))};
    font-family: ${(props) => (props.type !== "more") ? 
        "IBMPlexSans-Bold" : props.fontfamily};
    color:  ${(props) => (props.type !== "more") ? 
        `${palette.black}` : props.color};
    /* ${props => props.style}; */
`;
export default ReuseText;