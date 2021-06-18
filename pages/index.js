import Link from 'next/link';
import { Fragment } from 'react';
import Head from 'next/head';
import classes from '../components/layout/Layout.module.css'

function HomePage() {
    return (
        <Fragment>
            <Head>
                <title>Welcome to Contacts</title>
            </Head>
            <h1>Welcome to Contacts!</h1>
            <h2>by Eric and Vineeth</h2>
            <div>
                <p>Welcome to the home page for our Contact List App. Navigate through
                    the different pages using the navigation bar above. View all the code
                    for our web app on our <a className={classes.a}
                    href="https://github.com/vineeth2/contact-list-app">GitHub repository</a>.
                </p>
            </div>
        </Fragment>
    );
}

export default HomePage;