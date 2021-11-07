import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import FormBox from "../components/FormBox";
import { listMyForms } from "../API/Form";

const HomePage = () => {
  const history = useHistory();

  const [forms, setForms] = useState(Array<any>());

  const fetchData = async () => {
    const res = await listMyForms();
    if (res.status === 200) {
      console.log(res.data);
      setForms(res.data.forms)
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <DivPage>
      <div className="login-box">
        <div className="text__title">
          <h2>Home Page</h2>
        </div>
        {
          forms.map((value, index) => {
            return <div className="question-item"><FormBox key={index} name={value.Name} id={value._id} /></div>
          })
        }
        <Button onClick={() => history.push("/create")}>Create new form</Button>
      </div>
    </DivPage>
  );
};

export default HomePage;

const DivPage = styled.div`
  width: 100%;
  .login-box {
    width: 50%;
    margin: 50px auto;
    @media (max-width: 450px) {
      width: 90%;
    }
  }
  .login-form {
    margin: 20px 0;
    text-align: center;
  }
  .text {
    &__title {
      font-size: 30px;
      text-align: center;
    }
  }
  .question-item {
    margin: 10px 0;
  }
`;
