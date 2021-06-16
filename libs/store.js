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
}

export const replace = (c) => {
    let index
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i] === null) {
            index = i
            break
        }
    }
    contatcs.splice(index, 1, c)
}

export const makeNull = (i) => {
    contacts[i] = null
}