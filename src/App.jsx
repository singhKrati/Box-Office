import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import MovieList from './components/movieList/movieList'
import Movie from './pages/movieDetail/movie'
//429caaf92b1483584edfcdcb1aeb1f8f

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route index element ={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path = 'movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
