import React, { useState } from 'react';
import Message from './Message';
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordInputFieldProps {
    id: string;
    label: string;
    autoComplete: string;
    required?: boolean;
    register: any;
    error?: string;
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({ id, label, autoComplete, required, register, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-500">
                {label}
            </label>
            <div className="mt-2 relative">
                <input
                    id={id}
                    name={id}
                    type={showPassword ? "text" : "password"}
                    required={required}
                    autoComplete={autoComplete}
                    className="block w-full rounded-md bg-gray-100 border-0 py-2 px-3 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:outline-none focus:ring-inset sm:text-sm sm:leading-6"
                    {...register(id)}
                />
                <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                    {showPassword ? (
                        <FaEye className='text-gray-600' />
                    ) : (
                        <FaEyeSlash className='text-gray-600' />
                    )}
                </button>
            </div>
            {error && <Message type="error" message={error} />}
        </div>
    );
};

export default PasswordInputField;