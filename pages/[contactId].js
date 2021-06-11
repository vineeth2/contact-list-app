import { Fragment } from 'react';
import ContactDetails from '../components/ContactDetails'
import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/router';

function viewContactPage(props) {
    const router = useRouter();

    function editContactHandler() {
        router.push('/');
    }

    function deleteContactHandler() {
        router.push('/delete-contact');
    }

    return (
        <Fragment>
            <ContactDetails 
                fname= {props.contactDetails.fname}
                lname= {props.contactDetails.lname}
                phone= {props.contactDetails.phone}
                email= {props.contactDetails.email}
                address= {props.contactDetails.address}
            />  
            <button onClick={editContactHandler}>Edit Contact</button>
            <button onClick={deleteContactHandler}>Delete Contact</button>
       </Fragment>
    );
}

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://ericshavkin:adminpass12321@cluster0.w5sbi.mongodb.net/contacts?retryWrites=true&w=majority');
    const db = client.db();
    const contactsCollection = db.collection('contacts');
    const contacts = await contactsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: true,
        paths: 
            contacts.map(contact => ({
                params: {
                    contactId: contact._id.toString()
                }
            })),
    }
}

export async function getStaticProps(context) {
    
    const contactId = context.params.contactId;
    
    const client = await MongoClient.connect('mongodb+srv://ericshavkin:adminpass12321@cluster0.w5sbi.mongodb.net/contacts?retryWrites=true&w=majority');
    const db = client.db();
    const contactsCollection = db.collection('contacts');
    const selectedContact = await contactsCollection.findOne({
        _id: ObjectId(contactId)
    });

    client.close();

    return {
        props: {
            contactDetails: {
                id: selectedContact._id.toString(),
                fname: selectedContact.fname,
                lname: selectedContact.lname,
                phone: selectedContact.phone,
                email: selectedContact.email,
                address: selectedContact.address
            }
        },
    };
}

export default viewContactPage;