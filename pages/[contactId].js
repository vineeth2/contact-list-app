import { Fragment } from 'react';
import ContactDetails from '../components/ContactDetails'
import { useRouter } from 'next/router';
import Head from 'next/head';
import classes from './[contactId].module.css';

function viewContactPage(props) {
    const router = useRouter();

    async function editContactHandler() {
        const ind = props.contactDetails.id;
        console.log('index', ind)

        const response = await fetch('http://localhost:3000/api/contacts', {
            method: 'PATCH',
            body: JSON.stringify(ind),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('data', data)
        router.push('/edit-contact');
    }

    async function deleteContactHandler() {
        const ind = props.contactDetails.id;
        console.log('index', ind)

        const response = await fetch('http://localhost:3000/api/contacts', {
            method: 'DELETE',
            body: JSON.stringify(ind),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        console.log('data', data);

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
            <button className={classes.editButton} onClick={editContactHandler}>Edit Contact</button>
            <button className={classes.deleteButton} onClick={deleteContactHandler}>Delete Contact</button>
       </Fragment>
    );
}


export async function getStaticPaths() {
    const response = await fetch('http://localhost:3000/api/contacts');
    const contacts = await response.json();
    
    return {
        fallback: true,
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

    const response = await fetch('http://localhost:3000/api/contacts');
    const contacts = await response.json();

    const selectedContact = contacts[contactId];

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