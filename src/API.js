import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "abd8332e-6fc9-4aa4-8526-36cbdfefa19d"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, count = 20) {
    return instance
      .get(`users?page=${currentPage}&count=${count}`)
      .then(response => response.data);
  },
  onPageChange(currentPage = 1, count = 20) {
    return instance
      .get(`users?page=${currentPage}&count=${count}`)
      .then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  }
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId).then(response => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/` + userId)
      .then(response => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then(response => response.data);
  },
  auth() {
    return instance.get(`auth/me`).then(response => response.data);
  },

  login(email, password, rememberMe = false, captcha) {
    return instance.post("auth/login", { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete("auth/login");
  },
  updatePhoto(photo) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put('profile/photo', formData, {
      headers:{
        'Content-Type': "multipart/form-data"
      }
    }).then(response => response.data)
  },
  saveProfile(profile){
    return instance.put("profile", profile);
  },
  getCaptchaUrl(){
    return instance.get(`security/get-captcha-url`).then(response => response.data);
  }
};
