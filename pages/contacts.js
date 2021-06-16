//Contacts page code
import ContactList from '../components/ContactList';

function ContactsPage({ contacts }) {
    /*for (let i = 0; i < contacts.length; i++) {
        contacts[i].index = i;
    }*/

    return (
        <ContactList contacts={contacts} />
    );
}

export async function getStaticProps() {

    const response = await fetch('http://localhost:3000/api/contacts');
    const contacts = await response.json();

    return {
        props: {
            contacts: contacts.map(contact => ({
                fname: contact.fname,
                lname: contact.lname,
                email: contact.email,
                phone: contact.phone,
                address: contact.address,
                index: contact.index,
            }))
        },
    }
}


export default ContactsPage;