export const contacts = [
    {
        fname:'fname',
        lname:'lname',
        email:'email',
        phone:'phone',
        address:'address',
        index: 0,
    },
    {
        fname:'fname2',
        lname:'lname2',
        email:'email2',
        phone:'phone2',
        address:'address2',
        index: 1,
    }
]
export const add = (c) => {
    contacts.push(c)
}

export const get = (index) => {
    if(index >= contacts.length || index < 0) {
        return null
    }
    return contacts[index]
}

export const getAll = () => {
    return contacts
}