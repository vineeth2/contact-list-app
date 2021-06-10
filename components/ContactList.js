import Contact from './Contact';
import classes from './ContactList.module.css'

function ContactList(props) {
    return (
        <ul className={classes.list}>
<<<<<<< HEAD
            {props.contacts.map((contact) => (
                <Contact
                    fname={contact.fname}
                    lname={contact.lname}
                    email={contact.email}
                    address={contact.address}
                    number={contact.number}
                    id={contact.id}
                />
            ))}
=======
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
>>>>>>> a9647c938b66d78ad70f13618486f951d023e18f
        </ul>
    )
}

export default ContactList;