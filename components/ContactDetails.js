import { Fragment } from 'react';
import classes from './ContactDetails.module.css';

function ContactDetails(props) {
    return (
        <Fragment>
            <h1>{props.name}</h1>
            <h3>{props.number}</h3>
            <h3>{props.email}</h3>
            <address>{props.address}</address>
        </Fragment>
    );
}

export default ContactDetails;