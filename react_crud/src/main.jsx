import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './componet/Home.jsx'
import Create from './componet/Create.jsx'
import Edit from './componet/Edit.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/edit/:userid' element={<Edit></Edit>}></Route>
      </Routes>
   </BrowserRouter>
  </StrictMode>,
)
