import axios from "axios";

class API {

  constructor() {
    this._baseURL = process.env.REACT_APP_API_BASE_URL;
    this._basicAuthCredentials = {
      username: process.env.BASIC_AUTH_USERNAME,
      password: process.env.BASIC_AUTH_PASSWORD
    };
    this._basicAuth = null;
  }

  get baseURL() {
    return this._baseURL;
  }

  get basicAuthCredentials() {
    return this._basicAuthCredentials;
  }

  get basicAuth() {
    if (!this._basicAuth) {
      this._basicAuth = axios.create({
        baseURL: this.baseURL,
        withCredentials: true
      });
    }
    return this._basicAuth;
  }

  showError(err, enqueueSnackbar, options = {}) {
    let errorMessage = typeof err === "string" ? err : err && err.message;
    errorMessage && enqueueSnackbar && enqueueSnackbar(errorMessage, options);
  }

}

const api = new API();

export default api;