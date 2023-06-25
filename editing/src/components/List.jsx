import React from 'react'
import { useSelector } from "react-redux"
import { Item } from './Item';

export const List = () => {
    const { items, filterValue } = useSelector(state => state.form);
    return (
        <div className="list">
            {items.map((e, i) => filterValue === "" || e.name.indexOf(filterValue) >= 0 ? <Item key={i} index={i} item={e} /> : <></>)}
        </div>
    )
}
