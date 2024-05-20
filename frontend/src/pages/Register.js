import React, { useState } from 'react';
import axios from '../services/api';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'vendor',
    });

    const { name, email, password, role } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('/auth/register', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={onChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={onChange} required />
            </div>
            <div>
                <label>Role</label>
                <select name="role" value={role} onChange={onChange}>
                    <option value="vendor">Vendor</option>
                    <option value="delivery">Delivery Personnel</option>
                    <option value="charity">Charity/Food Bank</option>
                </select>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
