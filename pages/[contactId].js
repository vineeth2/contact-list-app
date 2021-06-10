import { Fragment } from 'react';
import ContactDetails from '../components/ContactDetails'

function viewContactPage() {
    return (
       <ContactDetails 
            fname= "Eric" 
            lname= "Shavkin"
            phone= "123-456-7890"
            email= "eric.shavkin@ondotsystems.com"
            address= "321 address way"
            id= 'contact-1'
       />
    );
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: { 
                    contactId: 'contact-1',
                }, 
            },
            {
                params: {
                    contactId: 'contact-2',
                },
            },
        ],
    }
}

export async function getStaticProps(context) {
    
    const contactId = context.params.contactId;
    console.log(contactId);

    return {
        props: {
            contactDetails: {
                fname: "Eric", 
                lname: "Shavkin",
                phone: "123-456-7890",
                email: "eric.shavkin@ondotsystems.com",
                address: "321 address way",
                id: contactId,
            },
        },
    }
}

export default viewContactPage;