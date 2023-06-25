import React from 'react'
import { useDispatch } from "react-redux"
import { actions } from "../store/reducer"

export const Item = ({ index, item }) => {
    const dispatch = useDispatch();

    const handleFocus = () => {
        const action = {
            type: actions.FOCUS,
            payload: {
                focus: index
            }

        }
        dispatch(action);
    };

    const handleRemove = () => {
        const action = {
            type: actions.REMOVE,
            payload: {
                focus: index
            }
        }
        dispatch(action);
    };

    return (
        <div className="item">
            <span className="item__name">{item.name}</span>
            <span className="item__price">{item.price}</span>
            <span className="btn" onClick={handleFocus}>edit</span>
            <span className="btn" onClick={handleRemove}>del</span>
        </div>
    )
}
