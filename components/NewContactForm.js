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
    const [emailValid, setEmailValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);

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

    function checkEmail(event) {                //Checks to see if an email is valid. Displays error message if not.
        const email = emailRef.current.value;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }

    }

    function checkPhone(event) {                //Checks to see if the phone is actually a number.
        const phone = phoneRef.current.value;
        if (Number.isInteger(parseInt(phone))) {
            if (phone.length == 10) {
                phoneRef.current.value = formatPhone(phone);
                setPhoneValid(true);
            }
        } else if (!Number.isInteger(parseInt(phone))) {
            console.log("Not integer!");
            setPhoneValid(false);
        } else {
            setPhoneValid(true);
        }
    }

    function formatPhone(phoneNumber) {         //formats United States phone numbers.
        var formattedNumber = "";
        const areaCode = phoneNumber.substring(0,3);
        const middle = phoneNumber.substring(3,6);
        const ending = phoneNumber.substring(6,10);

        formattedNumber = '(' + areaCode + ') ' + middle + ' - ' + ending;

        return formattedNumber;
    }



    return (
        <Card>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <input 
                type='text' 
                placeholder="First Name"    //First Name
                required id='fname' 
                ref={fnameRef} />
            </div>

            <div className={classes.control}>
              <input 
                type='text' 
                placeholder="Last Name"     //Last Name
                required id='lname' 
                ref={lnameRef} />
            </div>

            <div className={classes.control}>
              <input 
                type='text' 
                placeholder="Email"         //Email Address
                required id='email' 
                ref={emailRef} 
                onChange={checkEmail} />

              { emailValid ? null 
                           : (<Alert color="warning">
                                <span className="alert-icon"><i className="ni ni-like-2"></i></span>
                                <span className="alert-text"><strong>Please Enter a Valid Email.</strong></span>
                              </Alert>) }
            </div>

            <div className={classes.control}>
              <input 
                type='text' 
                placeholder="Phone Number"  //Phone Number
                required id='phone' 
                ref={phoneRef} 
                onChange={checkPhone} />
              { phoneValid ? null 
                           : (<Alert color="warning">
                                <span className="alert-icon"><i className="ni ni-like-2"></i></span>
                                <span className="alert-text"><strong>Please Enter a Valid Number.</strong></span>
                              </Alert>)}
            </div>

            <div className={classes.control}>
              <input 
                type='text' 
                placeholder="Address"       //Home Address
                required id='address' 
                ref={addressRef} />
            </div>

            <div className={classes.actions}>
              <button>Add Contact</button>
            </div>
          </form>
        </Card>
    );
}

export default NewContactForm;