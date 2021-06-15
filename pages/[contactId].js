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
        //router.push('/delete-contact');
        const ind = props.contactDetails.index; //gets the proper index
        console.log('index', ind)
        const contactsCopy = [];
        for (var i = 0; i < contacts.length; i++) { //copies contacts array into a dummy array
            contactsCopy.push(contacts[i]);
        }
        console.log('contacts', contacts);
        console.log('contatcsCopy', contactsCopy);
        contacts.splice(ind, 1);  //deletes proper index from contacts array
        /*for (var i = ind; i < contactsCopy.length; i++) { 
            contacts[i + 1] = contactsCopy[i];
        }*/
        contacts.forEach((contact, m) => {  //attempt at a loop to decrement index
            console.log('contact', contact);  //problem comes when trying to view details
            if (contact.index > ind) {        //indices no longer match 
                contact.index -= 1;
            }
        });

        router.push('/contacts');
    }

    if (!props.contactDetails) {
        return null
    }

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

    /*fetch('api/contacts/' + contactId)
        .then(response => response.json())
        .then(data => console.log('data', data))*/

    return {
        props: {
            contactDetails: {
                index: selectedContact.index,
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