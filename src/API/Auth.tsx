import axios from "axios";
import { BACKEND_URL } from "../const";

export function login(email: string, password: string, history: any) {
  console.log(email)
  console.log(password)
  axios.post(`${BACKEND_URL}user/login`, {
    email: email,
    password: password
  })
    .then(res => {
      if (res.status === 200) {
        console.log('success')
        console.log(res.data)
        localStorage.setItem('token', res.data.user.token)
        localStorage.setItem('username', res.data.user.username)
        history.push("/home")
        window.location.reload();
      }

    }).catch(err => {
      if (err.response.status == 429) {
        alert("Try again in 15min.")
      }
      else if (err.response.status === 400) {
        alert("Please check email or password.")
      }
      else if (err.response.status === 422) {
        let res = err.response.data
        if (res.errors.password) {
          alert("Please check email or password.")
        }
        if (res.errors.username) {
          alert("Please check email or password.")
        }
      }
      else if (err.response.status === 404) {
        alert("Please check email or password.")
      }
    })
}

export const register = async (email: string, password: string, history: any) => {
  axios.post(`${BACKEND_URL}user/signup`, {
    email: email,
    password: password
  })
    .then(res => {
      if (res.status === 200) {
        history.push("/login")
      }
    }).catch(err => {
      if (err.response.status === 400) {
        alert("Username already exists")
      } else {
        console.log(err);
      }
    })
};