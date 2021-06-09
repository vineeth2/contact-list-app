//Contacts page code

import { Fragment } from 'react';
import Head from 'next/head';

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
        </Fragment>
        
    );
}

export default ContactsPage;