// import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

interface FormBoxInterface {
  name: string;
  id: string;
}

const FormBox = ({ name, id }: FormBoxInterface) => {
  const history = useHistory();

  return (
    <DivBox>
      <div className="text-name">{name}</div>
      <div className="btn-box">
        <Button onClick={() => {history.push(`/form/${id}`)}}>Detail</Button>
        <Button className="url-btn" onClick={() => {alert(`URL : ${window.location.origin.toString()}/answer/${id}`)}}>Get url</Button>
      </div>
    </DivBox>
  );
};

export default FormBox;

const DivBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  .text-name {
    width: 50%;
  }
  .btn-box {
    width: 50%;
  }
  .url-btn {
    margin: 0px 10px
  }
`;
