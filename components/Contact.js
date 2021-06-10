import { useRouter } from 'next/router'

import classes from './Contact.module.css';
import Card from './card/Card';

//Add image functionality

function Contact(props) {
    const router = useRouter();
    function showDetailsHandler() {
        router.push('/' + props.id);
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <h3>{props.name}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailsHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default Contact;