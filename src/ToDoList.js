import { Component } from "react";
import Icon from './icon.png'
import Swal from 'sweetalert2'

export class ToDoList extends Component {
    state = {
        userInput: '',
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please, enter what do you want to do'})
        } else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userInput: ''});
        }
    }

    deleteItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray});
    }

    crossWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input type='text' placeholder="What do you want to do?"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput} />
                </div>
                <div className="container">
                    <button className="add btn" onClick={() => this.addItem (this.state.userInput)}>ADD</button>
                </div>
                <div className="container">
                <ul>
                    {this.state.toDoList.map((item, index) => (<li onClick={this.crossWord} key={index}> <img src={Icon} alt='icon' width='20px' /> {item}</li>))}
                </ul>
                </div>
                <div className="container">
                    <button className="delete btn" onClick={() => this.deleteItem()}>DELETE</button>
                </div>
                </form>
                
            </div>
        )
    }
}

