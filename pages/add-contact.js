import { Fragment } from "react";
import Head from 'next/head';
import Link from 'next/link';
import NewContactForm from '/components/NewContactForm';
import { useRouter } from 'next/router'

function addContactPage() {
    const router = useRouter();
    async function addContactHandler(enteredContactData) {
        console.log('entered data', enteredContactData)
        const response = await fetch('contact-list-app-azure.vercel.app/api/contacts', {
            method: 'POST',
            body: JSON.stringify(enteredContactData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log('data', data);
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

export default addContactPage;