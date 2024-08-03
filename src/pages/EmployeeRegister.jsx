import { Button, Card, CardContent, createTheme, ThemeProvider, Typography } from '@mui/material'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeRegister = () => {

  const navigate = useNavigate();

  const [ selectedDate, setSelectedDate ] = useState(dayjs());
  const [ attendance, setAttendance ] = useState(null);
  const [ selectedWorksite, setSelectedWorksite ] = useState("");
  const [ worksites, setWorksites ] = useState([]);
  const [ searchInitiated, setSearchInitiated ] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSearchInitiated(true);
    console.log(selectedDate)
  }

  const theme = createTheme({
    palette: {
      black: {
        main: '#0a0a0a',
        light: '#2f2f2f',
        dark: '#000000',
        contrastText: '#e7e7e7',
      },
    },
  });

  return (
    <div className='employee-register'>
        <div className='calendar-container'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker 
                className='calendar'
                orientation='landscape'
                value={selectedDate}
                onAccept={handleDateChange}/>
          </LocalizationProvider>
        </div>
        <div>
          { worksites.length > 0 ? (
              <div className='worksite-card'>
                {worksites.map((worksite, index) => (
                  <Card 
                      key={index} 
                      className="worksite-details" 
                      onClick={() => handleWorksiteClick(worksite.worksite)}
                      style={{
                        marginBottom: '10px',
                        cursor: 'pointer',
                        backgroundColor: selectedWorksite === worksite.worksite ? '#e0f7fa' : '#fff'
                      }}>
                    <CardContent>
                      <Typography variant="h5">{worksite.worksite}</Typography>
                      <Typography>Total Employees: {worksite.totalEmployees}</Typography>
                      <Typography>Employees Present: {worksite.employeesPresent}</Typography>
                      <Typography>Total Work Load: {worksite.totalWorkLoad}</Typography>
                      <Typography>Total Overtime Hours: {worksite.totalOvertimeHours}</Typography>
                      <Typography>Total Advance Payment: {worksite.totalAdvancePayment}</Typography>
                      <Typography>Total Amount: {worksite.totalAmount}</Typography>
                    </CardContent>
                </Card>
                ))}
              </div>
          ) : ( searchInitiated && (
              <div className='empty-file'>
                <div className='empty-file-image'/>
                <h1>No Worksite data found</h1>
                <p>We couldn't find any employee data in the registry. Please try again</p>
                <ThemeProvider theme={theme}>
                  <Button 
                      variant='contained' 
                      color='black' 
                      onClick={() => {navigate("/createEmployee")}}>
                    
                    + New Employee
                  </Button>
                </ThemeProvider>
              </div>
            ))}
        </div>
        <div>
          {selectedWorksite && (
            <div>
              {attendance.length > 0 ? (
                <div>

                </div>
              ) : (
                <div>
                  
                </div>
              )}
            </div>
          )}
        </div>
    </div>
  )
}

export default EmployeeRegister