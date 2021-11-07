import styled from "styled-components";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

interface ResponseBoxInterface {
  name: string;
  id: string;
}

const ResponseBox = ({ name, id }: ResponseBoxInterface) => {
  const history = useHistory();

  return (
    <DivBox>
      <div className="text-name">{name}</div>
      <div className="btn-box">
        <Button onClick={() => {history.push(`/result/${id}`)}}>Detail</Button>
      </div>
    </DivBox>
  );
};

export default ResponseBox;

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
