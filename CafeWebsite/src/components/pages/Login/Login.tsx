import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/auth.services';
import { setLocalStorage } from '../../../utils/storage';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import styles from './Login.module.css';
import type { FormEvent } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const HandleLogin = async ( event: FormEvent) => {

        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const payload = {
            email : form.email.value,
            password : form.password.value
        }
        const result = await login (payload);
        setLocalStorage('auth', result.token);
        return navigate('/orders') 
    };

    return (
        <main className={styles.Login}>
            <div className ={styles.card}>
                <h1 className = {styles.title}>Login Page</h1>
                <form className={styles.form} onSubmit={HandleLogin}>

                    <Input
                    label="Email"
                    type='email'
                    id='Email'
                    name='email'
                    placeholder='Insert Email'
                    required
                    />

                    <Input
                    label="Password"
                    type='password'
                    id='Password'
                    name='password'
                    placeholder='Insert Password'
                    required
                    />

                    <Button type="submit" color="primary" >Login</Button>
                </form>
            </div>
        </main>

    )
}

export default Login;