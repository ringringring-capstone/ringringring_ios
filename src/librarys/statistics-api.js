import instance from "./axios";

export async function saveCallTime(userId, callTime, token) {
    console.log("test2");
    try {
        const response = await instance.put(`/save`, {
            userId,
            callTime,
        }, {
            headers: {
                Authorization: token,
            }
        });
        return response;
    } catch (error) {
        if (error.response) {
            // return error.response.data.errorDetails;
            return error;
        } else {
            throw error;
        }
    }
}

export async function usageStatistics(email, token) {
 try {
    const response = await instance.get(`/usage/${email}`, {
        headers: {
            Authorization: token
        }
    });
    return response;
 } catch (error) {
    if (error.response) {
        return error.response.data;
    } else {
        throw error;
    }
 }
}