import styled from "styled-components";
import palette from "../../styles/colorPalette";

const DailyPractice = () => {
    const GraphTitle = [
        {category: "all", text: "평균 연습 시간"}, 
        {category: "my", text: "내 연습 시간"}
    ];

    return (
        <Container>
            {GraphTitle.map((item) => (
                <GraphContainer>
                    <GraphColor cate={item.category}/>
                    <GraphText>{item.text}</GraphText>
                </GraphContainer>
            ))}
        </Container>
    );
};
const Container = styled.View`
    flex: 1;
    background-color: ${palette.white};
    padding: 21px;
    margin: 7px 28px;
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 0px 0px;
`;
const GraphContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const GraphColor = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${(props) => (props.cate === "all") ? "#686868" : `${palette.sub}`};
`;
const GraphText = styled.Text`
    font-size: 14px;
    font-family: "IBMPlexSans-Regular";
    margin-left: 7px;
`;
export default DailyPractice;