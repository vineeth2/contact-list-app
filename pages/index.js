//Home page Code
import Link from 'next/link';
import { Fragment } from 'react';
import Head from 'next/head';

function HomePage() {
    return (
        //takes you to contacts page
        <Fragment>
            <Head>
                <title>Welcome to Contacts</title>
            </Head>
            <h1>Welcome to Contacts!</h1>
        </Fragment>
    );
}

export default HomePage;