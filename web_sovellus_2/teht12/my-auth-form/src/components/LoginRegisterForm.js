import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";

function LoginRegisterForm(props) {
    const [usernameLogin, setUsernameLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [statusLogin, setStatusLogin] = useState('');

    const [usernameRegister, setUsernameRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [statusRegister, setStatusRegister] = useState('');

    const loginUser = async (event) => {
        event.preventDefault();

        const reqObj = {
            username: usernameLogin,
            password: passwordLogin
        };

        const reqOptions = {
            headers:{
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(reqObj),
            credentials: 'include'
        }

        const resp = await fetch("http://localhost:8081/login", reqOptions);
        const respJson = await resp.json();
        const respResult = respJson.hasAccess;
        const respMessage = respJson.message;
        setStatusLogin(respMessage);
        props.setLoginAccess(respResult);
    }

    const registerUser = async (event) => {
        event.preventDefault();

        const reqObj = {
            username: usernameRegister,
            password: passwordRegister
        };

        const reqOptions = {
            headers:{
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(reqObj)
        }

        const resp = await fetch("http://localhost:8081/register", reqOptions);
        const respJson = await resp.json();
        const respResult = respJson.result;
        setStatusRegister(respResult);
    }

  return (
      <div id="container">
      <Form>
          <Form.Text className="text-muted">
              Login to your account here
          </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={(event)=>{
                    event.preventDefault();
                    setUsernameLogin(event.target.value);
                }}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event)=>{
                    event.preventDefault();
                    setPasswordLogin(event.target.value);
                }}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={loginUser}>
          login
        </Button>
        <br/>
        <Form.Text className="text-muted">
            {statusLogin}
        </Form.Text>
      </Form>

      <br/>
      <div>OR</div>
      <br/>

        <Form>
            <Form.Text className="text-muted">
                Register here
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={(event)=>{
                    event.preventDefault();
                    setUsernameRegister(event.target.value);
                }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event)=>{
                    event.preventDefault();
                    setPasswordRegister(event.target.value);
                }}/>
            </Form.Group>
            <Button id="registerButton" variant="primary" type="submit" onClick={registerUser}>
                register
            </Button>
            <br/>
            <Form.Text className="text-muted">
                {statusRegister}
            </Form.Text>
        </Form>
      </div>
  );
}

export default LoginRegisterForm;