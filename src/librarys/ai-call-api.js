import instance from "./axios";

// ai 서버 연결 확인
export async function serverConnected(token) {
    try {
        const response = await instance.get(`/isconnected`,
            {
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

// 배달 ai
export async function deliveryAi(token) {
    try {
        const response = await instance.post(`/deliveryAI`,
            {
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

export async function aiCall(id, token) {
    try {
        const response = await instance.get(`/aicall/${id}`,
            {
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