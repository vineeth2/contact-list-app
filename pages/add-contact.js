//Add contact page code

import { Fragment } from "react";
import Head from 'next/head';
import Link from 'next/link';
import NewContactForm from '/components/NewContactForm';
import { useRouter } from 'next/router'
import { temp_contacts } from './contacts';

function addContactPage() {
    const router = useRouter();
    async function addContactHandler(enteredContactData) {
        const temp_data = {
            fname: enteredContactData.fname,
            lname: enteredContactData.lname,
            email: enteredContactData.email,
            phone: enteredContactData.phone,
            address: enteredContactData.address,
            index: temp_contacts.length
        }
        temp_contacts.push(temp_data);
        console.log(temp_contacts);
        router.push('/contacts');
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