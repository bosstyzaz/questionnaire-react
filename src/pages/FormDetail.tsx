import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { getFormDetails } from "../API/Form";

const FormDetailPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState("");
  const [questiions, setQuestiions] = useState(Array<any>());

  const fetchData = async () => {
    if (id !== undefined) {
    const res = await getFormDetails(id);
    if (res.status === 200) {
      const data = res.data;
      setName(data.Name);
      setQuestiions(data.Questions);
    }}
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <DivPage>
      <div className="login-box">
        <div className="text__title">Form Details Page</div>
        <h3 className="title-box">{name}</h3>
        {
          questiions.map((value, index) => {
            return (
              <p key={index}>{`${index + 1}. ${value.question} ?`}</p>
            )
          })
        }
        <Button onClick={() => history.push(`/response/${id}`)}>see response</Button>
      </div>
    </DivPage>
  );
};

export default FormDetailPage;

const DivPage = styled.div`
  width: 100%;
  .login-box {
    width: 50%;
    margin: 50px auto;
    @media (max-width: 450px) {
      width: 90%;
    }
  }
  .title-box {
    margin: 15px 0;
    text-align: center;
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
`;
