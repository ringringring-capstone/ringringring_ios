import styled from "styled-components";
import palette from "../../styles/colorPalette";
import InfoBox from "../InfoBox";
import ConverHistoryItem from "./ConverHistoryItem";

const ConverHistoryList = () => {
    const CallConversation = [
        {
            title: "자전거 환불 전화 연습",
            content: `
안녕하세요.
네 안녕하세요. 
자전거 환불 관련해서 전화를 드렸습니다.
알겠습니다. 성함을 말씀해주시겠어요? 
홍길동입니다.
네 홍길동님, 저희 제품을 언제 구매해주셨나요?
            `
        },
        {
            title: "고깃집 예약 전화 연습",
            content: `
                안녕하세요.
                네 안녕하세요.
                고깃집 예약하려고 전화를 드렸습니다.
                알겠습니다. 성함을 말씀해주시겠어요?
                홍길동입니다.
                네 홍길동님, 저희 제품을 언제 구매해주셨나요?å
            `
        },
    ]
    return (
        <Container>
            {CallConversation.map((item) => (
                <ConverHistoryItem
                    title={item.title}
                    content={item.content}
                />
            ))}
        </Container>
    );
};
const Container = styled.View`
    background-color: ${palette.white};
`;
export default ConverHistoryList;