import { useNavigate } from "react-router-dom"
export default function Login() {
    const navigate = useNavigate();
    return (
        <form action="">
            <h1>Login</h1>
            <p>
                <label htmlFor="name">Username: </label>
                <input type="text" id="name"/>
            </p>
            <p>
                <label htmlFor="pass">Password: </label>
                <input type="text" id="pass"/>
            </p>
            <button onClick={()=>navigate('/signup')}>Create Account?</button>
            <button>Login</button>
        </form>
    )
}