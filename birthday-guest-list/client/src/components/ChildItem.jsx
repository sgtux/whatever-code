import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { EditIcon, ChildItemNameContainer, TotalSpan } from './styles'
import { editItemChanged } from '../store/actions'

import { itemService } from '../services'

export function ChildItem({ item }) {

    const [show, setShow] = useState(true)
    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!show) {
            setTotal(itemService.countItems(item) - 1)
        }
    }, [show])

    function changeEditItem() {
        dispatch(editItemChanged(item))
    }

    return (
        <ul>
            <ChildItemNameContainer>
                <span>
                    <span onClick={() => setShow(!show)}>{item.name}</span>
                    {!show && <TotalSpan onClick={() => setShow(!show)}>{total}</TotalSpan>}
                    <EditIcon size={12} color="white" onClick={() => changeEditItem()} />
                </span>
            </ChildItemNameContainer>
            {show && item.children && item.children.map((p, i) => <ChildItem
                item={p}
                key={i} />)}
        </ul>
    )
}