import axios from "./axiosApi";

const schemaApi = {
  get(url, params = {}, cancel_token = null) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params,
          cancelToken: cancel_token ? cancel_token.token : null,
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return reject("canceled");
          }

          reject(err);
        });
    });
  },
  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  delete(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, { data })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default schemaApi;
