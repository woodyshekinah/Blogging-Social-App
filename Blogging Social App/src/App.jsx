import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'

function App() {

  return (
    <>
    { /* //coming from react router dom */ }
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App
