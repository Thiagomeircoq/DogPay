import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from '../schemas/UserSchema';
import Button from './Button';
import InputField from './InputField';
import PasswordInputField from './PasswordInputField';
import axios from 'axios';
import { z } from 'zod';
import { Toast, ToastToggle } from 'flowbite-react';
import { HiCheck, HiExclamation } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type SignUpFormData = z.infer<typeof UserSchema>;

const SignUpForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
        resolver: zodResolver(UserSchema),
    });

    const navigate = useNavigate();

    const [toastData, setToastData] = useState<{ severity: 'success' | 'error' | 'warn'; message: string } | null>(null);

    const onSubmit = async (data: SignUpFormData) => {
        try {
            const response = await axios.post('http://localhost:3100/auth/signup', data);
            if (response.status === 201) {
                const token = response.data.token;
                Cookies.set('token', token, { expires: 7 });
                setToastData({ severity: 'success', message: 'Cadastro realizado com sucesso! Redirecionando para a tela de login...' });
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 422 || error.response.status === 409) {
                    setToastData({ severity: 'warn', message: error.response.data.message || 'Erro de validação ou conflito.' });
                } else if (error.response.status === 500) {
                    setToastData({ severity: 'error', message: error.response.data.message || 'Erro no servidor. Por favor, tente novamente mais tarde.' });
                } else {
                    setToastData({ severity: 'error', message: 'Algo deu errado. Por favor, tente novamente.' });
                }
            } else {
                setToastData({ severity: 'error', message: 'Erro na conexão. Por favor, verifique sua internet e tente novamente.' });
            }
        }
    };

    return (
        <>
            {toastData && (
                <Toast>
                    <div className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${toastData.severity === 'success' ? 'bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200' : 'bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200'}`}>
                        {toastData.severity === 'success' ? <HiCheck className="h-5 w-5" /> : <HiExclamation className="h-5 w-5" />}
                    </div>
                    <div className="ml-3 text-sm font-normal">{toastData.message}</div>
                    <ToastToggle />
                </Toast>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <InputField id="username" label="Username:" type="text" autoComplete="username" register={register} error={errors.username?.message} />
                <InputField id="email" label="E-mail:" type="email" autoComplete="email" register={register} error={errors.email?.message} />
                <PasswordInputField id="password" label="Password:" autoComplete="current-password" register={register} error={errors.password?.message} />
                <PasswordInputField id="password_confirm" label="Password Confirm:" autoComplete="password-confirm" register={register} error={errors.password_confirm?.message} />
                <Button text="Sign Up" />
            </form>
        </>
    );
};

export default SignUpForm;
