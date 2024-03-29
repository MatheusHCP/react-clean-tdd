import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from '@/presentation/pages'

function Router(){
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default Router