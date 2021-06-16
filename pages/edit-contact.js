import { Fragment } from "react";
import Head from 'next/head';
import Link from 'next/link';
import NewContactForm from '/components/NewContactForm';
import { useRouter } from 'next/router'
import { contacts } from '../libs/store'

function editContactPage() {
    const router = useRouter();
    async function editContactHandler(enteredContactData) {
        const response2 = await fetch('/api/new-contact', {
            method: 'PUT', 
            body: JSON.stringify(enteredContactData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data2 = await response2.json();
        console.log('data', data2);

        router.push('/contacts');
    }

    return (
        <Fragment>
            <Head>
                <title>Edit Contact</title>
            </Head>
            <h1>Edit an existing contact below</h1>
            <NewContactForm onAddContact={editContactHandler} />
            <Link href='/'>Back to home</Link>
        </Fragment>
    );
}

export default editContactPage;
