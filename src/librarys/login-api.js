import instance from "./axios";

export async function registerUser(name, email, pw) {
    try {
        const response = await instance.post("/signup", {
            name,
            email,
            pw,
        });
        return response;
    } catch (error) {
        if (error.response) {
            console.log(error.response.errorDetails);
        }
    }
}

export async function duplicationEmail(email) {
    try {
        const response = await instance.get(`/emailcheck/${email}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}