//Add contact page code

import { Fragment } from "react";
import Head from 'next/head';
import Link from 'next/link';

function addContactPage() {
    return (
        <Fragment>
            <Head>
                <title>Add Contact</title>
            </Head>
            <h1>Add a new contact below</h1>
            <Link href='/'>Back to home</Link>
        </Fragment>
    );
}

export default addContactPage;