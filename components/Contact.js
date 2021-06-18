import { useRouter } from 'next/router'
import classes from './Contact.module.css';
import Card from './card/Card';

function Contact(props) {
    const router = useRouter();
    function showDetailsHandler() {
        console.log("View page: ", props.id);
        router.push('/' + props.id, null, { shallow: true });
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <h3>{props.fname} {props.lname}</h3>
                    <h4>{props.phone}</h4>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailsHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default Contact;