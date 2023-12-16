import { useDispatch } from "react-redux"
import { setLocalStorage } from "../../utils"
import { setAccount } from "../../redux/source"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function LoginToMyAccount() {
        setLocalStorage('account', {username: 'yourusername', password: 'yourpassword'})
        dispatch(setAccount())
        navigate('/')
    }

    return <div className="h-screen grid place-content-center">
        <button className="btn btn-accent" onClick={LoginToMyAccount}>Login</button>
    </div>
}