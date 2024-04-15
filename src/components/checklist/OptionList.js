import { SafeAreaView, ScrollView } from "react-native";
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import OptionItem from "./OptionItem";

const OptionList = ({score, setScore}) => {
    // 일단 이러고 넣어둠.
    const text = [
        { question: "대면보단 비대면이 편하다.", clickValue: false },
        { question: "문자와 톡으로 대화하는 것이 편하다.", clickValue: false },
        { question: "모르는 사람과 통화할 때 대화하기 힘들다.", clickValue: false },
        { question: "통화를 해야하는 상황이 오면 스트레스 받는다.", clickValue: false },
        { question: "무슨 말을 해야하는지 알지만 실제 통화 시 말을 못하는 경우가 많다.", clickValue: false },
        { question: "전화 통화 시, 무슨 말을 해야할 지 모르겠다.", clickValue: false },
        { question: "문자와 톡으로 대화하는 것이 편하다.", clickValue: false },
        { question: "모르는 사람과 통화할 때 대화하기 힘들다.", clickValue: false },
        { question: "통화를 해야하는 상황이 오면 스트레스 받는다.", clickValue: false },
        { question: "통화에 대한 두려움, 불편함이 있다.", clickValue: false },
    ];
    return (
        <Container showsVerticalScrollIndicator={false}>
            {text.map((item) => 
                <OptionItem 
                    key={item}
                    content={item.question}
                    score={score}
                    setScore={setScore}
                    clickValue={item.clickValue}/>
            )}
        </Container>
    );
};
const Container = styled(ScrollView)`
    width: 100%;
    height: 90%;
    margin-top: 15px;
    padding: 5px;
    background-color: ${palette.white};
`;
export default OptionList;