import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button, Input, Form } from "antd";
import {getFormById} from "../API/Form";
import {sendAnswer} from "../API/Answer";

const AnswerPage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState(Array<any>());

  const fetchData = async () => {
    if (id !== undefined) {
    const res = await getFormById(id);
    if (res.status === 200) {
      const data = res.data;
      setName(data.Name);
      setQuestions(data.Questions);
    }}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFinish = (values: any) => {
    let postData = [];
    for (const key in values) {
      postData.push(values[key]);
    }
    console.log("postData :>> ", postData);
    if (id !== undefined) {
      sendAnswer(id, postData);
    }
  };

  return (
    <DivPage>
      <div className="answer-page">
      <h1>{name}</h1>
      <Form form={form} name="answer-form" onFinish={onFinish}>
        {questions.map((value, index) => {
          return (
            <div key={index}>
              <div>{value.question}</div>
              <Form.Item
                className="short-input mr-10 mb-15"
                name={`answer${index + 1}`}
                rules={[
                  {
                    required: false,
                    message: "กรุณากรอกคำตอบ",
                  },
                ]}
              >
                <Input.TextArea rows={2} />
              </Form.Item>
            </div>
          );
        })}
        <Button htmlType="submit">Submit</Button>
      </Form>
      </div>
    </DivPage>
  );
};

export default AnswerPage;

const DivPage = styled.div`
  width: 100%;
  .answer-page {
    width: 50%;
    margin: 50px auto;
    @media (max-width: 450px) {
      width: 90%;
    }
  }
`;
