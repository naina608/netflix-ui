import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import SignUp from './pages/SignUp'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import MyList from './pages/MyList'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/' element={<Netflix/>}></Route>
        <Route exact path='/player' element={<Player/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/movies' element={<Movies/>}></Route>
        <Route exact path='/tv' element={<TvShows/>}></Route>
        <Route exact path='/mylist' element={<MyList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
