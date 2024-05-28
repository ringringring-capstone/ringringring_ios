import styled from "styled-components";
import CheckIcon from "../../assets/icon/checklist/ic_check.png";

const StatusDesc = () => {
    const DescriptionText = ["전화 벨소리가 울리면 무서워요", "전화를 해야하면 심장이 떨려요"];
    return (
        <Container>
            {DescriptionText.map((item, idx) => (
                <DescriptContainer key={idx}>
                    <Icon source={CheckIcon}/>
                    <DescriptText>{item}</DescriptText>
                </DescriptContainer>
            ))}
        </Container>
    );
};
const Container = styled.View`
    /* flex: 0.2; */
    padding: 0 28px;
    margin-top: 15px;
`;
const DescriptContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;
const Icon = styled.Image`
    width: 17px;
    height: 13px;
    margin-right: 10px;
`;
const DescriptText = styled.Text`
    font-size: 17px;
    font-family: "IBMPlexSans-Regular";
    letter-spacing: -0.32px;
    line-height: 21px;
`;
export default StatusDesc;