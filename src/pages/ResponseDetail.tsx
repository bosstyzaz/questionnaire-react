import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { getAnsById } from "../API/Answer";

const ResponseDetailPage = () => {
  const history = useHistory();
  const { id } = useParams();

  const [data, setData] = useState(Array<any>());
  const [name, setName] = useState<string>("");

  const fetchData = async () => {
    if (id !== undefined) {
      const res = await getAnsById(id);
      if (res.status === 200) {
        const data = res.data;
        setName(data.answers.Owner);
        let dataArr = [];
        for (var i = 0; i < data.questions.length; i++) {
          const resObj = {
            question: data.questions[i].question,
            answer: data.answers.Answers[i].answer
          }
          dataArr.push(resObj)
        }
        setData(dataArr);
      }
    };
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <DivPage>
      <div className="login-box">
        <div className="text__title">Response Detail Page</div>
        <p className="owner">response from {name}</p>
        {
          data.map((value, index) => {
            return <div key={index} className="result-box">
              <p>{`Question: ${value.question}`}</p>
              <p>{`Answer: ${value.answer}`}</p>
            </div>
          })
        }
        <Button onClick={() => history.push("/home")}>Home</Button>
      </div>
    </DivPage>
  );
};

export default ResponseDetailPage;

const DivPage = styled.div`
  width: 100%;
  .login-box {
    width: 50%;
    margin: 50px auto;
    @media (max-width: 450px) {
      width: 90%;
    }
  }
  .result-box {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
  .login-form {
    margin: 20px 0;
    text-align: center;
  }
  .owner {
    margin: 20px 0;
    text-align: end;
  }
  .text {
    &__title {
      font-size: 30px;
      text-align: center;
    }
  }
`;
