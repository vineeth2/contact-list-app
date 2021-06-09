//Home page Code
import Link from 'next/link';
import { Fragment } from 'react';

function HomePage() {
    return (
        //takes you to contacts page
        <Fragment>
            <h1>Welcome to Contacts!</h1>
            <h2>
                <Link href="/contacts">NEW CONTACT LIST</Link>
            </h2>
        </Fragment>
    );
}

export default HomePage;