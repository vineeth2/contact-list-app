//Home page Code
import { Fragment } from 'react';

function HomePage() {
    return (
        <Fragment>
            <h1>Welcome to Contacts!</h1>
            <h2>
                <a href="/contacts">NEW CONTACT LIST</a>  //takes you to contacts page
            </h2>
        </Fragment>
    );
}

export default HomePage;