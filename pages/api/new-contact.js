import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://ericshavkin:adminpass12321@cluster0.w5sbi.mongodb.net/contacts?retryWrites=true&w=majority');
        const db = client.db();

        const contactsCollection = db.collection('contacts');

        const result = await contactsCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: 'Contact successfully added!' });
    }
}

export default handler;