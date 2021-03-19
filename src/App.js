import { Button, Form, Container, Header } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const purchaseObject = { item: item, price: price, date: date };
    console.log(purchaseObject);
    const apiUrl =
      'https://sheet.best/api/sheets/ff0a57c7-d9c7-4164-84c6-94fced82f439';

    axios.post(apiUrl, purchaseObject).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className='App'>
      <Container fluid className='container'>
        <Header as='h2'>Expanse Tracker</Header>
        <Form className='form' onSubmit={submitForm}>
          <Form.Field>
            <label htmlFor='item'>Item</label>
            <input
              type='text'
              placeholder='What have you bought?'
              value={item}
              name='item'
              onChange={(e) => setItem(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='price'>Price</label>
            <input
              type='text'
              placeholder='How much did it cost?'
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor='date'>Date</label>
            <input
              type='text'
              name='date'
              placeholder='When did you bought the item?'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Field>
          <Button color='blue' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
