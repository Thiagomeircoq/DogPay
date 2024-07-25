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

            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow border-0" placeholder="Email" />
            </label>
           

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