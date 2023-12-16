import { Routes, Route, useNavigate } from 'react-router-dom'
import { verifiedAccount } from '../../utils'
import Dashboard from './dashboard/Dashboard'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Base() {
    const account = useSelector(state => state.source.account)
    const navigate = useNavigate()
    useEffect(() => {
        if (!verifiedAccount()) return navigate('/login')
    },[account, navigate])
    return <Routes>
        <Route path='/' Component={Dashboard}/>
    </Routes>
}