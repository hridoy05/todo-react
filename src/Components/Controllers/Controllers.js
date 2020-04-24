import React from 'react';
import PropTypes from 'prop-types';
import SearchPanel from './SearchPanel';
import { Row, Col } from 'reactstrap';
import FilterController from './FilterController';
import ViewController from './ViewController';
import BulkController from './BulkController';

const ControllerPart = ({term,view, changeView,handleSearch,toggleForm,handleFilter,clearSelected,clearCompleted,reset}) => {
    
    console.log(toggleForm)
    return (
        <div>
            <SearchPanel
                term = {term}
                handleSearch = {handleSearch}
                toggleForm = {toggleForm}
            />

            <Row className='my-4'>
            <Col md={{size : 4 }}>           
            <FilterController handleFilter={handleFilter}/>
            </Col>
            <Col md={{size : 4 }}>
            <ViewController view={view} changeView = {changeView}  />
            </Col>
            <Col md={{size : 4 }} className='d-flex'>
            <div className="mi-auto">
                <BulkController 
                    clearSelected = {clearSelected}
                    clearCompleted = {clearCompleted}
                    reset = {reset}
                />
            </div>

            </Col>

            </Row>
        </div>
    );
};
ControllerPart.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch : PropTypes.func.isRequired,
    toggleForm : PropTypes.func.isRequired,
    handleFilter : PropTypes.func.isRequired,
    view : PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
    clearCompleted : PropTypes.func.isRequired,
    clearSelected : PropTypes.func.isRequired,
    reset : PropTypes.func.isRequired


}
export default ControllerPart;