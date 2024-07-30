import { IconButton } from '@mui/material'
import React from 'react'
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import BrowserUpdatedRoundedIcon from '@mui/icons-material/BrowserUpdatedRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import GroupRemoveRoundedIcon from '@mui/icons-material/GroupRemoveRounded';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    
    const navigate = useNavigate();

  return (
    <div className='home'>
        <h1>Welcome to Workforce Management for VJ Constructions</h1>
        <h2>Effortlessly manage employee tasks, attendance, and wages with our intuitive platform</h2>
        <div className='menu'>
            <div className='menu-item'>
                <IconButton  className=''
                    style={{ 
                        borderRadius: "50%",
                        padding: 30,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }} 
                    onClick={() => {
                        navigate("/createEmployee")
                    }}>
                    <PersonAddIcon fontSize='large' htmlColor='black'/>
                </IconButton>
                <p>Create Employee</p>
            </div>
            <div className='menu-item'>
                <IconButton 
                    style={{ 
                        borderRadius: "50%",
                        padding: 30,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }}
                    onClick={() => {
                        navigate("/getEmployee")
                    }}>
                    <EngineeringRoundedIcon fontSize='large' htmlColor='black'/>
                </IconButton>
                <p>Get Employee Details</p>
            </div>
            <div className='menu-item'>
                <IconButton 
                    style={{ 
                        borderRadius: "50%",
                        padding: 30,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }}
                    onClick={() => {
                        navigate("/employeeRegister")
                    }}>
                    <ApartmentRoundedIcon fontSize='large' htmlColor='black'/>
                </IconButton>
                <p>Employee Register (Site wise)</p>
            </div>
            <div className='menu-item'>
                <IconButton 
                    style={{ 
                        borderRadius: "50%",
                        padding: 30,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }}
                    onClick={() => {
                        navigate("/updateEmployee")
                    }}>
                    <BrowserUpdatedRoundedIcon fontSize='large' htmlColor='black'/>
                </IconButton>
                <p>Edit Employee Data</p>
            </div>
            <div className='menu-item'>
                <IconButton 
                    style={{ 
                        borderRadius: "50%",
                        padding: 30,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }}
                    onClick={() => {
                        navigate("/generateBill")
                    }}>
                    <ReceiptLongRoundedIcon fontSize='large' htmlColor='black'/>
                </IconButton>
                <p>Generate Bill</p>
            </div>
            <div className='menu-item'>
                <IconButton 
                    style={{ 
                        borderRadius: "50%",
                        padding: 30,
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                    }}
                    onClick={() => {
                        navigate("/deleteEmployee")
                    }}>
                    <GroupRemoveRoundedIcon fontSize='large' htmlColor='black'/>
                </IconButton>
                <p>Remove Employee</p>
            </div>
        </div>
    </div>
  )
}

export default Home