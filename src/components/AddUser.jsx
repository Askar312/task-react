import React, { useContext, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { userContext } from '../contexts/MainContext';

const AddUser = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');

    let {addPerson}=useContext(userContext);

    function handleClick(){
        let newObj={
            name: name,
            image: image,
            number: number,
            email: email,
            status: false,
        }
        addPerson(newObj);
        setName('');
        setImage('');
        setNumber('');
        setEmail('');
    }


    return (
        <InputGroup className="mb-3" style={{ width: '90vw' }}>

    
    <FormControl
    value={name}
    onChange={(e) => setName(e.target.value)}
      placeholder="Enter the name"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <FormControl
    value={image}
    onChange={(e) => setImage(e.target.value)}
      placeholder="Enter Image"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <FormControl
    value={number}
    onChange={(e) => setNumber(e.target.value)}
      placeholder="Enter the number"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <FormControl
    value={email}
    onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter the email"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button onClick={handleClick} variant="outline-secondary" id="button-addon2">
      Add
    </Button>
  </InputGroup>
    );
};

export default AddUser;