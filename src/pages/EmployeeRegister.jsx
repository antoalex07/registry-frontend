import { Button, Card, CardContent, createTheme, ThemeProvider, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeRegister = () => {

  const navigate = useNavigate();

  const [ selectedDate, setSelectedDate ] = useState(dayjs());
  const [ attendances, setAttendances ] = useState(null);
  const [ selectedWorksite, setSelectedWorksite ] = useState("");
  const [ worksites, setWorksites ] = useState([]);
  const [ searchInitiated, setSearchInitiated ] = useState(false);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 130
    },
    {
      field: 'workload',
      headerName: 'Workload',
      width: 130
    },
    {
      field: 'overtimeHours',
      headerName: 'Overtime Hours',
      width: 130
    },
    {
      field: 'salary',
      headerName: 'Salary',
      width: 130
    },
    {
      field: 'advance',
      headerName: 'Advance',
      width: 130
    },
    {
      field: 'totalAmount',
      headerName: 'Total Amount',
      width: 130
    },
    {
      field: 'billSettled',
      headerName: 'Bill Settled',
      width: 130
    },
  ]

  const handleDateChange = (date) => {
    
    setSelectedDate(date);
    setSearchInitiated(true);
    
    console.log(selectedDate)

    const worksiteData = [
      {
        worksite: "Site A",
        totalEmployees: 50,
        employeesPresent: 45,
        totalWorkLoad: "100 tons",
        totalOvertimeHours: 20,
        totalAdvancePayment: "$500",
        totalAmount: "$5000"
      },
      {
        worksite: "Site B",
        totalEmployees: 30,
        employeesPresent: 28,
        totalWorkLoad: "80 tons",
        totalOvertimeHours: 10,
        totalAdvancePayment: "$300",
        totalAmount: "$3000"
      }
    ];
    setWorksites(worksiteData);
  }

  const handleWorksiteClick = (worksite) => {
    setSelectedWorksite(worksite);
    fetchAttendances(worksite);
  }

  const fetchAttendances = (worksite) => {
    const attendanceData = [
      { id: "123", name: "anto", workload: "2", overtimeHours: "4", salary: "1200", advance: "100", totalAmount: "1100", billSettled: true },
      { id: "124", name: "abby", workload: "1", overtimeHours: "5", salary: "1000", advance: "200", totalAmount: "800", billSettled: false },
      { id: "125", name: "appu", workload: "3", overtimeHours: "1", salary: "1500", advance: "600", totalAmount: "900", billSettled: true },
      { id: "126", name: "ajo", workload: "1", overtimeHours: "3", salary: "1700", advance: "500", totalAmount: "1200", billSettled: false },
    ]

    setAttendances(attendanceData);
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
                { worksites.map((worksite, index) => (
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
          { selectedWorksite && (
            <div>
              { attendances.length > 0 ? (
                <div>
                  <DataGrid
                    className='table'
                    rows={attendances}
                    columns={columns}/>

                  <div>
                    
                  </div>
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