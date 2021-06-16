import { contacts, getAll, get, add, remove, makeNull, replace } from '../../libs/store'

export default function handler(req, res) {
    if (req.method === 'POST') {
        add({...req.body, id: getAll().length})
        res.status(200).json(getAll())
    } else if (req.method === 'DELETE') {
        remove(req.body)
        res.status(200).json(getAll());
    } else if (req.method === 'PATCH') {
        makeNull(req.body)
        res.status(200).json(getAll())
    } else if (req.method === 'PUT') {
        let index
        for (let i = 0; i < getAll().length; i++) {
            if (getAll()[i] === null) {
                index = i
            }
        }
        replace({...req.body, id: index})
        res.status(200).json(getAll())
    } else if (req.method === 'GET') {
        getAll()
        res.status(200).json(getAll())
    } else {
        if(req.query.id) {
            res.status(200).json(get(req.query.id))
        } else {
            res.status(200).json(getAll())
        }
    }
}