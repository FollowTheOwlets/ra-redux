import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../store/reducer"

export const Filter = () => {
    const dispatch = useDispatch();
    const { items, changeItem, focus, filterValue } = useSelector(state => state.form);

    const filter = useRef();

    const handleChangeFilter = () => {
        const action = {
            type: actions.FILTER,
            payload: {
                filterValue: filter.current.value.trim()
            }
        }

        dispatch(action);
    };

    return (
        <div className="filter">
            <input type="text" ref={filter} value={filterValue} onChange={handleChangeFilter} />
        </div >
    )
}
