import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { contacts } from '../libs/store'

function deleteContactPage(props) {
    const router = useRouter();

    async function confirmDeleteHandler() {
        console.log('contacts before', contacts);
        console.log(getId().props.index);
        contacts.splice(getIndex(getId().props.index, 1));
        console.log("Deleting contact");
        console.log("contacts after", contacts);
        router.push('/contacts');
    }

    function revertDeleteHandler() {
        router.back();
    }

    return (
        <Fragment>
            <h2>Are you sure you'd like to delete this contact?</h2>
            <button onClick={confirmDeleteHandler}>Yes</button>
            <button onClick={revertDeleteHandler}>No, take me back</button>
        </Fragment>
    );
}

function getId() {
    return {
        props: {
            index: contacts
        }
    }
}

export default deleteContactPage;