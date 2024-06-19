import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const UserForm = ({addUser, updateUser, submitted, data, isEdit}) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [nic, setNic] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState(null);
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        if(!submitted) {
            setId('');
            setName('');
            setNic('');
            setEmail('');
            setDob('');
            setGender('');
            setCity('');
            setRole('')
        }
    }, [submitted]);

    useEffect(() => {
        if(data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
            setNic(data.nic);
            setEmail(data.email);
            setDob(data.dob);
            setGender(data.gender);
            setCity(data.city);
            setRole(data.role)
        }
    }, [data]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#f3ece7',
                marginBottom: '30px',
                marginTop: '-100px',
                display: 'block',
                // margin: '0 auto', // Adds margin from left and right, and centers the element horizontally
                // marginLeft: '50px',
                // marginRight: '50px'
                
            }}
        >
            
            <Grid item xs={12}>
                <Typography
                    component={'h1'}
                    sx={{
                        color: '#000000', // Change color to black
                        fontSize: '32px', // Increase font size to 32px
                        fontWeight: 'bold', // Make the font bold
                        marginBottom: '20px', // Add bottom margin for spacing
                    }}
                >
                    User Form
                </Typography>
            </Grid>
            
            {/* <Grid item xs={12} >
                <Typography component={'h1'} sx={{color: '#0000FF', fontSize: '20px', fontWeight: 'semibold', marginLeft: '80px'}}>User Form</Typography>
            </Grid> */}

            <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
                <Typography
                    component={'label'}
                    htmlFor='id'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        // marginLeft: '400px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    User ID
                </Typography>
                <input
                    type='number'
                    id='id'
                    name='id'
                    sx={{width: '200px'}}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{display: 'flex'}}>
                <Typography
                    component={'label'}
                    htmlFor='id'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        // marginLeft: '400px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Full Name
                </Typography>
                <input
                    type='text'
                    id='name'
                    name='name'
                    sx={{width: '400px'}}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='nic'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        // marginLeft: '400px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    NIC 
                </Typography>
                <input
                    type='text'
                    id='nic'
                    name='nic'
                    sx={{ width: '400px' }}
                    value={nic}
                    onChange={e => setNic(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='email'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        // marginLeft: '400px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Email
                </Typography>
                <input
                    type='email'
                    id='email'
                    name='email'
                    sx={{ width: '400px' }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='dob'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        // marginLeft: '400px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Date of Birth
                </Typography>
                <input
                    type='text'
                    id='dob'
                    name='dob'
                    sx={{ width: '400px' }}
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='gender'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        // marginLeft: '400px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Gender
                </Typography>
                <input
                    type='text'
                    id='gender'
                    name='gender'
                    sx={{ width: '400px' }}
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='city'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        // marginLeft: '400px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    City
                </Typography>
                <input
                    type='text'
                    id='city'
                    name='city'
                    sx={{ width: '400px' }}
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
            </Grid>

            {/* <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor='role'
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >
                    Role
                </Typography>
                <input
                    type='text'
                    id='role'
                    name='role'
                    sx={{ width: '400px' }}
                    value={role}
                    onChange={e => setRole(e.target.value)}
                />
            </Grid> */}

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#067fd0',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6',
                    }
                }}
                onClick={() => isEdit ? updateUser({id, name, nic, email, dob, gender, city, role}) : addUser({id, name, nic, email, dob, gender, city, role})}
            >
                {
                    isEdit ? 'Update' : 'Add'
                }                  
            </Button>

        </Grid>
    );
}

export default UserForm;
