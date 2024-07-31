import { Button, createTheme, IconButton, InputBase, Paper, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const GetEmployee = () => {

  const [ employeeId, setEmployeeId ] = useState("");
  const [ employee, setEmployee ] = useState({
    name: "",
    worksite: "",
    wageRate: "",
    overtimeRate: ""
  })
  const [ employeeDetails, setEmployeeDetails ] = useState(null)
  const [ searchInitiated, setSearchInitiated ] = useState(false)

  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchInitiated(true);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#44b386',
      },
    },
  });

  return (
    <div className="get-employee">
      <h1>Fetch Employee Details</h1>
      <div className='fixed-content'>
        <Paper 
            className='paper' 
            component='form'
            onSubmit={(event) => {
              event.preventDefault();
              handleSearch(); 
            }}>
          <InputBase
            className='search-bar'
            placeholder='Search Employee (ID)'
            inputProps={{'aria-label': 'search employee'}}
            value={employeeId}
            onChange={(event) => {
              setEmployeeId(event.target.value);
            }}/>
          <IconButton 
              type="submit" 
              aria-label="search">
            <SearchRoundedIcon className='search-icon' htmlColor='#8e8e8e'/>
          </IconButton>  
        </Paper>
        
        <div className='advance-search'>
          <div className='desc'>
            <h2>ADVANCED SEARCH</h2>
          </div>
          <div className='row'>
            <Paper className='paper-second' component="form">
              <InputBase
                className='search-bar'
                placeholder='Name'
                inputProps={{'aria-label': 'search name'}}
                value={employee.name}/>
            </Paper>
            <Paper className='paper-second' component="form">
              <InputBase
                className='search-bar'
                placeholder='Worksite'
                inputProps={{'aria-label': 'search worksite'}}
                value={employee.worksite}/>
            </Paper>
          </div>
          <div className='row'>
            <Paper className='paper-second' component="form">
              <InputBase
                className='search-bar'
                placeholder='Wage Rate'
                inputProps={{'aria-label': 'search wage rate'}}
                value={employee.worksite}/>
            </Paper>
            <Paper className='paper-second' component="form">
              <InputBase
                className='search-bar'
                placeholder='Overtime Rate'
                inputProps={{'aria-label': 'search overtime Rate'}}
                value={employee.overtimeRate}/>
            </Paper>
          </div>
          <div className='row-last'>
            <ThemeProvider theme={theme}>
              <Button variant='contained' className='submit-button'>
                Search
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetEmployee