import styled from 'styled-components'

import { FiEdit2 } from 'react-icons/fi'

export const DefaultButton = styled.button`
    border: none;
    border-radius: 4px;
    padding: 6px;
    transition: 200ms;
    cursor: pointer;
    &:hover {
        opacity: .7;
    }
`

export const RemoveButton = styled(DefaultButton)`
    margin-left: 5px;
    font-size: 10px;
    background-color: red;
    padding: 4px;
    color: white;
`

export const SaveButton = styled(DefaultButton)`
    background-color: #4fa64f;
    color: white;
`

export const EditIcon = styled(FiEdit2)`
    margin-left: 4px;
    cursor: pointer;
    color: white;
    &:hover {
        opacity: .8;
    }
`

export const ChildItemNameContainer = styled.li`
    span span:hover {
        cursor: default;
        opacity: .8;
    }
    span svg {
        display: none;
    }
    span:hover svg {
        display: inline;
    }
`

export const TotalSpan = styled.span`
    font-size: 12px;
    border-radius: 50%;
    padding: 1px 5px;
    color: black;
    background-color: white;
    margin-left: 4px;
    &:hover {
        cursor: pointer !important;
    }
`