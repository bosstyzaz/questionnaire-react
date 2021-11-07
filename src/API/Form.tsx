import axios from "axios";
import { BACKEND_URL } from "../const";

export const listMyForms = async () => {
  return await axios
    .get(`${BACKEND_URL}form/myForms`, {
      headers: { Authorization: `${localStorage.getItem("token")}` },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("error ", error);
      return error;
    });
}

export const createForm = async (name: string, questions: Array<string>, history: any) => {
  const questionArr = questions.map((question) => { return { question: question } });
  axios.post(`${BACKEND_URL}form/create`, {
    name: name,
    questions: questionArr
  }, {
    headers: { Authorization: `${localStorage.getItem("token")}` },
  })
    .then(res => {
      if (res.status === 200) {
        history.push("/home")
      }
    }).catch(err => {
      if (err.response.status === 400) {
        alert("Not found")
      } else {
        console.log(err);
      }
    })
}


export const getFormDetails = async (id: string) => {
  return await axios
    .post(`${BACKEND_URL}form`, { id: id }, {
      headers: { Authorization: `${localStorage.getItem("token")}` },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("error ", error);
      return error;
    });
}

export const getFormById = async (id: string) => {
  return await axios
    .post(`${BACKEND_URL}user/form`, { id: id })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("error ", error);
      return error;
    });
}
