import instance from "./axios";

// 통화 시간 저장
export async function saveCallTime(userId, callTime, token) {
    try {
        const response = await instance.put(`/save`, {
            userId,
            callTime,
        }, {
            headers: {
                Authorization: token,
            }
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}

// 주간 사용 통계
export async function usageStatistics(id, token) {
 try {
    const response = await instance.get(`/usage/${id}`, {
        headers: {
            Authorization: token
        }
    });
    return {
        average: response.data.average,
        duration: response.data.duration,
    }
 } catch (error) {
    if (error.response) {
        return error.response.data;
    } else {
        throw error;
    }
 }
}