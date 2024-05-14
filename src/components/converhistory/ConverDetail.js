import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { SafeAreaView } from "react-native";

import GoBackBtn from "../GoBackBtn";
import ReuseText from "../ReuseText";

const ConverDetail = ({route}) => {
    const { title, content } = route.params;

    return (
        <Container>
            <Header>
                <GoBackBtn/>
            </Header>
            <ConverTextContainer>
                <ReuseText text={title} type={"subtitle"}/>
                <ReuseText 
                    text={content} 
                    type={"more"}
                    fontsize={"18px"}
                    fontfamily={"IBMPlexSans-Regular"}
                    color={palette.black}
                    style={{marginTop: 30}}/>
            </ConverTextContainer>
        </Container>
    )
}
const Container = styled(SafeAreaView)`
    flex: 1;
    display: flex;
    background-color: ${palette.white};
`;
const Header = styled.View`
    flex: 1;
    width: 100%;
    align-items: left;
    justify-content: center;
    padding-left: 28px;
`;
const ConverTextContainer = styled.View`
    flex: 11;
    width: 100%;
    padding-left: 28px;
    margin-top: 5px;
`;
export default ConverDetail;