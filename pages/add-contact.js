//Add contact page code

import { Fragment } from "react";
import Head from 'next/head';
import Link from 'next/link';
import NewContactForm from '/components/NewContactForm';
import { useRouter } from 'next/router'

function addContactPage() {
    const router = useRouter();

    async function addContactHandler(enteredContactData) {
        const response = await fetch('/api/new-contact', {
            method: 'POST', 
            body: JSON.stringify(enteredContactData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

        router.push('/');
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