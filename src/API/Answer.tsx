import axios from "axios";
import { BACKEND_URL } from "../const";

export const getAnsByFormId = async (id: string) => {
  return await axios
    .get(`${BACKEND_URL}answer/list/?formId=${id}`, {
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

export const getAnsById = async (id: string) => {
  return await axios
    .get(`${BACKEND_URL}answer/detail/?answerId=${id}`, {
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

export const sendAnswer = async (id: string, answers: Array<string>) => {
  const answerArr = answers.map((answer) => { return { answer: answer } });
  axios.post(`${BACKEND_URL}user/res`, {
    formId: id,
    answers: answerArr
  }, {
    headers: { Authorization: `${localStorage.getItem("token")}` },
  })
    .then(res => {
      if (res.status === 200) {
        alert("Your answer has been sent")
      }
    }).catch(err => {
      if (err.response.status === 400) {
        alert("Username already exists")
      } else {
        console.log(err);
      }
    })
}