import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DefaultButton, RemoveButton, SaveButton } from './styles'

import { editItemChanged } from '../store/actions'

import { itemService } from '../services'

export function EditItem({ onSave }) {

    const [childName, setChildName] = useState('')
    const [editItemName, setEditItemName] = useState('')
    const [childrenItems, setChildrenItems] = useState([])

    const editItem = useSelector(state => state.appState.editItem)
    const dispatch = useDispatch()

    useEffect(() => {
        if (editItem) {
            setEditItemName(editItem.name)
            setChildrenItems(editItem.children || [])
        }
    }, [editItem])

    function addChild() {
        if (childName) {
            const temp = [...childrenItems]
            temp.push({ id: itemService.generateId(), name: childName, children: [] })
            setChildrenItems(temp)
            setChildName('')
        }
    }

    function removeChild(removeId) {
        setChildrenItems(childrenItems.filter(p => p.id !== removeId))
    }

    function save() {
        if (editItemName) {
            onSave({ id: editItem.id, name: editItemName, children: childrenItems })
            try {
                dispatch(editItemChanged(null))
            } catch {
                dispatch(editItemChanged(null))
            }
        }
    }

    return (
        <fieldset style={{ margin: 20, width: 300, borderRadius: 10 }}>
            <legend>Guest</legend>
            <input placeholder='Name' value={editItemName} onChange={e => setEditItemName(e.target.value)} />
            <br /><br />
            <span>Children</span>
            <ul>
                {(childrenItems || []).map((p, i) => <li key={i}>{p.name}<RemoveButton onClick={() => removeChild(p.id)}>REMOVE</RemoveButton></li>)}
            </ul>
            <input placeholder='Name' value={childName} onChange={e => setChildName(e.target.value)} />
            <DefaultButton style={{ marginLeft: 10 }} onClick={() => addChild()}>ADD</DefaultButton>
            <br /><br />
            <div style={{ textAlign: 'center' }}>
                <DefaultButton onClick={() => dispatch(editItemChanged(null))}>CANCEL</DefaultButton>
                <SaveButton style={{ marginLeft: 10 }} onClick={() => save()}>SAVE</SaveButton>
            </div>
        </fieldset>
    )
}