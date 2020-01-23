import React, { useState } from 'react';

const Form = () => {
    return (
        <form>
            <div>
                <label>Full Name</label>
                <input type="text" name="fullName" required/>
            </div>
            <div>
                <label>Email Address</label>
                <input type="email" name="email" required/>
            </div>
            <div>
                <label>Job Position</label>
                <input type="text" name="jobPosition" required/>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;