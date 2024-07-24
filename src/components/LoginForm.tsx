import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from '../schemas/UserSchema';
import Button from './Button';
import InputField from './InputField';
import PasswordInputField from './PasswordInputField';
import axios from 'axios';
import { z } from 'zod';

type LoginFormData = z.infer<typeof UserSchema>;

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(UserSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await axios.post('http://localhost:3100/auth/signup', data);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField id="email" label="E-mail:" type="email" autoComplete="email" register={register} error={errors.email?.message} />
            <PasswordInputField id="password" label="Password:" autoComplete="current-password" register={register} error={errors.password?.message} />
            
            <div className='flex justify-between mt-0'>
                <div className='space-x-3'>
                    <input className='bg-gray-200' type="checkbox" name="remenber_me" />
                    <span className='text-blue-600 text-sm'>Remember me</span>
                </div>
                
                <div className='space-x-3'>
                    <a href='#' className='text-blue-600 text-sm'>Forgot Passowrd?</a>
                </div>
            </div>

            <Button text="Sign Up" />
            
        </form>
    );
};

export default LoginForm;