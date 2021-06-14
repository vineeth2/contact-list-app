import { Fragment } from 'react';
import ContactDetails from '../components/ContactDetails'
//import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/router';
import { contacts, getAll, get } from '../libs/store'

function viewContactPage(props) {
    const router = useRouter();

    function editContactHandler() {
        router.push('/');
    }

    function deleteContactHandler() {
        router.push('/delete-contact');
    }

    if(!props.contactDetails) {
        return null
    }

    console.log('something')

    return (
        <>
            <ContactDetails 
                fname= {props.contactDetails.fname}
                lname= {props.contactDetails.lname}
                phone= {props.contactDetails.phone}
                email= {props.contactDetails.email}
                address= {props.contactDetails.address}
            />
            <div>hello</div>
            <button onClick={editContactHandler}>Edit Contact</button>
            <button onClick={deleteContactHandler}>Delete Contact</button>
       </>
    );
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: 
            contacts.map(contact => ({
                params: {
                    contactId: contact.index.toString()
                }
            })),
    }
}

export async function getStaticProps(context) {
    //var contacts = getAll()
    const contactId = context.params.contactId;
    console.log('contactId', contactId);
    console.log('contacts', contacts);
    if(contactId >= contacts.length) {
        return null
    }
    const selectedContact = get(contactId);

    fetch('api/contacts/' + contactId)
        .then(response => response.json())
        .then(data => console.log('data', data))

    return {
        props: {
            contactDetails: {
                index: selectedContact.index.toString(),
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