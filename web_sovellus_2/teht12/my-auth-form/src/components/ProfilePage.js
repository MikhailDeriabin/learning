import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import {useCookies} from "react-cookie";

function ProfilePage() {
    const [userData, setUserData] = useState({});
    const [userDataUpdate, setUserDataUpdate] = useState({});
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const reqOptions = {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        }

        const resp = await fetch("http://localhost:8081/profile", reqOptions);
        const respJson = await resp.json();
        setUserData(respJson.result);
    }

    const saveData = () => {
        const reqOptions = {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify(userDataUpdate)
        }

        fetch("http://localhost:8081/profile", reqOptions);
    }

  return (
      <div id="container">
          <h3>Profile page</h3>
          <div>You are logged in as {cookies.username}</div>
          <br/>

        <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name </Form.Label>
          <Form.Control type="text" placeholder="name" onChange={(event)=>{
                    setUserData({...userData, name: event.target.value});
                    setUserDataUpdate({...userDataUpdate, name: event.target.value});
                }}
                value={userData.name ? userData.name : ''}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone </Form.Label>
          <Form.Control type="text" placeholder="phone" onChange={(event)=>{
                    setUserData({...userData, phone: event.target.value});
                    setUserDataUpdate({...userDataUpdate, phone: event.target.value});
                }}
                value={userData.phone ? userData.phone : ''}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control type="text" placeholder="email" onChange={(event)=>{
                    setUserData({...userData, email: event.target.value});
                    setUserDataUpdate({...userDataUpdate, email: event.target.value});
                }}
                value={userData.email ? userData.email : ''}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(event) => {
            event.preventDefault();
            saveData();
        }}>
          save
        </Button>
      </Form>
      </div>
  );
}

export default ProfilePage;