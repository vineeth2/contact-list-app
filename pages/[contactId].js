import { Fragment } from 'react';
import ContactDetails from '../components/ContactDetails'
import { useRouter } from 'next/router';
import Head from 'next/head';

function viewContactPage(props) {
    const router = useRouter();

    async function editContactHandler() {
        const ind = props.contactDetails.id;
        console.log('index', ind)

        const response = await fetch('${process.env.DOMAIN}/api/contacts', {
            method: 'PATCH',
            body: JSON.stringify(ind),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('data', data)
        router.push('/edit-contact');
        /*const response2 = await fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify(enteredContactData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response2.json();
        console.log('data', data)
        router.push('/contacts')

        return (
            <NewContactForm onAddContact={addContact} />
        )*/
    }

    async function deleteContactHandler() {
        const ind = props.contactDetails.id;
        console.log('index', ind)

        const response = await fetch('${process.env.DOMAIN}/api/contacts', {
            method: 'DELETE',
            body: JSON.stringify(ind),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        console.log('data', data);
        //console.log('contacts', contacts);

        //const del = contacts.splice(ind, 1);
        //console.log('del', del);

        /*
        contacts.forEach((contact, m) => {  //attempt at a loop to decrement index
            console.log('contact', contact);  //problem comes when trying to view details
            if (contact.index > ind) {        //indices no longer match 
                contact.index -= 1;
            }
        });*/

        router.push('/contacts');
    }

    if (!props.contactDetails) {
        return null
    }

    return (
        <Fragment>
            <Head>
                <title>{props.contactDetails.fname} {props.contactDetails.lname}</title>
            </Head>
            <ContactDetails 
                fname= {props.contactDetails.fname}
                lname= {props.contactDetails.lname}
                phone= {props.contactDetails.phone}
                email= {props.contactDetails.email}
                address= {props.contactDetails.address}
                id= {props.contactDetails.id}
            />
            <button onClick={editContactHandler}>Edit Contact</button>
            <button onClick={deleteContactHandler}>Delete Contact</button>
       </Fragment>
    );
}


export async function getStaticPaths() {
    const response = await fetch('${process.env.DOMAIN}/api/contacts');
    const contacts = await response.json();
    
    return {
        fallback: false,
        paths: 
            contacts.map(contact => ({
                params: {
                    contactId: contact.id.toString()
                }
            })),
    }
}

export async function getStaticProps(context) {
    const contactId = context.params.contactId;

    const response = await fetch('${process.env.DOMAIN}/api/contacts');
    const contacts = await response.json();

    const selectedContact = contacts[contactId];
    //const selectedContact = get(contactId);

    if (!selectedContact) {
        return {
            props: {
                contactDetails: {
                }
            },
        }
    }

    return {
        props: {
            contactDetails: {
                id: selectedContact?.id,
                fname: selectedContact?.fname,
                lname: selectedContact?.lname,
                phone: selectedContact?.phone,
                email: selectedContact?.email,
                address: selectedContact?.address
            }
        },
    };
}

export default viewContactPage;