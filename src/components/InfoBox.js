import { useState, useEffect } from "react";
import styled from "styled-components";
import { PieChart } from "react-native-gifted-charts";
import { usageStatistics } from "../librarys/statistics-api";
import { getStorage } from "../librarys/storage";
import ReuseText from "./ReuseText";
import palette from "../styles/colorPalette";

const InfoBox = ({title}) => {
    const [userId, setUserId] = useState("");
    const [token, setToken] = useState("");
    const PracticeTime = 10;

    useEffect(() => {
        const getUserInfo = async () => {
            const storageUserId = await getStorage("userId");
            const storageToken = await getStorage("token");
            setUserId(storageUserId);
            setToken(storageToken);
        };
        getUserInfo();
    }, []);

    useEffect(() => {
        handleUsageStatistics();
    }, []);

    const handleUsageStatistics  = async () => {
        usageStatistics(userId, token)
            .then(response => {
                if(response) {
                    // console.log(response);
                }
            })
            .catch (error => {
                console.log("에러: ", error);
            })
    }

    const data = [
        {
            text: "50",
            value: 50,
            shiftTextBackgroundX: 3,
        },
        {
            text: "20",
            value: 20,
            shiftTextBackgroundX: 4,
            shiftTextBackgroundY: -1,
        },
        {
            text: "30",
            value: 30,
            shiftTextBackgroundX: 3,
            shiftTextBackgroundY: 0,
        },
        {
            text: "30",
            value: 30,
            shiftTextBackgroundX: 3,
            shiftTextBackgroundY: 0,
        },
    ];
    return (
        <Container>
            <TitleText>{title}</TitleText>
            <PieChart
                radius={80}
                showText={(title === "월간 통계") ? true : false}                            // 차트 값 텍스트
                showValuesAsLabels={true}           // 값 보이게 할 지
                labelsPosition={"onBorder"}         // 텍스트 위치
                textColor={`${palette.black}`}      // 텍스트 색상
                textSize={12}                       // 텍스트 크기
                strokeWidth={2}                     // 그래프 테두리 두께
                strokeColor={`${palette.white}`}    // 그래프 테두리 색상      
                font={"IBMPlexSans-Regular"}
                data={data}
                donut/>
            <PracticeTextContainer>
                {title === "주간 통계" && (
                    <ReuseText
                        text={`평균 연습 시간: ${PracticeTime}분`}
                        type={"more"}
                        color={palette.black}
                        fontsize={"12px"}
                        fontfamily={"IBMPlexSans-Regular"}/>
                )}
            </PracticeTextContainer>
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
const PracticeTextContainer = styled.View`
    display: flex;
    /* margin-left: 20px; */
    align-items: flex-end;
`;
export default InfoBox;