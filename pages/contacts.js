//Contacts page code
import ContactList from '../components/ContactList';

const temp_contacts = [
    {
        name: 'Vineeth',
        email: 'vineeth.krishnamurthy@ondotsystems.com',
        address: '123 way street'
    },
    {
        name: 'Eric',
        email: 'eric.shavkin@ondotsystems.com',
        address: '321 way street'
    }
];

function ContactsPage() {
    return (
        <ContactList contacts={temp_contacts} />
    );
}

export default ContactsPage;