import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import { login } from "../API/Auth";

const LoginPage = () => {
  const history = useHistory();

  const onSubmit = (values: { username: string; password: string }) => {
    login(values.username, values.password, history);
  };

  return (
    <DivPage>
      <div className="login-box">
        <div className="text__title">Login</div>
        <Form
          className="login-form"
          name="login"
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

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
        <div>
          Do you have an account?{" "}
          <Button onClick={() => history.push("/register")}>Register</Button>
        </div>
      </div>
    </DivPage>
  );
};

export default LoginPage;

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
`;
