import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Createuser = () => {

    const [createdata, setcreatedata] = useState({
        name: "",
        email: "",
        username: "",
        phone: "",
    })

    const handlesubmit = (e) => {
        e.preventDefault()

        // Validation check
        const { name, email, username, phone } = createdata;
        
        if (!name || !email || !username || !phone) {
            alert("Please complete all fields before submitting.");
            return;
        }

        // Email validation check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email) || !email.endsWith('.com')) {
            alert("Please enter a valid email address ending with .com");
            return;
        }

        axios.post("http://localhost:3000/users", createdata)
            .then((res) => {
                alert("User created successfully");
                // Reset the form
                setcreatedata({
                    name: "",
                    email: "",
                    username: "",
                    phone: "",
                });
            })
            .catch((err) => alert("User was not created"))
    }

    return (
        <form onSubmit={handlesubmit}>
            <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
                <Typography variant='h4' sx={{ marginBottom: 5 }}>
                    Create User
                </Typography>
                <TextField sx={{ mb: 3 }}
                    onChange={(e) => setcreatedata({ ...createdata, name: e.target.value })}
                    fullWidth
                    label="Name"
                    value={createdata.name}
                />
                <TextField sx={{ mb: 3 }}
                    onChange={(e) => setcreatedata({ ...createdata, email: e.target.value })}
                    fullWidth
                    label="Email"
                    value={createdata.email}
                />
                <TextField sx={{ mb: 3 }}
                    onChange={(e) => setcreatedata({ ...createdata, username: e.target.value })}
                    fullWidth
                    label="Username"
                    value={createdata.username}
                />
                <TextField sx={{ mb: 3 }}
                    onChange={(e) => setcreatedata({ ...createdata, phone: e.target.value })}
                    fullWidth
                    label="Phone"
                    value={createdata.phone}
                />
                <Button variant='contained' type='submit' sx={{ padding: 2, width: 150 }}>Create</Button>

                <NavLink to={'/'}><Button variant='contained' type='submit' sx={{padding:2 , width: 150, marginLeft:79}}>Back to Home</Button></NavLink>
            </Paper>
        </form>
    )
}

export default Createuser;
