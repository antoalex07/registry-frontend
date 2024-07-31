import { Button, createTheme, InputBase, Paper, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { KeyboardBackspaceRounded } from '@mui/icons-material';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';
import MoreTimeRoundedIcon from '@mui/icons-material/MoreTimeRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const CreateEmployee = () => {
    
    const navigate = useNavigate();

    const [ employee, setEmployee ] = useState({
      empId: '',
      name: '',
      worksite: '',
      wageRate: '',
      overtimeRate: '',
      dueAmount: ''
    })
    const [ errors, setErrors ] = useState({
      empId: '',
      name: '',
      worksite: '',
      wageRate: '',
      overtimeRate: '',
      dueAmount: ''
    })
    const [dialog, setDialog] = useState({
      open: false,
      message: "",
      success: false
     })
    
    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
          event.preventDefault();
      }
    }

    const handleChange = (event) => {
      
      const {id, value} = event.target;
      setEmployee({...employee, [id]: value})
      
      if(value !== ''){
        setErrors({ ...errors, [id]: '' })
      }
    };

    const handleSubmit = (event) => {

      event.preventDefault();

      let hasError = false;
      const newErrors = {};

      Object.keys(employee).forEach((key) => {
        if(!employee[key]) {
          newErrors[key] = ` is a required field`;
          hasError = true;
        }
      })

      setErrors(newErrors);

      if(!hasError){
        const jsonData = JSON.stringify(employee);
        console.log(jsonData);


    /*  try {
          const response = await axios.post('/api/employee', employee); // Replace with your API endpoint
          if (response.status === 200) {
            setDialog({ open: true, message: 'Employee registered successfully!', success: true });
          } else {
            setDialog({ open: true, message: 'Registration failed!', success: false });
          }
        } catch (error) {
          setDialog({ open: true, message: 'Registration failed!', success: false });
        } */

      }
    }


    const closeDialog = () => {
      setDialog({ open: false, message: '', success: false });
    };

    const theme = createTheme({
      palette: {
        primary: {
          main: '#44b386',
        },
      },
    });
  
    return (
    <div className='create-employee'>
      <div className='form'>
        <div className='image'>
          <KeyboardBackspaceRounded className="back-button" htmlColor='#818283' onClick={() => {navigate("/")}}/>
        </div>
        <div className="edit-form">
          <h1>Create Employee</h1>
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
                       onChange={handleChange}
                       value={employee.empId}/>
          </Paper>
          { errors.empId && 
            <div className="error">
              <ErrorOutlineIcon className="error-icon" />
              <span id="empId-error" >
                Employee ID {errors.empId}
              </span>
            </div>
          }
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
          { errors.name && 
              <div className="error">
                <ErrorOutlineIcon className="error-icon" />
                <span id="name-error" >
                  Name {errors.name}
                </span>
              </div>
          }
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
          { errors.worksite && 
                <div className="error">
                  <ErrorOutlineIcon className="error-icon" />
                  <span id="worksite-error" >
                    Worksite {errors.worksite}
                  </span>
                </div>
          }
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
          { errors.wageRate && 
                <div className="error">
                  <ErrorOutlineIcon className="error-icon" />
                  <span id="wageRate-error" >
                    Wage Rate {errors.wageRate}
                  </span>
                </div>
          }   
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
          { errors.overtimeRate && 
                  <div className="error">
                    <ErrorOutlineIcon className="error-icon" />
                    <span id="overtimeRate-error" >
                      Overtime Rate {errors.overtimeRate}
                    </span>
                  </div>
          }
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
          { errors.dueAmount && 
                <div className="error">
                  <ErrorOutlineIcon className="error-icon" />
                  <span id="dueAmount-error" >
                    Due Amount {errors.dueAmount}
                  </span>
                </div>
          }   
          <ThemeProvider theme={theme}>
            <Button variant='contained' className='submit-button' onClick={handleSubmit}>
              Submit
            </Button>
          </ThemeProvider>
          {dialog.open && (
            <div className={`dialog ${dialog.success ? 'success' : 'failure'}`}>
              <p>{dialog.message}</p>
              <button onClick={closeDialog}>Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CreateEmployee