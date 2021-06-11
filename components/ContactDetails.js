import { Fragment } from 'react';
import classes from './ContactDetails.module.css';

function ContactDetails(props) {
    return (
        <Fragment>
            <h1>{props.fname} {props.lname}</h1>
            <h3>{props.phone}</h3>
            <h3>{props.email}</h3>
            <address>{props.address}</address>
        </Fragment>
    );
}

export default ContactDetails;