import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import Todo from './Components/Todo/Todo';


const App = () => {
  return (
    <Container className="my-3">
    <Row>
    <Col>
    <Todo></Todo>
    
    
     
    </Col>
    </Row>

    </Container>
  );
};

export default App;