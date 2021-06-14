//Add contact page code

import { Fragment } from "react";
import Head from 'next/head';
import Link from 'next/link';
import NewContactForm from '/components/NewContactForm';
import { useRouter } from 'next/router'
import { contacts, getAll, get, add } from '../libs/store'

function addContactPage() {
    const router = useRouter();
    async function addContactHandler(enteredContactData) {
        const temp_data = {
            fname: enteredContactData.fname,
            lname: enteredContactData.lname,
            email: enteredContactData.email,
            phone: enteredContactData.phone,
            address: enteredContactData.address,
            index: contacts.length
        }

        const response = await fetch('/api/contacts', {
            method: 'POST', 
            body: JSON.stringify(enteredContactData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        add(data[data.length - 1]);
        console.log('data', data);
        
        //var contacts = getAll()
        
        //contacts.push(temp_data)
        console.log('contacts', contacts);
        router.push('/contacts', null, { shallow: true })
    }

    return (
        <Fragment>
            <Head>
                <title>Add Contact</title>
            </Head>
            <h1>Add a new contact below</h1>
            <NewContactForm onAddContact={addContactHandler} />
            <Link href='/'>Back to home</Link>
        </Fragment>
    );
}

//test comment

export default addContactPage;