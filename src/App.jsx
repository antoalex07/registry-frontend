import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CreateEmployee from './pages/CreateEmployee'
import GetEmployee from './pages/GetEmployee'
import UpdateEmployee from './pages/UpdateEmployee'
import DeleteEmployee from './pages/DeleteEmployee'
import EmployeeRegister from './pages/EmployeeRegister'
import GenerateBill from './pages/GenerateBill'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'                 element={<Home/>} />
        <Route path='/createEmployee'   element={<CreateEmployee/>} />
        <Route path='/getEmployee'      element={<GetEmployee/>} />
        <Route path='/updateEmployee'   element={<UpdateEmployee/>} />
        <Route path='/deleteEmployee'   element={<DeleteEmployee/>} />
        <Route path='/employeeRegister' element={<EmployeeRegister/>} />
        <Route path='/generateBill'     element={<GenerateBill/>} />
      </Routes>
    </div>
  )
}

export default App
