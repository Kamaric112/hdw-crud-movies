import React from 'react'
import { Routes, Route } from 'react-router-dom'
import BlankLayout from '../layouts/BlankLayout'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MovieDetailPage from '../pages/MovieDetailPage'
import NotFoundPage from '../pages/NotFoundPage'
import AuthRequire from './AuthRequire'
function Router() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <AuthRequire>
            <MainLayout />
          </AuthRequire>
        }
      >
        <Route index element={<HomePage />}></Route>
        <Route path='page/:pageId' element={<HomePage />}></Route>
        <Route path='movie/:movieId' element={<MovieDetailPage />}></Route>
      </Route>
      <Route element={<BlankLayout />}>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default Router
