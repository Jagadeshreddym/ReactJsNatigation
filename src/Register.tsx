import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import './styles.css';
import { useNavigate } from "react-router-dom";

function Register()
{
    const navigate = useNavigate()

    const gotToNewPage=(name: any, job:any)=>{
        console.log("name --->"+name+","+job);
      navigate('/dashboard', { state: { name: name, job : job }} );
    }

    const [state, setState] = useState({
        name: "",
        job: ""
      });
    
      const handleChange = (e: { target: { value: any; name: any; }; }) => {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const userData = {
          name: state.name,
          job: state.job
        };
        axios.post("https://reqres.in/api/users", userData).then((response) => {
          console.log(response.status, response.data);
          gotToNewPage( response.data.name, response.data.job);
        });
      };
    
      return (
        <div className="App" style={{display: 'flex'}}>
          <div>
          <h1>Register or Create new account</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="job">
              Job
              <input
                type="text"
                name="job"
                value={state.job}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Register</button>
            <a
              style={{margin:'20px'}}
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="clickLink"
            >
              Learn React
            </a>
          </form>
        </div>
        
        </div>
      );
}

export default Register;