//Contacts page code
import ContactList from '../components/ContactList';

function ContactsPage({ contacts }) {
    return (
        <ContactList contacts={contacts} />
    );
}

export async function getStaticProps() {

    const response = await fetch('http://localhost:3000/api/contacts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const contacts = await response.json();

    return {
        props: {
            contacts: contacts.map(contact => ({
                id: contact.id,
                fname: contact.fname,
                lname: contact.lname,
                email: contact.email,
                phone: contact.phone,
                address: contact.address,
            }))
        },
    }
}


export default ContactsPage;