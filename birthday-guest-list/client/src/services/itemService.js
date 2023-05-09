const KEY = 'BIRTHDAY_LIST'

const DEFAULT_DATA = JSON.parse(localStorage.getItem(KEY)) || {
    id: generateId(),
    name: 'Família',
    children: []
}

let id = 0
let currentData = DEFAULT_DATA

fixIds(DEFAULT_DATA)

function fixIds(item) {
    item.id = generateId()
    if (!item.children)
        return
    for (let i of item.children)
        fixIds(i)
}

function generateId() {
    return ++id
}

function findChild(item, findId) {
    if (item.id === findId)
        return item
    if (!item.children)
        return null
    for (let i of item.children) {
        const found = findChild(i, findId)
        if (found)
            return found
    }
    return null
}

function countItems(item) {
    let total = 1
    if (!item.children)
        return total
    for (let i of item.children) {
        total += countItems(i)
    }
    return total
}


function saveData(data) {
    currentData = data
    localStorage.setItem(KEY, JSON.stringify(data))
}

function getData() {
    return currentData
}

export const itemService = {
    DEFAULT_DATA,
    generateId,
    findChild,
    countItems,
    saveData,
    getData
}