import Contact from './Contact';
import classes from './ContactList.module.css'

function ContactList(props) {
    return (
        <ul className={classes.list}>
            {props.contacts.map((contact) => (
                <Contact
                    name={contact.name}
                    email={contact.email}
                    address={contact.address}
                    number={contact.number}
                    id={contact.id}
                />
            ))}
        </ul>
    )
}

export default ContactList;