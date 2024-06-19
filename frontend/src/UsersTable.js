import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UsersTable = ({rows, selectedUser, deleteUser}) => {

    const navigate = useNavigate();

    // const logout = () => {
    //     // Navigate back to the previous page
    //     navigate();
    // };

    return (
        <box>
            {/* <button className="user-btn" onClick={() => navigate('/users')}>Welcome</button> */}
            <Button 
                onClick={() => navigate('/')} variant="outlined" 
                sx={{ 
                    backgroundColor: '#067fd0', 
                    color: '#000000', 
                    marginTop: '20px', 
                    marginRight: '20px', 
                    position: 'absolute', 
                    top: '10px', 
                    right: '10px' 
                    }}>
                        Logout
            </Button>
            
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ backgroundColor: '#000', color: '#FFF' }}>
                        <TableRow >
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>User ID</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Full Name</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>NIC</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Email</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date of Birth</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Gender</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>City</TableCell>
                            {/* <TableCell>Role</TableCell> */}
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Update</TableCell>
                            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{ backgroundColor: '#b9b0b0'}}>
                        {
                            rows.length > 0 ? rows.map(row => (
                                <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border: 0}}}>
                                    <TableCell component='th' scope='row'>{row.id}</TableCell>
                                    <TableCell component='th' scope='row'>{row.name}</TableCell>
                                    <TableCell component='th' scope='row'>{row.nic}</TableCell>
                                    <TableCell component='th' scope='row'>{row.email}</TableCell>
                                    <TableCell component='th' scope='row'>{row.dob}</TableCell>
                                    <TableCell component='th' scope='row'>{row.gender}</TableCell>
                                    <TableCell component='th' scope='row'>{row.city}</TableCell>
                                    {/* <TableCell component='th' scope='row'>{row.role}</TableCell> */}
                                    <TableCell>
                                        <Button
                                            // sx={{margin:"0px 0px"}}
                                            onClick={() => selectedUser({id: row.id, name: row.name, nic:row.nic, email:row.email, dob:row.dob, gender:row.gender, city:row.city})}
                                        >
                                            Update
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                    <Button
                                            // sx={{margin:"0px 0px"}}
                                            onClick={() => deleteUser({id: row.id})}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow key={rows.id} sx={{'&:last-child td, &:last-child th' : {border: 0}}}>
                                    <TableCell component='th' scope='row'>No Data</TableCell>
                                </TableRow>
                            )
                            
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </box>
    
    );
}

export default UsersTable;