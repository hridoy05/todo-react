import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const BulkController = ({clearSelected, clearCompleted,reset}) => {
    return (
        <ButtonGroup>
            <Button color='danger' onClick={clearSelected}>clearSelected</Button>
            <Button color='danger' onClick={clearCompleted}>clearCompleted</Button>
            <Button color='danger' onClick={reset}>reset</Button>
        </ButtonGroup>
    );
};

BulkController.propTypes = {
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset : PropTypes.func.isRequired
}

export default BulkController;