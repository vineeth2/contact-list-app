import { getAll, get, add, remove, makeNull, replace } from '../../libs/store'

export default function handler(req, res) {
    if (req.method === 'POST') {
        add({...req.body, index: getAll().length})
        res.status(200).json(getAll())
    } else if (req.method === 'DELETE') {
        remove(req.body);
        res.status(200).json(getAll());
    } else if (req.method === 'PATCH') {
        makeNull(req.body);
    } else if (req.method === 'PUT') {
        replace(req.body);
    }else {
        if(req.query.id) {
            res.status(200).json(get(req.query.id))
        } else {
            res.status(200).json(getAll())
        }
    }
}