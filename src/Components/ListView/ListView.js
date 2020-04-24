import React from 'react';
import { ListGroup} from 'reactstrap';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';


const ListView = ({todos,toggleSelect,toggleComplete}) => {
    console.log(todos)
    return (
       <ListGroup>
      {
        todos.map( todo => (
            <ListItem
            key = {todo.id}
            todo={todo}
            toggleSelect = {toggleSelect}
            toggleComplete = {toggleComplete}

            

            />

        ))
      }

       </ListGroup>
    );
};
ListView.propTypes={
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete : PropTypes.func.isRequired
}
export default ListView;