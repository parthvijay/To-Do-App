import React from 'react';
import "./ToDo.css";

const List = (props) => {
  let list = props.listItems.map((item) => {
    const isCompleted = item.completed ? "line" : 'listItems';

    return <li className={isCompleted} key={item.id}>
        <input className="checkItem" type="checkbox" onChange={() => props.complete(item)} />
        {item.name}
        <button className="deleteItem" onClick={() => props.remove(item.name)}>
          X
        </button>
      </li>;
  });
  return <ol>{list}</ol>;
}

export default List;