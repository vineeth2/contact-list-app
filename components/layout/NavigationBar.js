import classes from './NavigationBar.module.css';
import Link from 'next/link';

function NavigationBar() {
    return (
        <header className={classes.header}>
            <div>
                <ul className={classes.ul}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='contacts'>Contact List</Link>
                    </li>
                    <li>
                        <Link href='/add-contact'>Add Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default NavigationBar;