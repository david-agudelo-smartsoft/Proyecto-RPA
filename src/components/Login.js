import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { login } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            console.log(error.code);
            if (error.code === 'auth/weak-password') {
                setError('Contraseña invalida')
            }
            // setError(error.message);
        }
    };

    return (
        <div>

        {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="youremail@example.com"
                    onChange={handleChange}
                ></input>

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    onChange={handleChange}></input>
                <button>Login</button>
            </form>
        </div>

    )
}

