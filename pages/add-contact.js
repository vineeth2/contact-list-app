//Add contact page code

import { Fragment } from "react";
import Head from 'next/head';
import Link from 'next/link';
import NewContactForm from '/components/NewContactForm';
import { useRouter } from 'next/router'
import return_array from './temp_array';

function addContactPage() {
    const router = useRouter();
    async function addContactHandler(enteredContactData) {
        var temp1 = return_array;
        temp1.push(enteredContactData);
        console.log(return_array);
    }

    return (
        <Fragment>
            <Head>
                <title>Add Contact</title>
            </Head>
            <NewContactForm onAddContact={addContactHandler} />
            <Link href='/'>Back to home</Link>
        </Fragment>
    );
}

//test comment


export default addContactPage;