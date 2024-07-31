import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from 'dayjs'
import React, { useState } from 'react'

const EmployeeRegister = () => {

  const [ selectedDate, setSelectedDate ] = useState(dayjs());
  const [ employee, setEmployee ] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  return (
    <div className='employee-register'>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker 
                className='calendar'
                orientation='landscape'
                value={selectedDate}
                onAccept={handleDateChange}/>
          </LocalizationProvider>
        </div>
        <div>
          { employee ? (
              <div>

              </div>
          ) : (
              <div>
                
              </div>
          )}
        </div>
    </div>
  )
}

export default EmployeeRegister