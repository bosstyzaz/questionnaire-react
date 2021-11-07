import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { createForm } from "../API/Form";

const CreateFormPage = () => {
  const history = useHistory();

  const [questiions, setQuestiions] = useState(Array<string>());
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [name, setName] = useState<string>("");

  const createQuestion = (newValue: string) => {
    if (newValue !== "") {
      setQuestiions([...questiions, newValue]);
      setNewQuestion("");
    }
  };

  const onSubmit = () => {
    if (name === "") {
      alert("Please fill your form name !!!")
    } else if (questiions.length <1) {
      alert("Must be at least 1 question !!!")
    } else {
      createForm(name, questiions, history);
    }
  } 

  return (
    <DivPage>
      <div className="login-box">
        <div className="text__title">Create Form Page</div>
        <div className="input-section">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Add form name" />
        </div>
        {questiions.map((value, index) => {
          return (
            <p key={index}>{`${index + 1}. ${value} ?`}</p>
          )
        })}
        <div className="input-section">
          <Input value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} placeholder="Add your question" />
          <Button className="add-button" onClick={() => { createQuestion(newQuestion) }}>Add</Button>
        </div>
        <Button onClick={onSubmit}>Open form</Button>
      </div>
    </DivPage>
  );
};

export default CreateFormPage;

const DivPage = styled.div`
  width: 100%;
  .login-box {
    width: 50%;
    margin: 50px auto;
    @media (max-width: 450px) {
      width: 90%;
    }
  }
  .input-section {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .login-form {
    margin: 20px 0;
    text-align: center;
  }
  .add-button {
    margin: 0px 10px;
  }
  .text {
    &__title {
      font-size: 30px;
      text-align: center;
    }
  }
`;
