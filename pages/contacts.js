import ContactList from '../components/ContactList';
import Head from 'next/head';
import { Fragment } from 'react';

function ContactsPage({ contacts }) {
    return (
        <Fragment>
            <Head>
                <title>View Contact List</title>
            </Head>
            <h1>Your Contact List</h1>
            <ContactList contacts={contacts} />
        </Fragment>
    );
}

export async function getStaticProps() {

    const response = await fetch('contact-list-app-azure.vercel.app/api/contacts', {
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
        revalidate: 10
    }
}


export default ContactsPage;