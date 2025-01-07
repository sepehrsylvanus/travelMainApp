const { default: axios } = require("axios");
let token = null; // Variable to store the token

function setToken(newToken) {
  token = newToken;
}

const instance = axios.create({
  baseURL: "188.245.54.147:8081/api",
});

instance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

module.exports = { instance, setToken };
