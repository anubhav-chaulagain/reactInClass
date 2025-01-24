import { useNavigate } from "react-router-dom"

export default function Register() {
    const navigate = useNavigate();
    return (
        <form action="">
            <h1>Sign Up</h1>
            <p>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email"/>
            </p>
            <p>
                <label htmlFor="name">Username: </label>
                <input type="text" id="name"/>
            </p>
            <p>
                <label htmlFor="pass">Password: </label>
                <input type="text" id="pass"/>
            </p>
            <button onClick={()=>navigate('/login')}>Register</button>
        </form>
    )
}