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
          <form class="form" onSubmit={submitHandler}>
            <div class="pageTitle title">New Contact</div>
            <div>
                <input type='text' class="name formEntry" placeholder="First Name" required id='fname' ref={fnameRef} />
            </div>
            <div>
                <input type='text' class="name formEntry" placeholder="Last Name" required id='lname' ref={lnameRef} />
            </div>
            <div>
                <input type='text' class="email formEntry" placeholder="Email" required id='email' ref={emailRef} />
            </div>
            <div>
                <input type='text' class="name formEntry" placeholder="Phone Number" required id='phone' ref={phoneRef} />
            </div>
            <div>
                <input type='text' class="name formEntry" placeholder="Address" required id='address' ref={addressRef} />
            </div>
            <div className={classes.actions}>
              <button>Add Contact</button>
            </div>
            <div className={classes.goBack}>
              <button>Back to Home</button>
            </div>
          </form>
        </Card>
    );

}

export default NewContactForm;