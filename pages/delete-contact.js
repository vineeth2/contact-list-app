import { Fragment } from 'react';
import { useRouter } from 'next/router';

function deleteContactPage() {
    const router = useRouter();
    async function confirmDeleteHandler() {
        //delete contact
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

export default deleteContactPage;