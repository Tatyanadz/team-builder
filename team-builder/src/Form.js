import React, { useState } from 'react';

const Form = (props) => {
    const [value, setValue] = useState({
        name: '',
        email: '',
        role: ''
    })

    const changeHandler = event => {
        setValue({...value, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.newMember(value);
        setValue({name: '', email: '', role: ''});
    };
    return (
        <form onSubmit={submitForm}>
            <label>
                Name:
                  <input 
                  id='name'
                  name='name'
                  placeholder='New Member Name'
                  onChange={changeHandler}
                  value={value.name}
                  />
            </label>
            <label>
                Email:
                  <input 
                  id='email'
                  name='email'
                  placeholder='Your Email'
                  onChange={changeHandler}
                  value={value.email}
                  />
            </label>
            <label>
                Role:
                  <input 
                  id='role'
                  name='role'
                  placeholder='Role'
                  onChange={changeHandler}
                  value={value.role}
                  />
            </label>
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;