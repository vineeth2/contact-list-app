//Contacts page code

import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const temp_contacts = [
    {
        Name: 'Vineeth',
        Email: 'vineeth.krishnamurthy@ondotsystems.com'
    }
]

function ContactsPage() {
    return (
        <Fragment>
            <Head>
                <title>Contact List</title>
            </Head>
            <div>
                temp_contacts
            </div>
            <h2>
                <Link href="/add-contact">Add New Contact</Link>
            </h2>
            <Link href='/'>Back to home</Link>
        </Fragment>
        
    );
}

export default ContactsPage;