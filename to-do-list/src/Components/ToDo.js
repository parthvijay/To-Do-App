import React, { Component } from 'react';
import List from './List';
import "./ToDo.css";
import PropTypes from "prop-types";

export class Todo extends Component {
        state = { list: [], itemToAdd: '' };

        changeHandler = ev => {
          this.setState({ itemToAdd: ev.target.value });
        };

        addItem = (event) => {
          event.preventDefault();
          let newList = [...this.state.list];
          if (this.state.itemToAdd.length) {
            const obj = { name: this.state.itemToAdd, completed: false, id: Date.now() };
            newList.push(obj);
            this.setState({ list: newList, itemToAdd: '' });
          }
        }

        deleteItem = (key) => {
          const updatedList = this.state.list.filter((item) => {
            return item.name !== key;
          })
          this.setState({
            list: updatedList
          })
        }

        markComplete = (item) => {
          const checkedList = this.state.list.map((el) => {
            if(item.id === el.id) {
              el.completed = !el.completed
            }
            return el;
          })
          this.setState({ list: checkedList })
        }

        render() {
          return <div className="Todo">
            <form onSubmit={this.addItem}>
                <input className="input" type="text" value={this.state.itemToAdd} onChange={this.changeHandler} />
                <button className="button">Add Item</button>
            </form>
              <List complete={this.markComplete} listItems={this.state.list} remove={this.deleteItem} />
            </div>;
        }
      }

      Todo.PropTypes = {
        list: PropTypes.array,
        itemToAdd: PropTypes.string
      }

export default Todo;