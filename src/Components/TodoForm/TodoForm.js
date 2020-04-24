import React,{useState} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import PropTypes from 'prop-types';

const TodoForm = (props) => {
    const [formData,setFormData] = useState([
        {
            text:' ',
            description : ' '
        }
    ])
    const handleChange = e => {
        setFormData ({
            ...formData,
            
            [e.target.name]: e.target.value
        }) 
        console.log(formData)

    }
    const handleSubmit = e => {
        console.log(formData)
        e.preventDefault()
        props.createTodo(formData)
        
        e.target.reset()
        setFormData([
            {text :' ',description: ' '}
        ])
    }
    return (
        <div>
        <Form onSubmit = {handleSubmit}>
            <FormGroup>
                <Label>Enter task</Label>
                <Input
                placeholder = "write some text"
                name = 'text'
               // value = {text}
                onChange = {handleChange}

            />
            </FormGroup>
            <FormGroup>
                <Label>descripe task</Label>
                <Input
                placeholder = "write some description your task"
                type = 'textarea'
                name = 'description'
               // value = {description}
                onChange = {handleChange}

            />
            </FormGroup>
            <Button type= "submit" >Create Task</Button>
            
        </Form>

            
        </div>
    );
};

TodoForm.propTypes = {
    createTodo : PropTypes.func.isRequired

}

export default TodoForm;