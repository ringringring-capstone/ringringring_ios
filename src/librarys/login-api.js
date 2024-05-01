import instance from "./axios";

// 회원가입
export async function registerUser(name, email, pwd) {
    try {
        const response = await instance.post("/signup", {
            name,
            email,
            pwd,
        });
        return response.data.message;
    } catch (error) {
        if (error.response) {
            return error.response.data.errorDetails;
        } else {
            throw error;
        }
    }
}

// 이메일 중복 확인
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

// 로그인
export async function loginUser(email, pwd) {
    try {
        const response = await instance.post("/login", {
            email,
            pwd,
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return {
            token: response.headers.authorization,
        }
    } catch (error) {
        if (error.response) {
            console.error(error.response.data.massage);
        } else {
            console.error(error);
        }
    }
}