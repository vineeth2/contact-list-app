import { useRef } from 'react';
import Card from './card/Card';
import classes from './NewContactForm.module.css';


function NewContactForm(props) {
    const fnameRef = useRef();
    const lnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

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
    return (
        <Card>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor='fname'>First Name</label>
              <input type='text' required id='fname' ref={fnameRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='lname'>Last Name</label>
              <input type='text' required id='lname' ref={lnameRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='email'>Email</label>
              <input type='text' required id='email' ref={emailRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='phone'>Phone Number</label>
              <input type='text' required id='phone' ref={phoneRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='address'>Address</label>
              <input type='text' required id='address' ref={addressRef} />
            </div>
            <div className={classes.actions}>
              <button>Add Contact</button>
            </div>
          </form>
        </Card>
    );

}

export default NewContactForm;