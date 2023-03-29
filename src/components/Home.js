import { useAuth } from '../context/authContext'

export function Home() {

    const {user, logout, loading} = useAuth();
    console.log(user)

    const handleLogOut = async () => {
        await logout();
    };
    if (loading) return <h1>loading</h1>
    return (
        <div>
            <h1>
                Bienvenido {user.email}
            </h1>
            <button onClick={handleLogOut}>
                Logout 
            </button>
        </div>
    )
}