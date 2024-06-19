import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import { Box } from '@mui/material';
import Axios from "axios";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {

        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    }

    const addUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            nic: data.nic,
            email: data.email,
            dob: data.dob,
            gender: data.gender,
            city: data.city,
            role: data.role
        }

        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(response => {
                getUsers();
                setSubmitted(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            nic: data.nic,
            email: data.email,
            dob: data.dob,
            gender: data.gender,
            city: data.city,
            role: data.role
        }

        Axios.put('http://localhost:3001/api/updateuser', payload)
            .then(response => {
                getUsers();
                setSubmitted(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    }

    const deleteUser = (data) => {

        Axios.post('http://localhost:3001/api/deleteuser', data)
            .then(response => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios Error: ", error);
            });
    }

    return (
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px',
                
            }}
        >
            <UserForm 
                addUser={addUser}
                updateUser={updateUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable 
                rows={users}
                selectedUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }} 
                deleteUser={data => 
                    window.confirm("Do you want to delete this user?") && deleteUser(data)
                }
            />
        </Box>
    );
}

export default Users;
