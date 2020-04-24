import React, { Component } from 'react';
import ListView from '../ListView/ListView';
import TableView from '../TableView/TableView';
import ControllerPart from '../Controllers/Controllers';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import TodoForm from '../TodoForm/TodoForm';
import shortid from 'shortid'

class Todo extends Component {
    state = {
        todos: [
            {
                id: 'tyhyg67tyg78gh',
                text: 'main todo text',
                description: "simple description",
                time : new Date(),
                isComplete : false,
                isSelect : false
            },
            {
                id: 'hg78hguyh',
                text: ' text',
                description: "simple description",
                time : new Date(),
                isComplete : false,
                isSelect : false
            },
            {
                id: 'hg787897978h',
                text: 'todo text',
                description: "simple description",
                time : new Date(),
                isComplete : false,
                isSelect : false
            }
        ],

        isOpenTodoForm : false,
        searchTerm : '',
        view : 'list',
        filter: 'all'
    };

    toggleSelect = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoId)
        todo.isSelect = !todo.isSelect

        this.setState({todos})
    }
    
    toggleComplete = todoId => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id===todoId)
        todo.isComplete = !todo.isComplete
        this.setState({todos})

    }

    toggleForm = () => {
        this.setState({
            isOpenTodoForm : !this.state.isOpenTodoForm
        })

    }

    handleSearch = value => {
        this.setState({
            searchTerm: value
        })
    }

    createTodo = todo => {

        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false

        const todos = [todo, ...this.state.todos]
        console.log(todos)
        this.setState({todos})
        this.toggleForm()
    }

    handleFilter = filter =>{
        this.setState({filter})

    }
    performFilter = todos =>{
        const {filter} = this.state
        if(filter==='completed'){
            return todos.filter(todo => todo.isComplete)
        } else if (filter === 'running'){
            return todos.filter(todo=> !todo.isComplete)
        } else{
            return todos
        }
    }
    changeView = (event) =>{
        this.setState({
            view: event.target.value
        })

    }

    clearSelected = () =>{
        const todos = this.state.todos.filter(todo =>!todo.isSelect)
        this.setState({todos})

    }
    clearCompleted = () =>{
        const todos = this.state.todos.filter(todo =>!todo.isComplete)
        this.setState({todos})
    }
    reset = () =>{
        this.setState({
            filter : 'all',
            searchTerm: '',
            view : 'list',
            isOpenTodoForm : false


        })
        
    };

    performSearch = () =>{
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    }
    getView = () =>{
        let todos = this.performSearch()
        todos = this.performFilter(todos)
        return this.state.view === 'list'? 
        (
            <ListView
            todos = {todos}
            toggleSelect = {this.toggleSelect}
            toggleComplete={this.toggleComplete}
            >

            </ListView>
        )
            

        : (
            <TableView
                todos = {todos}
                toggleSelect = {this.toggleSelect}
                toggleComplete={this.toggleComplete}
                >

                </TableView>
        )
            
        

    }
    render() {
        return (
            <div>
                <h3 className='display-4 text-center m-5'>Todo List</h3>
                <ControllerPart
                term = {this.state.searchTerm}
                view = {this.state.view}
                handleFilter = {this.handleFilter}
                changeView = {this.changeView}
                clearCompleted = {this.clearCompleted}
                clearSelected = {this.clearSelected}
                reset = {this.reset}
                toggleForm= {this.toggleForm}
                handleSearch = {this.handleSearch}
                >

                </ControllerPart>
               <div>
               {
                   this.getView()
               }
               </div>
               <Modal
               isOpen = {this.state.isOpenTodoForm}
               toggle = {this.toggleForm}
               >
               <ModalHeader
               toggle = {this.toggleForm}
               >Create Todo Form

               </ModalHeader>
               <ModalBody>
                   <TodoForm
                   createTodo = {this.createTodo}

                   >

                   </TodoForm>
               </ModalBody>

               </Modal>

            </div>
        );
    }
}

export default Todo;