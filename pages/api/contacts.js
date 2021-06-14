import { getAll, get, add } from '../../libs/store'

export default function handler(req, res) {
    if (req.method === 'POST') {
        add({...req.body, index: getAll().length})
        res.status(200).json(getAll())
    } else {
        if(req.query.id) {
            res.status(200).json(get(req.query.id))
        } else {
            res.status(200).json(getAll())
        }
    }
}