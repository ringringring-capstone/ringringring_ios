import styled from "styled-components";

const SubMenuTitle = ({text}) => {
    return (
        <Container>
            <SubMenuTitle>{text}</SubMenuTitle>
        </Container>
    );
};
const Container = styled.View`
    margin-left: 28px;
`;
const SubTitleText = styled.Text`
    font-size: 17px;
    font-family: "IBMPlexSans-Bold";
`;
export default SubMenuTitle;