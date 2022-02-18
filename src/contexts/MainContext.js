import axios from "axios";
import React, { useReducer } from "react";

export const userContext = React.createContext();

const INIT_STATE = {
    users: [],
    userToEdit: null,
}



const reducer = (state = INIT_STATE, action) => {
    switch (action.type){
        case "GET_USERS":
            return { ...state, users: action.payload };

        case 'EDIT_USER':
            return {...state, userToEdit: action.payload }
        
        default:
            return state;
    }
}

const UserContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getUsers = async() => {
        let { data } = await axios('http://localhost:8000/users')
        dispatch({
            type: 'GET_USERS',
            payload: data,
        })
    }

    const addPerson = async (newUser)=>{
        // console.log(newUser)
        await axios.post('http://localhost:8000/users', newUser)
        getUsers();
    }

    const deleteUsers = async (id)=>{
        await axios.delete(`http://localhost:8000/users/${id}`)
        getUsers();
    }

    const editUsers = async (id) =>{
        let {data} = await axios(`http://localhost:8000/users/${id}`)
        
        dispatch({
            type: 'EDIT_USER',
            payload: data,
        })
    }



    const saveUser = async (newUser) => {
        await axios.patch(`http://localhost:8000/users/${newUser.id}`, newUser)

        getUsers();
    }

    const changeStatus = async(id)=>{
        let {data} = await axios (`http://localhost:8000/users/${id}`)
        
        await axios.patch(`http://localhost:8000/users/${id}`, {
            status: !data.status,
        });
        getUsers()
    };

    return <userContext.Provider value={{ 
        addPerson, 
        getUsers, 
        deleteUsers, 
        editUsers,
        saveUser,
        changeStatus, 
        users: state.users, 
        userToEdit: state.userToEdit, 
    }}>
        {children}
    </userContext.Provider>
}


export default UserContextProvider

