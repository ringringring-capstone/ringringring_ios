import axios from "axios";

const intance = axios.create({
    baseURL: "http://3.36.125.87:9090/",
    timeout: 10000,
});
export default intance;