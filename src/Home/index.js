import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ()=> {
    const navigate = useNavigate()
    const [token, setToken] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token);
        if(!token) {
            return navigate('/login')
        }

    }, [navigate]);
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home;