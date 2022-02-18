import React, { useContext, useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { userContext } from '../contexts/MainContext';

const EditUser = () => {
    const { userToEdit, saveUser } = useContext(userContext);

    const [editPerson, setEditPerson] = useState(userToEdit);

    const navigate = useNavigate();


    useEffect(()=>{
        setEditPerson(userToEdit)
    }, [userToEdit])

    function editName(event){
        let newUser = {
            ...editPerson,
            name: event.target.value,

        }
        setEditPerson(newUser)
    }

    function editNumber(event){
        let newUser = {
            ...editPerson,
            number: event.target.value,

        }
        setEditPerson(newUser)
    }
    function editImage(event){
        let newUser = {
            ...editPerson,
            image: event.target.value,

        }
        setEditPerson(newUser)
    }
    function editEmail(event){
        let newUser = {
            ...editPerson,
            email: event.target.value,

        }
        setEditPerson(newUser)
    }
    return (
        <>
        {editPerson ? (
        <InputGroup className="mb-3" style={{ width: '90vw' }}>
            <FormControl
                value={editPerson.name}
                onChange={editName}
                placeholder="Enter the name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <FormControl
                value={editPerson.image}
                onChange={editImage}
                placeholder="Enter the name"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <FormControl
                value={editPerson.number}
                onChange={editNumber}
                placeholder="Enter the number"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <FormControl
                value={editPerson.email}
                onChange={editEmail}
                placeholder="Enter the email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <Button 
                onClick={()=>{
                    saveUser(editPerson);
                    navigate('/')
                }} 
                variant="outline-secondary" 
                id="button-addon2">
                Save
                </Button>
            </InputGroup>):(
                <h1> Loading... </h1>
        )}
        </>
    )
};

export default EditUser;