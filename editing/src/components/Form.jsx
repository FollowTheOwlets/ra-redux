import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../store/reducer"

export const Form = () => {
  const dispatch = useDispatch();
  const { items, changeItem, focus } = useSelector(state => state.form);

  const name = useRef();
  const price = useRef();

  const handleSave = (type) => () => {
    const action = {
      type,
      payload: {
        item: {
          name: name.current.value,
          price: price.current.value,
        }
      }
    }

    if (name.current.value.trim() !== "" && price.current.value.trim() != "")
      dispatch(action);
  };

  const handleUnfocus = () => {
    const action = {
      type: actions.FOCUS,
      payload: {
        focus: -1
      }
    }
    dispatch(action);
  };

  const handleChange = () => {
    const action = {
      type: actions.CHANGE,
      payload: {
        changeItem: {
          name: name.current.value,
          price: price.current.value,
        }
      }
    }
    dispatch(action);

  };

  return (
    <div className="form">
      <input type="text" ref={name} value={changeItem.name} onChange={handleChange} />
      <input type="text" ref={price} value={changeItem.price} onChange={handleChange} />
      <button onClick={focus !== -1 ? handleSave(actions.SAVE) : handleSave(actions.ADD)}> Save</button>
      {focus !== -1 && <button onClick={handleUnfocus} > Cancel</button>}
    </div >
  )
}
