import React, { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;
    const navigate = useNavigate();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/auth/login', formData);
            const token = res.data.token;
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            const userRole = decodedToken.role;

            if (userRole === 'vendor') {
                navigate('/vendor');
            } else if (userRole === 'delivery') {
                navigate('/delivery');
            } else if (userRole === 'charity') {
                navigate('/charity');
            }
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={onChange} required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
