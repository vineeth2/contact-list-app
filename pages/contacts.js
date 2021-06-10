//Contacts page code
import ContactList from '../components/ContactList';
import { MongoClient} from 'mongodb';

const temp_contacts = [
    {
        name: 'Vineeth',
        email: 'vineeth.krishnamurthy@ondotsystems.com',
        address: '123 way road',
        number: '123-456-7890',
        id: 'contact-1',
    },
    {
        name: 'Eric',
        email: 'eric.shavkin@ondotsystems.com',
        address: '321 way street',
        number: '098-765-4321',
        id: 'contact-2',
    }
];

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
                name: contact.name,
                email: contact.email,
                address: contact.address,
                number: contact.number,
                id: contact._id.toString(),
            }))
        },
        revalidate: 10
    }
}

export default ContactsPage;