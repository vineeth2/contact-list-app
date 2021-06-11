//Contacts page code
import ContactList from '../components/ContactList';
import { MongoClient } from 'mongodb';

function ContactsPage(props) {
    return (
        <ContactList contacts={props.contacts} />
    );
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://ericshavkin:adminpass12321@cluster0.w5sbi.mongodb.net/contacts?retryWrites=true&w=majority');
    const db = client.db();
    const contactsCollection = db.collection('contacts');

    const contacts = await contactsCollection.find().toArray();

    client.close();

    return {
        props: {
            contacts: contacts.map(contact => ({
                fname: contact.fname,
                lname: contact.lname,
                email: contact.email,
                phone: contact.phone,
                address: contact.address,
                id: contact._id.toString(),
            }))
        },
        revalidate: 1,
    }
}

export default ContactsPage;