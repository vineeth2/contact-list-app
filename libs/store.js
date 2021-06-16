export const contacts = []

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