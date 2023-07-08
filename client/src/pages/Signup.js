import React, {useState} from "react";
import {Link} from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutation';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    isCompany: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormState({
        ...formState,
        [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) =>{
    event.preventDefault();
    console.log(formState);

    try {
        const {data} = await addUser({
            variables: {...formState},
        });
    
        Auth.login(data.addUser.token);
    } catch (e) {
        console.error(e);
    }
  };
  return (
    <div></div>
  );
};

export default Signup;