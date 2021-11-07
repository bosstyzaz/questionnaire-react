import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { register } from "../API/Auth";

const RegisterPage = () => {
  const history = useHistory();

  const onSubmit = (values: { username: string; password: string, confirmpassword: string}) => {
    if (values.username.length >=6 && values.password.length >=6 && values.confirmpassword.length >=6) {
      if (values.password === values.confirmpassword) {
        register(values.username, values.password, history);
      } else {
        alert("The confirm password does not match!!");
      }
    } else {
      alert("Your username and password must more than 6 characters");
    }
  };

  return (
    <DivPage>
      <div className="register-box">
        <div className="text__title">Register</div>
        <Form
          className="register-form"
          name="register"
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmpassword"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </DivPage>
  );
};

export default RegisterPage;

const DivPage = styled.div`
  width: 100%;
  .register-box {
    width: 50%;
    margin: 50px auto;
    @media (max-width: 450px) {
      width: 90%;
    }
  }
  .register-form {
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
