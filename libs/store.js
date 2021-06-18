export const contacts = [
    {
        fname: "Eric",
        lname: "Shavkin",
        phone: 1234567890,
        email: "eric.shavkin@ondotsystems.com",
        address: "123 Street Way",
        id: 0
    },
    {
        fname: "Fname",
        lname: "Lname",
        phone: 1111111111,
        email: "fnamelname@gmail.com",
        address: "098 Street Drive",
        id: 1
    }
]

export const add = (c) => {
    contacts.push(c)
}

export const get = (index) => {
    if (index >= contacts.length || index < 0) {
        return null
    }
    return contacts[index]
}

export const getAll = () => {
    return contacts
}

export const remove = (index) => {
    contacts.splice(index, 1)
    for (let i = index; i < contacts.length; i++) {
        contacts[i].id -= 1
    }
}

export const replace = (c) => {
    const index = contacts.indexOf(null)
    contacts.splice(index, 1, c)
}

export const makeNull = (i) => {
    contacts[i] = null
}