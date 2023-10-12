import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const style = {
  width: '23%'
}

function App() {
  const [operation, changeOperation] = useState("Addition")
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(10);
  const [result, setResult] = useState(null);

  function Addition() {
    const result = num1 + num2;
    setResult(result);
    changeOperation("Addition");

  }
  function Subtraction() {
    const result = num1 - num2;
    setResult(result);
    changeOperation("Subtraction");

  }
  function Multiplication() {
    const result = num1 * num2;
    setResult(result);
    changeOperation("Multiplication");

  }
  function Division() {
    const result = num1 / num2;
    setResult(result);
    changeOperation("Division");
  }

  return (
    <>
      <ListGroup style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-evenly' }}>
        <ListGroup.Item style={{ width: '31%' }}>Number 1
          <Form.Control style={{ marginTop: '10px' }} type="email" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
        </ListGroup.Item>
        <ListGroup.Item style={{ width: '31%' }}>Number 2
          <Form.Control style={{ marginTop: '10px' }} type="email" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
        </ListGroup.Item>
        <ListGroup.Item style={{ width: '31%' }}>Current Operation:  <b>{operation}</b></ListGroup.Item>
      </ListGroup>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', marginTop: '20px' }}>
        <Button style={style} variant="outline-dark" onClick={Addition}>Addition</Button>
        <Button style={style} variant="outline-info" onClick={Subtraction}>Subtraction</Button>{' '}
        <Button style={style} variant="outline-warning" onClick={Multiplication}>Multiplication</Button>{' '}
        <Button style={style} variant="outline-danger" onClick={Division}>Division</Button>{' '}
      </div>
        <Alert variant="primary" style={{ width: '97%', margin: '50px auto 0' }}>
          The Result of {operation} is {result}
        </Alert>
    </>
  );
}

export default App;
