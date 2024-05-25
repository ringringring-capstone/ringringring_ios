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

export async function emailCertified(email) {
    try {
        const response = await instance.get(`/mailsender/${email}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        } else {
            throw error;
        }
    }
}

export async function emailEnterAuth(email, code) {
    try {
        const response = await instance.post(`/codecheck`, {
            email,
            code
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            // 서버 응답이 있는 경우
            if (error.response.status === 200) {
                return response.data;
            } else {
                return "메일 인증 실패, 다시 시도해 주세요.";
            }
        } else {
            return "메일 인증 실패, 다시 시도해 주세요.";
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
            id: response.data.id,
            email: response.data.email,
            name: response.data.name,
        }
    } catch (error) {
        if (error.response) {
            console.error(error.response.data.massage);
        } else {
            console.error(error);
        }
    }
}