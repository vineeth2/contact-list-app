import Contact from './Contact';
import classes from './ContactList.module.css'

function ContactList(props) {
    return (
        <ul className={classes.list}>
        {props.contacts.map((contact) => (
            <Contact
            fname={contact.fname}
            lname={contact.lname}
            email={contact.email}
            phone={contact.phone}
            address={contact.address}
            id={contact.id}
            />
        ))}
        </ul>
    )
}

export default ContactList;