import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from '../schemas/UserSchema';
import Button from '../components/Button';
import InputField from '../components/InputField';
import PasswordInputField from '../components/PasswordInputField';
import axios from 'axios';
import { z } from 'zod';

type SignUpFormData = z.infer<typeof UserSchema>;

const SignUpForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(UserSchema),
    });

    const onSubmit = async (data: SignUpFormData) => {
        try {
            const response = await axios.post('http://localhost:3100/auth/signup', data);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField id="username" label="Username:" type="text" autoComplete="username" register={register} error={errors.username?.message} />
            <InputField id="email" label="E-mail:" type="email" autoComplete="email" register={register} error={errors.email?.message} />
            <PasswordInputField id="password" label="Password:" autoComplete="current-password" register={register} error={errors.password?.message} />
            <PasswordInputField id="password_confirm" label="Password Confirm:" autoComplete="password-confirm" register={register} error={errors.password_confirm?.message} />
            <Button text="Sign Up" />
        </form>
    );
};

export default SignUpForm;