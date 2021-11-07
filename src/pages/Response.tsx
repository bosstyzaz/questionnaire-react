import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getAnsByFormId } from "../API/Answer";
import ResponseBox from "../components/ResponseBox";

const ResponsePage = () => {
  const { id } = useParams();

  const [responses, setResponses] = useState(Array<any>());

  const fetchData = async () => {
    if (id !== undefined) {
      const res = await getAnsByFormId(id);
      if (res.status === 200) {
        console.log(res.data);
        const data = res.data;
        setResponses(data.answers);
      }
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <DivPage>
      <div className="login-box">
        <div className="text__title">Responses Page</div>
        {
          responses.map((value, index) => { 
            return <div className="res-box"><ResponseBox name={`response ${index + 1}`} id={value._id} /></div> 
          })
        }
      </div>
    </DivPage>
  );
};

export default ResponsePage;

const DivPage = styled.div`
  width: 100%;
  .login-box {
    width: 50%;
    margin: 50px auto;
    @media (max-width: 450px) {
      width: 90%;
    }
  }
  .res-box {
    margin: 10px 0;
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
