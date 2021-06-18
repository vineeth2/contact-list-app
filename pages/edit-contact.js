import { Fragment } from "react";
import Head from 'next/head';
import Link from 'next/link';
import EditContactForm from '/components/EditContactForm';
import { useRouter } from 'next/router'

function editContactPage() {
    const router = useRouter();
    async function editContactHandler(enteredContactData) {
        console.log('contact data', enteredContactData)
        const response = await fetch('http://localhost:3000/api/contacts', {
            method: 'PUT', 
            body: JSON.stringify(enteredContactData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('data', data);

        router.push('/contacts')
    }

    return (
        <Fragment>
            <Head>
                <title>Edit Contact</title>
            </Head>
            <h1>Edit an existing contact below</h1>
            <EditContactForm onEditContact={editContactHandler} />
            <Link href='/'>Back to home</Link>
        </Fragment>
    );
}

export default editContactPage;
