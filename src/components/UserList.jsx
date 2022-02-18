import React, { useContext, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../contexts/MainContext';

const UserList = () => {
    const {getUsers, users, deleteUsers, editUsers, changeStatus} = useContext(userContext)


    useEffect(()=>{
        getUsers();
    }, [])



    return (
        <div>
            {
                users.map((user)=>(
                <Card style={{ width: '18rem' }} 
                border={user.status ? 'danger' : ''} className='text-center'>
                    <Card.Header>Podfrontilo</Card.Header>
                        <Card.Body>
                            <Card.Title>name: {user.name} <input type="checkbox" 
                            checked={user.status}
                            onChange={()=>changeStatus(user.id)} />{' '}
                            </Card.Title>
                            <Card.Img variant="top" src={user.image} />
                            <Card.Subtitle className="mb-2 text-muted">number: {user.number}</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">email: {user.email}</Card.Subtitle>

                        
                            <Button onClick={()=>deleteUsers(user.id)}
                            id='button-list' >Delete</Button>

                            <Link to={'/edit'}>
                                <Button id='button-list' onClick={()=> editUsers(user.id)}>Edit</Button>
                            </Link>
                        </Card.Body>
                </Card>
                ))
            }
        </div>
    );
};

export default UserList;