import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/home'

export function AppRoutes() {
    return (
        <Routes>
                <Route path='/' element={<Home />}></Route>
        </Routes>
    )
}