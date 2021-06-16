import { useRef } from 'react';
import Card from './card/Card';
import classes from './NewContactForm.module.css';
//import { numericInput, enforceFormat, validatePhone } from './FormValidation';
import React, { useState, useEffect } from 'react';
//import React from 'react';
import { Alert } from 'reactstrap';

function NewContactForm(props) {
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const [emailValid, setEmailValid] = useState(true)

    function submitHandler(event) {
        event.preventDefault();

        const e_Fname = fnameRef.current.value;
        const e_Lname = lnameRef.current.value;
        const e_Email = emailRef.current.value;
        const e_Phone = phoneRef.current.value;
        const e_Address = addressRef.current.value;

        const contactData = {
            fname: e_Fname,
            lname: e_Lname,
            email: e_Email,
            phone: e_Phone,
            address: e_Address
        }

        props.onAddContact(contactData);
    }
    function checkEmail(event) {
        const email = emailRef.current.value;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }

    }
    return (
        <Card>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor='fname'>First Name</label>
              <input type='text' placeholder="First Name" required id='fname' ref={fnameRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='lname'>Last Name</label>
              <input type='text' placeholder="Last Name" required id='lname' ref={lnameRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='text' placeholder="Email" required id='email' ref={emailRef} onChange={checkEmail}/>
              { emailValid ? null : (<Alert color="warning">
                <span className="alert-icon"><i class="ni ni-like-2"></i></span>
                <span className="alert-text"><strong>Please Enter a Valid Email.</strong></span>
              </Alert>) }
            </div>
            <div className={classes.control}>
                <label htmlFor='phone'>Phone Number</label>
                <input type='number' placeholder="Phone Number" required id='phone' maxlength='16' ref={phoneRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='address'>Address</label>
              <input type='text' placeholder="Address" required id='address' ref={addressRef} />
            </div>
            <div className={classes.actions}>
              <button>Add Contact</button>
            </div>
          </form>
        </Card>
    );
}

export default NewContactForm;