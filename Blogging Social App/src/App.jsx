import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage/HomePage'
import AuthPage from './Pages/HomePage/AuthPage/AuthPage'
function App() {

  return (
    <>
    { /* //coming from react router dom */ }
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/auth' element={<AuthPage/>} />
      </Routes>
    </>
  )
}

export default App
