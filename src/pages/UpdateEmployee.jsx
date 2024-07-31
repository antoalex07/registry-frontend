import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { KeyboardBackspaceRounded } from '@mui/icons-material'
import { Button, createTheme, InputBase, Paper, ThemeProvider } from '@mui/material';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import MoreTimeRoundedIcon from '@mui/icons-material/MoreTimeRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

const UpdateEmployee = () => {

  const navigate = useNavigate();

  const [ employee, setEmployee ] = useState({
    empId: "",
    name: "",
    worksite: "",
    wageRate: "",
    overtimeRate: "",
    dueAmount: ""
  });

  const handleIdChange = (event) => {
    const id = event.target.value;
    // try {
      
    // } catch (error) {
      
    // }
  }

  const handleChange = (event) => {
      
    const {id, value} = event.target;
    setEmployee({...employee, [id]: value})
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        event.preventDefault();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(employee);
    console.log(jsonData);
    // try {
      
    // } catch (error) {
      
    // }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#44b386',
      },
    },
  });

  return (
    <div className='update-employee'>
        <div className='form'>
          <div className='image'>
            <KeyboardBackspaceRounded 
                className="back-button" 
                htmlColor='#818283' 
                onClick={() => {
                  navigate("/");
                }}/>
          </div>
          <div className='edit-form'>
            <h2>Update Employee</h2>
            <Paper className='paper' component="form">
            <BadgeRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
            <InputBase id='empId'
                       sx={{ flex: 1, 
                             marginLeft: '10px', 
                             fontSize: '18px',
                             "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                             "& input[type=number]": { MozAppearance: "inputbase" } 
                        }} 
                       placeholder='Employee ID'
                       type='number'
                       onKeyDown={handleKeyPress}
                       onChange={handleIdChange}
                       value={employee.empId}/>
          </Paper>
          <Paper className='paper' component="form">
            <AccountCircleRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
            <InputBase id='name'
                       sx={{ flex: 1, 
                             marginLeft: '10px', 
                             fontSize: '18px', 
                          }}
                        placeholder='Name'
                        type='text'
                        required
                        onKeyDown={handleKeyPress}
                        onChange={handleChange}
                        value={employee.name}/>   
          </Paper>
          <Paper className='paper' component="form">
            <AccountBalanceRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
            <InputBase id='worksite'
                       sx={{ flex: 1, 
                             marginLeft: '10px', 
                             fontSize: '18px', 
                          }}
                        placeholder='Worksite'
                        type='text'
                        required
                        onKeyDown={handleKeyPress}
                        onChange={handleChange}
                        value={employee.worksite}/>   
          </Paper>
          <Paper className='paper' component="form">
            <EngineeringRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
            <InputBase id='wageRate'
                       sx={{ flex: 1, 
                             marginLeft: '10px', 
                             fontSize: '18px',
                             "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                             "& input[type=number]": { MozAppearance: "inputbase" }
                          }}
                        placeholder='Wage Rate'
                        type='number'
                        required
                        onKeyDown={handleKeyPress}
                        onChange={handleChange}
                        value={employee.wageRate}/>
          </Paper>
          <Paper className='paper' component="form">
            <MoreTimeRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
            <InputBase id='overtimeRate'
                       sx={{ flex: 1, 
                             marginLeft: '10px', 
                             fontSize: '18px',
                             "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                             "& input[type=number]": { MozAppearance: "inputbase" }
                          }}
                       placeholder='Overtime Rate'
                       type='number'
                       required
                       onKeyDown={handleKeyPress}
                       onChange={handleChange}
                       value={employee.overtimeRate}/>   
          </Paper>
          <Paper className='paper' component="form">
            <SavingsRoundedIcon sx={{ml: 1}} htmlColor='#818283' /> 
            <InputBase id='dueAmount'
                       sx={{ flex: 1, 
                             marginLeft: '10px', 
                             fontSize: '18px',
                             "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": { display: "none" },
                             "& input[type=number]": { MozAppearance: "inputbase" }
                          }}
                       placeholder='Due Amount'
                       type='number'
                       required
                       onKeyDown={handleKeyPress}
                       onChange={handleChange}
                       value={employee.dueAmount}/>
          </Paper>
          <ThemeProvider theme={theme}>
            <Button variant='contained' className='submit-button' onClick={handleSubmit}>
              Update
            </Button>
          </ThemeProvider>
          </div>
        </div>
    </div>
  )
}

export default UpdateEmployee